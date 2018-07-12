import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert, Platform, View } from 'react-native';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import LayoutStyle from 'LayoutStyle';
import ReduxField from 'ReduxField';
import { reduxForm, change } from 'redux-form';
import { Dropdown } from 'react-native-material-dropdown';
import StyleConfig from 'StyleConfig';
import { getMonths, getYears, getCardType, _doFormat } from 'global';
import { Actions } from 'react-native-router-flux';
import API from 'AppUtils';
import withLoader from 'withLoader';
import withToast from 'withToast';
import withCard from 'withCard';
import CheckboxButton from 'CheckboxButton';
import ReplaceCreditCardStyle from 'ReplaceCreditCardStyle';

class ReplaceCreditCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            months:[],
            month:'Month',
            years:[],
            year:'Year',
            btnDisable:false,
            cardTypeLogo:null,
        }
    }

    async componentWillMount(){
        this.setState({
            months: await getMonths(),
            years: await getYears(),
        });
    }

    _onCardNumberEnter = (value) => {
        let data = getCardType(value);
        this.setState({
            cardTypeLogo:(data != null) ? StyleConfig.cardType[data].image : null
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
        dispatch(change('replaceCardForm', fieldName, value));
        (fieldName == 'number') ? this._onCardNumberEnter(value) : null;
    }

    _responseOfApi = (message, type) => {
        const { loader, toast } = this.props;
        loader(false);
        this.setState({
            btnDisable: false
        });
        toast({text:message, type, navBar:true});
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
                    this._responseOfApi(message, 'danger');
                } else {
                    this._replacePaymentsById({'token':response.id});
                }
            }).catch(() => {
            loader(false);
        });
    }

    _replacePaymentsById = (newCardData) => {
        const { loader, selectedCard } = this.props;
        this.setState({
            btnDisable: true
        });
        setTimeout(() => { loader(true);}, 1);
        let data = {
            newCardData,
            oldCardData:selectedCard
        }
        API.replacePaymentsById(data)
            .then((response) => {
                const { error, message } = response;
                if(!error) {
                    this._responseOfApi('Card updated', 'success');
                    Actions.viewProfile();
                } else {
                    this._responseOfApi(message, 'danger');
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    render() {
        const { month, year, months, years, btnDisable, cardTypeLogo } = this.state;
        const { invalid, handleSubmit, selectedCard } = this.props;
        return (
            <Content style={LayoutStyle.rootContainer}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row style={ReplaceCreditCardStyle.gridRow}>
                        <Col style={ReplaceCreditCardStyle.gridCol}>
                            <Row style={ReplaceCreditCardStyle.replaceCreditCardLabelRow}>
                                <Col style={ReplaceCreditCardStyle.replaceCreditCardLabelCol}>
                                    <Label style={ReplaceCreditCardStyle.replaceCreditCardLabel}>REPLACE CREDIT CARD</Label>
                                </Col>
                            </Row>
                            <Row style={ReplaceCreditCardStyle.replaceCreditCardLabelDescRow}>
                                <Col style={ReplaceCreditCardStyle.replaceCreditCardLabelDescCol}>
                                    <Label style={ReplaceCreditCardStyle.replaceCreditCardLabelDesc}>
                                        When replacing your existing credit card any properties that are tied to it will be moved over to the new card.
                                    </Label>
                                </Col>
                            </Row>
                            <Grid style={ReplaceCreditCardStyle.cardGrid}>
                                <Row style={ReplaceCreditCardStyle.cardRow}>
                                    <Col style={ReplaceCreditCardStyle.cardCol}>
                                        <Row style={ReplaceCreditCardStyle.cardImageRow}>
                                            <Col size={0.4} style={ReplaceCreditCardStyle.cardImageCol}>
                                                <Image source={cardTypeLogo}
                                                       style={ReplaceCreditCardStyle.cardImage}/>
                                            </Col>
                                            <Col size={0.2} style={ReplaceCreditCardStyle.goodLabelCol}>
                                                <Label style={ReplaceCreditCardStyle.goodLabel}>GOOD
                                                    THRU</Label>
                                            </Col>
                                            <Col size={0.5}
                                                 style={[ReplaceCreditCardStyle.cardImageCol, ReplaceCreditCardStyle.cardImageCol2]}>
                                                <Dropdown
                                                    label=""
                                                    value={month}
                                                    fontSize={StyleConfig.fontSizeH4}
                                                    textColor={StyleConfig.black}
                                                    baseColor={StyleConfig.blue}
                                                    itemColor={StyleConfig.navyMediumLight}
                                                    selectedItemColor={StyleConfig.black}
                                                    itemTextStyle={ReplaceCreditCardStyle.selectItemText}
                                                    containerStyle={ReplaceCreditCardStyle.yearContainer}
                                                    pickerUserStyle={ReplaceCreditCardStyle.pickerContainer}
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
                                                 style={[ReplaceCreditCardStyle.cardImageCol, ReplaceCreditCardStyle.cardImageCol2]}>
                                                <Dropdown
                                                    label=""
                                                    value={year}
                                                    fontSize={StyleConfig.fontSizeH4}
                                                    textColor={StyleConfig.black}
                                                    baseColor={StyleConfig.blue}
                                                    itemColor={StyleConfig.navyMediumLight}
                                                    selectedItemColor={StyleConfig.black}
                                                    itemTextStyle={ReplaceCreditCardStyle.selectItemText}
                                                    containerStyle={ReplaceCreditCardStyle.yearContainer}
                                                    data={years}
                                                    onChangeText={(value) => {
                                                        this._onChangeValue('year', value)
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row style={ReplaceCreditCardStyle.formInputRow}>
                                            <Col>
                                                <ReduxField
                                                    name="number"
                                                    label="Number"
                                                    keyboardType='numeric'
                                                    inputFormat="XXXX XXXX XXXX XXXX"
                                                    onChangeText={this._handleFormatChangeText.bind(this, 'number')}
                                                    placeholder="Type here"
                                                    style={ReplaceCreditCardStyle.formInput}
                                                    labelInputStyle={ReplaceCreditCardStyle.labelInput}
                                                    errorInputStyle={ReplaceCreditCardStyle.errorLabelInput}
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
                                                    style={ReplaceCreditCardStyle.formInput}
                                                    labelInputStyle={ReplaceCreditCardStyle.labelInput}
                                                    errorInputStyle={ReplaceCreditCardStyle.errorLabelInput}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    autoFocus={true}
                                                    maxLength={22}
                                                />
                                            </Col>
                                            <Col size={0.5} style={ReplaceCreditCardStyle.cvc}>
                                                <ReduxField
                                                    name="cvc"
                                                    label="CVC"
                                                    keyboardType='numeric'
                                                    placeholder="Type here"
                                                    style={ReplaceCreditCardStyle.formInput}
                                                    labelInputStyle={ReplaceCreditCardStyle.labelInput}
                                                    errorInputStyle={ReplaceCreditCardStyle.errorLabelInput}
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
                            <Row
                                style={[LayoutStyle.makeDefaultBtnRow, {opacity: 0.5 }]}>
                                <Col size={0.3} style={LayoutStyle.makeDefaultBtnCol1}>
                                    <CheckboxButton size={1} setDefaultCard={selectedCard.default} disabled={true}/>
                                </Col>
                                <Col style={LayoutStyle.makeDefaultBtnCol2}>
                                    <Label style={LayoutStyle.makeDefaultBtnLabel}>Make this card your
                                        default payment method</Label>
                                </Col>
                            </Row>
                            <Grid>
                                <Row style={ReplaceCreditCardStyle.replaceCardBtnRow}>
                                    <Col style={ReplaceCreditCardStyle.replaceCardBtnCol}>
                                        <TouchableOpacity
                                            onPress={handleSubmit(this._saveCard.bind(this))}
                                            disabled={(btnDisable) ? btnDisable : invalid}
                                            style={[LayoutStyle.buttonH1,
                                                ((btnDisable) ? btnDisable : invalid ) ? ReplaceCreditCardStyle.replaceCardBtnDisabled : ReplaceCreditCardStyle.replaceCardBtn]}>
                                            <Label
                                                style={[LayoutStyle.buttonH1Text, ReplaceCreditCardStyle.replaceCardBtnTxt]}>
                                                REPLACE CARD
                                            </Label>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row style={ReplaceCreditCardStyle.cancelBtnRow}>
                                    <Col style={ReplaceCreditCardStyle.cancelBtnCol}>
                                        <TouchableOpacity onPress={() => {Actions.creditCardOptions()}}>
                                            <Label style={[LayoutStyle.buttonH1Text, ReplaceCreditCardStyle.cancelBtnTxt]}>
                                                CANCEL
                                            </Label>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
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
    form: 'replaceCardForm',
    validate,
    initialValues
});

export default withCard(withToast(withLoader(withForm(ReplaceCreditCard))));
