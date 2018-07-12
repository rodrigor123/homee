import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { storeUser, emailRegex, numberRegex, MANUAL } from 'global';
import { Actions } from 'react-native-router-flux';
import API from 'AppUtils';
import { reduxForm, change } from 'redux-form';
import AppImages from 'AppImages';
import ReduxField from 'ReduxField';
import RegisterStyle from 'RegisterStyle';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';
import { Grid, Row, Col, Label, Button, Radio, Text, Content } from 'native-base';

class RegisterFieldForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            terms: false,
            referralCode:'',
            passwordHidden: true,
            reTypePasswordHidden: true
        }
    }

    _changeView = (fieldName) => {
        this.setState({
            [fieldName]: !this.state[fieldName],
        });
    }

    _onTermsShow = () => {
    }

    _onTermsAgree = () => {
        this.setState({terms:!this.state.terms});
    }

    _onSubmitReferral = () => {
        const { loader, toast } = this.props;
        const {referralCode:code} = this.state;
        loader(true);
        API.validateReferral({code}).then(({error,message}) => {
            loader(false);
            error && toast({text:message});
        });
    }

    _onReferralChange = (referralCode) => {
        this.setState({referralCode});
    }

    _handleFormatChangeText = (fieldName, value) => {
        const { dispatch } = this.props;
        dispatch(change('registerForm', fieldName, value));
    }

    render(){
        const { handleSubmit, invalid, onSubmit } = this.props;
        const { terms, passwordHidden, reTypePasswordHidden } = this.state;
        return(
            <Grid>
                <Row style={RegisterStyle.gridRow1}>
                    <Grid style={RegisterStyle.grid1}>
                        <Row style={RegisterStyle.labelInfoRow}>
                            <Col style={RegisterStyle.labelInfoCol}>
                                <Label style={RegisterStyle.labelInfoTxt}>Please enter the information below to complete your Homee profile.</Label>
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.inputRow}>
                            <Col style={RegisterStyle.inputCol}>
                                <ReduxField
                                    name="referralCode"
                                    placeholder="Type here"
                                    placeholderTextColor={StyleConfig.placeholderColor}
                                    label={"Referral Code "}
                                    style={RegisterStyle.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    info="Optional"
                                    onChangeText={(value) => this._onReferralChange(value)}
                                    showSideError={true}
                                    sideErrorInputStyle={RegisterStyle.formInputError}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Row style={RegisterStyle.gridRow2}>
                    <Grid style={RegisterStyle.grid2}>
                        <Row style={RegisterStyle.registerFormRowInfo}>
                            <Col style={RegisterStyle.registerFormColInfo}>
                                <View style={RegisterStyle.registerFormInfoView}>
                                    <Label style={RegisterStyle.registerFormInfoLabel}>INFO</Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="email"
                                    label=" Email"
                                    labelIcon={
                                        <Image source={AppImages.mailIcon} style={RegisterStyle.formFieldIcon}/>
                                    }
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    changeSuccessColor={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="password"
                                    label="Password"
                                    secureTextEntry={passwordHidden}
                                    rightIcon={
                                        <TouchableOpacity onPress={() => this._changeView('passwordHidden')}>
                                            <Image
                                                source={(passwordHidden) ? AppImages.inputHiddenBlue : AppImages.inputVisibleBlue}
                                                style={RegisterStyle.icon}/>
                                        </TouchableOpacity>
                                    }
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    changeSuccessColor={true}
                                    info="8 characters minimum"
                                    infoStyle={RegisterStyle.infoStyle}
                                    showSideError={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="reTypePassword"
                                    label="Re-Type Password"
                                    secureTextEntry={reTypePasswordHidden}
                                    rightIcon={
                                        <TouchableOpacity onPress={() => this._changeView('reTypePasswordHidden')}>
                                            <Image
                                                source={(reTypePasswordHidden) ? AppImages.inputHiddenBlue : AppImages.inputVisibleBlue}
                                                style={RegisterStyle.icon}/>
                                        </TouchableOpacity>
                                    }
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    changeSuccessColor={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="first_name"
                                    label="First Name"
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    changeSuccessColor={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="last_name"
                                    label="Last Name"
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    changeSuccessColor={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="mobile"
                                    label=" Phone"
                                    keyboardType='numeric'
                                    inputFormat="(XXX) XXX-XXXX"
                                    onChangeText={this._handleFormatChangeText.bind(this,'mobile')}
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    labelIcon={
                                        <Image source={AppImages.phoneIcon} style={RegisterStyle.formFieldIcon}/>
                                    }
                                    maxLength={14}
                                    changeSuccessColor={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.formInputRow}>
                            <Col>
                                <ReduxField
                                    name="zipcode"
                                    keyboardType='numeric'
                                    label=" Zip code"
                                    placeholder="Type here"
                                    style={RegisterStyle.registerFormInput}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={true}
                                    labelIcon={
                                        <Image source={AppImages.zipIcon} style={RegisterStyle.formFieldIcon}/>
                                    }
                                    maxLength={5}
                                    changeSuccessColor={true}
                                />
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.termsRow}>
                            <Col style={RegisterStyle.termsCol}>
                                <Row style={RegisterStyle.termsSubRow}>
                                    <Radio onPress={this._onTermsAgree.bind(this)} standardStyle selected={terms} />
                                    <Label style={RegisterStyle.termsInfo}>I agree to the Terms & Conditions</Label>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.termsButtonRow}>
                            <Col style={RegisterStyle.termsButtonCol}>
                                <TouchableOpacity style={[LayoutStyle.buttonH1, RegisterStyle.termsButton]}>
                                    <Text style={[LayoutStyle.buttonH1Text, RegisterStyle.termsButtonText]}>VIEW</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.profileButtonRow}>
                            <Col style={RegisterStyle.profileButtonCol}>
                                <TouchableOpacity onPress={handleSubmit(onSubmit)} disabled={(invalid || !terms) ? true : false}
                                                  style={[LayoutStyle.buttonH1, RegisterStyle.profileButton,
                                                      (invalid || !terms) ? RegisterStyle.profileButtonInvalid : RegisterStyle.profileButtonValid]}>
                                    <Text style={[LayoutStyle.buttonH1Text, RegisterStyle.profileButtonText]}>SIGN ME UP</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.cancelRow}>
                            <Col style={RegisterStyle.cancelCol}>
                                <TouchableOpacity onPress={() => Actions.socialRegister()}>
                                    <Text style={RegisterStyle.cancelText}>CANCEL</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={RegisterStyle.lastRow}>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.email = !values.email
        ? 'Email'
        : !emailRegex.test(values.email)
            ? 'Email Invalid'
            : undefined;

    errors.password = !values.password
        ? '8 characters minimum'
        : (values.password.length < 8)
            ? '8 characters minimum'
            : undefined;

    errors.reTypePassword = !values.reTypePassword
        ? 'Re-Type Password'
        : (values.reTypePassword != values.password)
            ? 'Password not match'
            : undefined;

    errors.first_name = !values.first_name
        ? 'First Name'
        : undefined;

    errors.last_name = !values.last_name
        ? 'Last Name'
        : undefined;

    errors.mobile = !values.mobile
        ? 'Required'
        : values.mobile.length < 14
            ? 'Phone Invalid'
            : undefined;

    errors.zipcode = !values.zipcode
        ? 'Zip Code'
        :  values.zipcode.length < 5
            ? 'Zip Code Invalid'
            : undefined;

    return errors;
};

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

const initialState = {
    email:'',
    password:'',
    reTypePassword:'',
    first_name:'',
    last_name:'',
    mobile:'',
    zipcode:''
};

const withForm = reduxForm({
    form: 'registerForm',
    validate,
    asyncValidate,
    initialValues: initialState
});

export default withForm(RegisterFieldForm);
