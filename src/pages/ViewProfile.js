import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Grid, Row, Col, Thumbnail, Label, Spinner } from 'native-base';
import ViewProfileStyle from 'ViewProfileStyle';
import AppImages from 'AppImages';
import StyleConfig from 'StyleConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { reduxForm } from 'redux-form';
import ReduxField from 'ReduxField';
import API from 'AppUtils';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withUser from 'withUser';
import withProperty from 'withProperty';
import withCard from 'withCard';
import { IMAGE_BASE_URL, API_BASE_URL, MANAGING } from 'global';
import LayoutStyle from 'LayoutStyle';
import CreditCard from 'CreditCard';
import PropertyCard from 'PropertyCard';

class ViewProfile extends Component{

    constructor(props){
        super(props);

        this.state = {
            referralCode: null,
            profileData: {},
            referralCodeMsg: "No Promo Code Entered",
            properties: [],
            residents: [],
            cardList:[],
            isFirstManagingProperty:0
        }
    }

    _onSubmit = ({referralCode:code}) => {
        const { loader, toast } = this.props;
        setTimeout(()=>{ loader(true)}, 1);
        API.setPromocode({code})
            .then(({error,message}) => {
                loader(false);
                if(error) {
                    toast({text:message});
                    this.setState({
                        referralCodeMsg: "No Promo Code Entered"
                    });
                }else {
                    setTimeout(()=>{ loader(true)}, 1);
                    API.getPromocode().then(({error,code_validation}) => {
                        loader(false);
                        if(!error) {
                            this.setState({
                                referralCodeMsg: code_validation
                            });
                        }
                    });
                    toast({text:message});
                }
            })
            .catch(() => {
                loader(false);
            });
    }

    componentDidMount(){
        this._getUserProfile(this.props.user);
        this._listProperties();
        this._listResidents();
        this._getPayments();
        this._getDefaultSettings();
    }

    _getDefaultSettings = () => {
        const { loader } = this.props;
        setTimeout(()=>{loader(true)}, 1);
        API.getDefaultSettings()
            .then((response) => {
                const { error } = response;
                if(!error) {
                    this.setState({
                        isFirstManagingProperty:1
                    });
                    loader(false);
                }
            })
            .catch(() => {
                loader(false);
            });
    }

    _listProperties = () => {
        const { loader } = this.props;
        setTimeout(()=>{loader(true)}, 1);
        API.listProperties()
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const { properties } = response;
                    this.setState({
                        properties
                    });
                    loader(false);
                }
            })
            .catch(() => {
                loader(false);
            });
    }

    _listResidents = () => {
        const { loader } = this.props;
        setTimeout(()=>{loader(true)}, 1);
        API.getAllResident()
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const { residents } = response;
                    this.setState({
                        residents
                    });
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    _getUserProfile = (user) => {
        const { loader, setUser } = this.props;
        setTimeout(()=>{loader(true)}, 1);
        API.getUserProfile(user)
            .then((profileData) => {
                const { error } = profileData;
                if(!error) {
                    setUser(Object.assign(user, profileData));
                    this.setState({
                        profileData
                    });
                    loader(false);
                }
            })
            .catch(() => {
                loader(false);
            });
    }

    async _viewProperty(value){
        const { setViewProperty, setAddManagingProperty } = this.props;
        setViewProperty(value);
        if (value.type == MANAGING) {
            setAddManagingProperty(true);
        } else {
            setAddManagingProperty(false);
        }
        Actions.viewPropertyDetails();
    }


    _addProperty = () => {
        const { setViewProperty } = this.props;
        setViewProperty(null);
        Actions.addProperty();
    }

    _getPayments = () => {
        const { loader } = this.props;
        setTimeout(() => { loader(true);}, 1);
        API.getPayments()
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const { payments } = response;
                    let i=0, cardList=[];
                    payments.map((value, key)=>{
                        if(i <= payments.length) {
                            cardList.push([(payments[i] != undefined) ? payments[i] : null, (payments[i+1] != undefined) ? payments[i+1] : null])
                        }
                        i=i+2;
                    });
                    this.setState({
                        cardList
                    });
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    _gotCardOptions = (data) => {
        const { setSelectedCard } = this.props;
        setSelectedCard(data);
        Actions.creditCardOptions();
    }

    _addCreditCard = () => {
        const { setAddManagingProperty } = this.props;
        setAddManagingProperty(false);
        Actions.addCreditCard();
    }


    render(){
        const { referralCodeMsg, profileData:{first_name, last_name, mobile, zipcode }, properties, cardList, residents, isFirstManagingProperty }  = this.state;
        const { handleSubmit, invalid, user:{ id, email } } = this.props;
        return(
            <Content>
                <Grid style={[ViewProfileStyle.grid1, StyleConfig.shadow]}>
                    <Row style={ViewProfileStyle.grid1Row}>
                        <Col style={ViewProfileStyle.grid1Col}>
                            <Row style={ViewProfileStyle.editBtnRow}>
                                <Col style={ViewProfileStyle.editBtnCol}>
                                    <TouchableOpacity onPress={()=>{Actions.editProfile()}} style={[ViewProfileStyle.editBtn, StyleConfig.shadow]}>
                                        <Text style={ViewProfileStyle.editBtnTxt}>EDIT</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={ViewProfileStyle.profileRow}>
                                <Col style={ViewProfileStyle.profileCol}>
                                    <Thumbnail source={{uri: IMAGE_BASE_URL+'/'+id}} style={ViewProfileStyle.profile} />
                                </Col>
                            </Row>
                            <Row style={ViewProfileStyle.nameRow}>
                                <Col style={ViewProfileStyle.nameCol}>
                                    <Label style={ViewProfileStyle.name}>{first_name} {last_name}</Label>
                                </Col>
                            </Row>
                            <Row style={ViewProfileStyle.ratingRow}>
                                <Col style={ViewProfileStyle.ratingCol}>
                                    <Icon name="star" size={StyleConfig.fontSizeH1} color={StyleConfig.red} style={ViewProfileStyle.rating}/>
                                    <Icon name="star" size={StyleConfig.fontSizeH1} color={StyleConfig.red} style={ViewProfileStyle.rating}/>
                                    <Icon name="star" size={StyleConfig.fontSizeH1} color={StyleConfig.red} style={ViewProfileStyle.rating}/>
                                    <Icon name="star" size={StyleConfig.fontSizeH1} color={StyleConfig.red} style={ViewProfileStyle.rating}/>
                                    <Icon name="star" size={StyleConfig.fontSizeH1} color={StyleConfig.red} style={ViewProfileStyle.rating}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={ViewProfileStyle.otherIconCol}>
                                    <Image source={AppImages.phoneIcon} style={ViewProfileStyle.otherIcon} />
                                    <Label style={ViewProfileStyle.otherLabel}>
                                        {mobile}
                                    </Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={ViewProfileStyle.otherIconCol}>
                                    <Image source={AppImages.mailIcon} style={ViewProfileStyle.otherIcon} />
                                    <Label style={ViewProfileStyle.otherLabel}>{email}</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={ViewProfileStyle.otherIconCol}>
                                    <Image source={AppImages.zipIcon} style={ViewProfileStyle.otherIcon} />
                                    <Label style={ViewProfileStyle.otherLabel}>{zipcode}</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={ViewProfileStyle.otherIconCol}>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <Grid style={ViewProfileStyle.grid2}>
                    <Row style={ViewProfileStyle.grid2Row}>
                        <Col style={ViewProfileStyle.grid2Col}>
                            {
                                (isFirstManagingProperty)
                                ?
                                    <Row>
                                        <Col>
                                            <Row style={ViewProfileStyle.titleLabelRow}>
                                                <Col style={ViewProfileStyle.titleLabelCol}>
                                                    <Label style={ViewProfileStyle.titleLabel}>DEFAULT SETTINGS</Label>
                                                </Col>
                                                <Col style={ViewProfileStyle.titleLabelCol2}>
                                                    <IconEntypo name="chevron-right" style={ViewProfileStyle.titleLabelColIcon} />
                                                </Col>
                                            </Row>
                                            <Row style={ViewProfileStyle.titleLabelRow}>
                                                <Col style={ViewProfileStyle.titleLabelCol}>
                                                    <Label style={ViewProfileStyle.titleLabelSubTxt}>
                                                        As a Property Manager your first managed
                                                        property creates default settings for future
                                                        managed properties. You have the ability to
                                                        deviate from the defaults in individual
                                                        properties and update defaults at any time.
                                                    </Label>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                :
                                    null
                            }

                            <Row style={ViewProfileStyle.titleLabelRow}>
                                <Col style={ViewProfileStyle.titleLabelCol}>
                                    <Label style={ViewProfileStyle.titleLabel}>PROPERTIES</Label>
                                </Col>
                            </Row>
                            {
                                properties.map((value, key)=>{
                                    return(
                                        <PropertyCard propertyData={value} key={'PropertyCard'+key}
                                                      _onPress={() => {this._viewProperty(value)}} status={null}/>
                                    )
                                })
                            }
                            {
                                residents.map((value, key)=>{
                                    return(
                                        <PropertyCard propertyData={value.property} key={'PropertyResidentCard'+key}
                                                      _onPress={() => {(value.status==1)?this._viewProperty(value):''}} status={value.status}/>
                                    )
                                })
                            }

                            <Row style={ViewProfileStyle.addBtnRow}>
                                <Col style={ViewProfileStyle.addBtnCol}>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, ViewProfileStyle.addBtn]}
                                        onPress={()=> { this._addProperty() }}>
                                        <Row style={ViewProfileStyle.addBtnPlusRow}>
                                            <Col size={0.1} style={ViewProfileStyle.addBtnPlusCol1}>
                                                <IconEntypo name="plus" style={ViewProfileStyle.addBtnPlus} />
                                            </Col>
                                            <Col style={ViewProfileStyle.addBtnPlusCol2}>
                                                <Text style={ViewProfileStyle.addBtnTxt}>ADD PROPERTY/PROPERTY CODE</Text>
                                            </Col>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={ViewProfileStyle.addBtnRow}>
                                <Col style={ViewProfileStyle.addBtnCol}>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, ViewProfileStyle.addBtn]}
                                                      onPress={()=> {Actions.jobRequest() }}>
                                        <Row style={ViewProfileStyle.addBtnPlusRow}>
                                            <Col size={0.1} style={ViewProfileStyle.addBtnPlusCol1}>
                                                <IconEntypo name="plus" style={ViewProfileStyle.addBtnPlus} />
                                            </Col>
                                            <Col style={ViewProfileStyle.addBtnPlusCol2}>
                                                <Text style={ViewProfileStyle.addBtnTxt}>Show Job Request (Tempary button)</Text>
                                            </Col>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>



                            <Row style={ViewProfileStyle.titleLabelRow}>
                                <Col style={ViewProfileStyle.titleLabelCol}>
                                    <Label style={ViewProfileStyle.titleLabel}>PAYMENTS & BALANCES</Label>
                                </Col>
                            </Row>
                            {
                                cardList.map((row, key) => {
                                    return (
                                        <Row key={"cardRow" + key} style={LayoutStyle.cardListRow}>
                                            {
                                                row.map((value, valueKey) => {
                                                    return (
                                                        (value != null)
                                                            ?
                                                            <Col key={"card1" + valueKey} style={LayoutStyle.cardListCol1}>
                                                                <TouchableOpacity onPress={()=>{this._gotCardOptions(value)}}>
                                                                    <CreditCard
                                                                        selectedCard={(value.selected) ? LayoutStyle.cardListBtnSelected : {}}
                                                                        size={0} showCardData={value}/>
                                                                </TouchableOpacity>
                                                            </Col>
                                                            :
                                                            <Col key={"card1" + valueKey}></Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    )
                                })
                            }
                            <Row style={ViewProfileStyle.addBtnRow}>
                                <Col style={ViewProfileStyle.addBtnCol}>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, ViewProfileStyle.addBtn]}
                                                      onPress={()=> { this._addCreditCard() }}>
                                        <Row style={ViewProfileStyle.addBtnPlusRow}>
                                            <Col size={0.1} style={ViewProfileStyle.addBtnPlusCol1}>
                                                <IconEntypo name="plus" style={ViewProfileStyle.addBtnPlus} />
                                            </Col>
                                            <Col style={ViewProfileStyle.addBtnPlusCol2}>
                                                <Text style={ViewProfileStyle.addBtnTxt}>ADD CREDIT CARD</Text>
                                            </Col>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={ViewProfileStyle.promoLabelRow}>
                                <Col style={ViewProfileStyle.promoLabelCol}>
                                    <Label>
                                        <Label style={ViewProfileStyle.promoLabel}>{referralCodeMsg}</Label>
                                    </Label>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <ReduxField
                                        name="referralCode"
                                        placeholder="Enter code here"
                                        placeholderTextColor={StyleConfig.placeholderColor}
                                        label={"Promo Code"}
                                        labelInputStyle={ViewProfileStyle.labelInput}
                                        style={ViewProfileStyle.input}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        info="Got Promo Code? Enter it here"
                                        infoStyle={ViewProfileStyle.reduxInfo}
                                        showSideError={true}
                                        sideErrorInputStyle={ViewProfileStyle.formInputError}
                                        rightIcon={
                                            <TouchableOpacity
                                                disabled={invalid}
                                                onPress={handleSubmit(this._onSubmit.bind(this))}
                                                style={[ViewProfileStyle.promoBtn,(invalid) ? ViewProfileStyle.promoBtnDisable : ViewProfileStyle.promoBtnEnable, StyleConfig.shadow]}>
                                                <Text style={ViewProfileStyle.promoBtnTxt}>SUBMIT</Text>
                                            </TouchableOpacity>
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row style={ViewProfileStyle.promoInfoRow}>
                                <Col style={ViewProfileStyle.promoInfoCol}>
                                    <Label style={ViewProfileStyle.promoInfo}>Accounts are limited to storing one promo code at a time.</Label>
                                </Col>
                            </Row>
                            <Row style={ViewProfileStyle.propertyImageRow}>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }

}

const asyncValidate = (values) => {
    return new Promise(resolve => {
        values.referralCode
            ? API.validateReferral({code: values.referralCode}).then((response) => {
                resolve(response);
            })
            : resolve({error:false})
    }).then(({error,message}) => {
        if(error) {
            throw { referralCode: 'Invalid' }
        }
    });
}

const validate = values => {
    let errors = {};
    errors.referralCode = !values.referralCode
        ? 'Promo Code'
        : undefined;

    return errors;
}

const initialState = {
    referralCode:''
};

const withForm = reduxForm({
    form: 'viewProfileForm',
    validate,
    initialValues: initialState
});

export default withCard(withProperty(withUser(withForm(withToast(withLoader(ViewProfile))))));
