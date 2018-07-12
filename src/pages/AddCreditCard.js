import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert, Platform, View } from 'react-native';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import LayoutStyle from 'LayoutStyle';
import AddCreditCardStyle from 'AddCreditCardStyle';
import IconEntypo from 'react-native-vector-icons/Entypo';
import ReduxField from 'ReduxField';
import { reduxForm, change } from 'redux-form';
import { Dropdown } from 'react-native-material-dropdown';
import StyleConfig from 'StyleConfig';
import { getMonths, getYears, getCardType, _doFormat } from 'global';
import { Actions } from 'react-native-router-flux';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';
import API from 'AppUtils';
import withLoader from 'withLoader';
import withToast from 'withToast';
import CheckboxButton from 'CheckboxButton';
import CreditCard from 'CreditCard';
import JustAnFyi from 'JustAnFyi';
import withProperty from 'withProperty';

class AddCreditCard extends Component{

    constructor(props){
        super(props);

        this.state = {
            months:[],
            month:'Month',
            years:[],
            year:'Year',
            btnDisable:false,
            isVerified:false,
            setDefaultCard:false,
            isFirstCard:false,
            cardTypeLogo:null,
            showCardData:null,
            notifyScreen:false
        }
    }

    async componentWillMount(){
        if (Platform.OS === 'ios') {
            CardIOUtilities.preload();
        }
        this.setState({
            months: await getMonths(),
            years: await getYears(),
        });
    }

    componentDidMount(){
        const { loader } = this.props;
        setTimeout(() => { loader(true);}, 1);
        API.getPayments()
        .then((response) => {
            const { error } = response;
            if(!error) {
                const { payments } = response;
                if(payments.length <= 0) {
                    this.setState({
                        isFirstCard: true,
                        setDefaultCard:true
                    });
                }
            }
            loader(false);
        }).catch(() => {
            loader(false);
        });
    }

    _onChangeValue = (name, value) => {
        this.setState({
            [name]:value.toString().substr(-2)
        });
        this.props.change('exp_'+name, value);
    }

    _handleFormatChangeText = (fieldName, value) => {
        const { dispatch } = this.props;
        dispatch(change('creditCardForm', fieldName, value));
        (fieldName == 'number') ? this._onCardNumberEnter(value) : null;
    }

    _scanCard() {
        CardIOModule
        .scanCard({
            scanInstructions:`Hold the card - It will scan automatically.`,
            suppressManualEntry: true,
            suppressConfirmation: true,
            hideCardIOLogo: true,
        })
        .then(card => {
            this._handleFormatChangeText('number', _doFormat('XXXX XXXX XXXX XXXX', card.cardNumber));
            this.__onChangeValue('exp_month', card.expiryMonth);
            this.__onChangeValue('exp_year', card.expiryYear);
        })
        .catch((err) => {
            err => console.warn(err)
        })
    }

    _setDefaultCard = (data) => {
        API.setDefaultPayments(data)
        .then((response) => {
            console.log('res', response);
        }).catch(() => {
            loader(false);
        });
    }

    _getPaymentsById = (data) => {
        const { loader } = this.props;
        setTimeout(() => { loader(true);}, 1);
        API.getPaymentsById(data)
        .then((response) => {
            const { error } = response;
            if(!error) {
                this.setState({
                    showCardData:response,
                    isVerified: true
                });
            }
            loader(false);
        }).catch(() => {
            loader(false);
        });
    }

    _createPayments = (data) => {
        const { loader } = this.props;
        const { isFirstCard, setDefaultCard } = this.state;
        API.createPayments(data)
        .then((response) => {
            loader(false);
            const { error, message } = response;
            if(!error){
                const { payment_id } = response;
                if(isFirstCard || setDefaultCard) {
                     this._setDefaultCard({payment_id});
                }
                this._responseOfApi('Card Saved');
                this._getPaymentsById({payment_id});
                setTimeout(() => {
                    this.setState({
                        isVerified: false
                    });
                    Actions.viewProfile();
                }, 8000);
            } else {
                this._responseOfApi(message);
            }
        }).catch(() => {
            loader(false);
        });
    }

    _saveCard = (data) => {
        const { loader } = this.props;
        this.setState({
            btnDisable: true
        });
        setTimeout(() => { loader(true);}, 1);
        let cardDetails = {
            "card[name]":data.name,
            "card[number]": data.number.replace(/\s/g,''),
            "card[exp_month]": data.exp_month,
            "card[exp_year]": data.exp_year,
            "card[cvc]": data.cvc
        }
        API.saveCard(cardDetails)
        .then((response) => {
            if(response.error){
                const { error:{message} } = response;
                this._responseOfApi(message);
            } else {
                this._createPayments({'token':response.id, 'delete_existing': 0});
            }
        }).catch(() => {
            loader(false);
        });
    }

    _isCheckMarkFirstNotify = (data) => {
        this._saveCard(data);
    }

    _responseOfApi = (message) => {
        const { loader, toast } = this.props;
        loader(false);
        this.setState({
            btnDisable: false
        });
        toast({text:message, type:'success', navBar:true});
    }

    _toggleCheck = () => {
        this.setState({
            setDefaultCard: !this.state.setDefaultCard
        });
    }

    _onCardNumberEnter = (value) => {
        let data = getCardType(value);
        this.setState({
            cardTypeLogo:(data != null) ? StyleConfig.cardType[data].image : null
        });
    }

    _cancelNotifyi = () => {
        this.setState({
            notifyScreen: false
        })
    }

    _cancel = () => {
        const { addPropertyManaging, viewProperty } = this.props;
        if (viewProperty != null && addPropertyManaging) {
            Actions.ownerResident();
        } else if (addPropertyManaging) {
            Actions.managing();
        } else {
            Actions.viewProfile();
        }
    }

    render(){
        const { month, year, months, years, btnDisable, isVerified, setDefaultCard, isFirstCard, cardTypeLogo, showCardData, notifyScreen } = this.state;
        const { invalid, handleSubmit } = this.props;
        return(
            <Content style={LayoutStyle.rootContainer}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row style={AddCreditCardStyle.gridRow}>
                        {
                            (notifyScreen)
                                ?
                                    <JustAnFyi btnDisable={btnDisable} _continueAddCard={handleSubmit(this._saveCard.bind(this))} _cancelNotifyi={this._cancelNotifyi.bind(this)}/>
                                :
                                    <Col style={AddCreditCardStyle.gridCol}>
                                        <Row style={AddCreditCardStyle.addCreditCardLabelRow}>
                                            <Col style={AddCreditCardStyle.addCreditCardLabelCol}>
                                                {
                                                    (!isVerified)
                                                        ? <Label style={AddCreditCardStyle.addCreditCardLabel}>ADD CREDIT
                                                            CARD</Label>
                                                        :
                                                        <Label style={AddCreditCardStyle.addCreditCardLabelSuccess}>Card is
                                                            verified!</Label>
                                                }
                                            </Col>
                                        </Row>
                                        {
                                            (isVerified)
                                                ?
                                                null
                                                :
                                                <Row style={AddCreditCardStyle.addCreditCardLabelRow}>
                                                    <Col style={AddCreditCardStyle.addCreditCardLabelCol}>
                                                        <TouchableOpacity
                                                            onPress={() => {
                                                                this._scanCard()
                                                            }}
                                                            style={[LayoutStyle.buttonH1, AddCreditCardStyle.scanCardBtn]}>
                                                            <Row style={AddCreditCardStyle.scanCardBtnRow}>
                                                                <Col size={0.1} style={AddCreditCardStyle.scanCardBtnCol1}>
                                                                    <IconEntypo name="camera"
                                                                                style={AddCreditCardStyle.scanCardBtnIcon}/>
                                                                </Col>
                                                                <Col style={AddCreditCardStyle.scanCardBtnCol2}>
                                                                    <Text style={[AddCreditCardStyle.scanCardBtnTxt]}>SCAN
                                                                        CREDIT
                                                                        CARD</Text>
                                                                </Col>
                                                            </Row>
                                                        </TouchableOpacity>
                                                    </Col>
                                                </Row>
                                        }
                                        {
                                            (isVerified)
                                                ?
                                                <Row style={AddCreditCardStyle.creditCardRow}>
                                                    <Col style={AddCreditCardStyle.creditCardCol}>
                                                        <CreditCard size={1} showCardData={showCardData}/>
                                                    </Col>
                                                </Row>
                                                :
                                                <Grid style={AddCreditCardStyle.cardGrid}>
                                                    <Row style={AddCreditCardStyle.cardRow}>
                                                        <Col style={AddCreditCardStyle.cardCol}>
                                                            <Row style={AddCreditCardStyle.cardImageRow}>
                                                                <Col size={0.4} style={AddCreditCardStyle.cardImageCol}>
                                                                    <Image source={cardTypeLogo}
                                                                           style={AddCreditCardStyle.cardImage}/>
                                                                </Col>
                                                                <Col size={0.2} style={AddCreditCardStyle.goodLabelCol}>
                                                                    <Label style={AddCreditCardStyle.goodLabel}>GOOD
                                                                        THRU</Label>
                                                                </Col>
                                                                <Col size={0.5}
                                                                     style={[AddCreditCardStyle.cardImageCol, AddCreditCardStyle.cardImageCol2]}>
                                                                    <Dropdown
                                                                        label=""
                                                                        value={month}
                                                                        fontSize={StyleConfig.fontSizeH4}
                                                                        textColor={StyleConfig.black}
                                                                        baseColor={StyleConfig.blue}
                                                                        itemColor={StyleConfig.navyMediumLight}
                                                                        selectedItemColor={StyleConfig.black}
                                                                        itemTextStyle={AddCreditCardStyle.selectItemText}
                                                                        containerStyle={AddCreditCardStyle.yearContainer}
                                                                        pickerUserStyle={AddCreditCardStyle.pickerContainer}
                                                                        data={months}
                                                                        onChangeText={(value) => {
                                                                            this._onChangeValue('month', value)
                                                                        }}
                                                                    />
                                                                </Col>
                                                                <Col size={0.1} style={{
                                                                    alignItems: 'flex-end',
                                                                    justifyContent: 'center'
                                                                }}>
                                                                    <Text>/</Text>
                                                                </Col>
                                                                <Col size={0.5}
                                                                     style={[AddCreditCardStyle.cardImageCol, AddCreditCardStyle.cardImageCol2]}>
                                                                    <Dropdown
                                                                        label=""
                                                                        value={year}
                                                                        fontSize={StyleConfig.fontSizeH4}
                                                                        textColor={StyleConfig.black}
                                                                        baseColor={StyleConfig.blue}
                                                                        itemColor={StyleConfig.navyMediumLight}
                                                                        selectedItemColor={StyleConfig.black}
                                                                        itemTextStyle={AddCreditCardStyle.selectItemText}
                                                                        containerStyle={AddCreditCardStyle.yearContainer}
                                                                        data={years}
                                                                        onChangeText={(value) => {
                                                                            this._onChangeValue('year', value)
                                                                        }}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                            <Row style={AddCreditCardStyle.formInputRow}>
                                                                <Col>
                                                                    <ReduxField
                                                                        name="number"
                                                                        label="Number"
                                                                        keyboardType='numeric'
                                                                        inputFormat="XXXX XXXX XXXX XXXX"
                                                                        onChangeText={this._handleFormatChangeText.bind(this, 'number')}
                                                                        placeholder="Type here"
                                                                        style={AddCreditCardStyle.formInput}
                                                                        labelInputStyle={AddCreditCardStyle.labelInput}
                                                                        errorInputStyle={AddCreditCardStyle.errorLabelInput}
                                                                        autoCapitalize="none"
                                                                        autoCorrect={false}
                                                                        autoFocus={true}
                                                                        maxLength={19}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <ReduxField
                                                                        name="name"
                                                                        label="Cardholder"
                                                                        placeholder="Type here"
                                                                        style={AddCreditCardStyle.formInput}
                                                                        labelInputStyle={AddCreditCardStyle.labelInput}
                                                                        errorInputStyle={AddCreditCardStyle.errorLabelInput}
                                                                        autoCapitalize="none"
                                                                        autoCorrect={false}
                                                                        autoFocus={true}
                                                                        maxLength={22}
                                                                    />
                                                                </Col>
                                                                <Col size={0.5} style={AddCreditCardStyle.cvc}>
                                                                    <ReduxField
                                                                        name="cvc"
                                                                        label="CVC"
                                                                        keyboardType='numeric'
                                                                        placeholder="Type here"
                                                                        style={AddCreditCardStyle.formInput}
                                                                        labelInputStyle={AddCreditCardStyle.labelInput}
                                                                        errorInputStyle={AddCreditCardStyle.errorLabelInput}
                                                                        autoCapitalize="none"
                                                                        autoCorrect={false}
                                                                        autoFocus={true}
                                                                        maxLength={3}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                        }
                                        <Row
                                            style={[LayoutStyle.makeDefaultBtnRow, {opacity: (isFirstCard) ? 0.5 : 1}]}>
                                            <Col size={0.3} style={LayoutStyle.makeDefaultBtnCol1}>
                                                <CheckboxButton size={1} setDefaultCard={setDefaultCard}
                                                                disabled={isFirstCard}
                                                                _toggleCheck={this._toggleCheck.bind(this)}/>
                                            </Col>
                                            <Col style={LayoutStyle.makeDefaultBtnCol2}>
                                                <Label style={LayoutStyle.makeDefaultBtnLabel}>Make this card your
                                                    default payment method</Label>
                                            </Col>
                                        </Row>
                                        {
                                            (isVerified)
                                                ?
                                                null
                                                :
                                                <Grid>
                                                    <Row style={AddCreditCardStyle.saveCardBtnRow}>
                                                        <Col style={AddCreditCardStyle.saveCardBtnCol}>
                                                            <TouchableOpacity
                                                                onPress={handleSubmit(this._isCheckMarkFirstNotify.bind(this))}
                                                                disabled={(btnDisable) ? btnDisable : invalid}
                                                                style={[LayoutStyle.buttonH1,
                                                                    ((btnDisable) ? btnDisable : invalid ) ? AddCreditCardStyle.saveCardBtnDisabled : AddCreditCardStyle.saveCardBtn]}>
                                                                <Label
                                                                    style={[LayoutStyle.buttonH1Text, AddCreditCardStyle.saveCardBtnTxt]}>
                                                                    SAVE CARD
                                                                </Label>
                                                            </TouchableOpacity>
                                                        </Col>
                                                    </Row>
                                                    <Row style={AddCreditCardStyle.cancelBtnRow}>
                                                        <Col style={AddCreditCardStyle.cancelBtnCol}>
                                                            <TouchableOpacity onPress={() => { this._cancel(); }}>
                                                                <Label
                                                                    style={[LayoutStyle.buttonH1Text, AddCreditCardStyle.cancelBtnTxt]}>
                                                                    CANCEL
                                                                </Label>
                                                            </TouchableOpacity>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                        }
                                    </Col>
                        }
                    </Row>
                </Grid>
            </Content>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.number = !values.number
        ? 'Required'
        : values.number.length < 19
            ? 'Number Invalid'
            : undefined;
    errors.name = !values.name
        ? 'Required'
        : undefined;
    errors.cvc = !values.cvc
        ? 'Required'
        : undefined;

    return errors;
};

const initialValues = {
    name:'',
    number:'',
    cvc:'',
    exp_month:'',
    exp_year:''
};

const withForm = reduxForm({
    form: 'creditCardForm',
    validate,
    initialValues
});

export default withProperty(withToast(withToast(withLoader(withForm(AddCreditCard)))));
