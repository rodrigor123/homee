import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { reduxForm, SubmissionError, change } from 'redux-form'
import SocialRegisterFormStyle from 'SocialRegisterFormStyle';
import  AppImages from 'AppImages';
import API from 'AppUtils';
import  ReduxField from 'ReduxField';
import { numberRegex } from 'global';
import { Label, Grid, Row, Button, Text, Col, Radio } from 'native-base';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';

class SocialFieldForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            terms: false,
            referralCode: ''
        }
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
        dispatch(change('profileForm', fieldName, value));
    }

    render () {
        const { invalid, handleSubmit, onSubmit } = this.props;
        const { terms } = this.state;
        return (
            <Grid style={LayoutStyle.mainGrid}>
                <Row style={SocialRegisterFormStyle.gridRow}>
                    <Col style={SocialRegisterFormStyle.girdCol}>
                        <Row style={SocialRegisterFormStyle.infoLabelRow}>
                            <Col style={SocialRegisterFormStyle.infoLabelCol}>
                                <Label style={SocialRegisterFormStyle.infoLabel}>Please enter the additional information on below to complete your profile.</Label>
                            </Col>
                        </Row>
                        <Row style={SocialRegisterFormStyle.inputRow}>
                            <Col style={SocialRegisterFormStyle.inputCol}>
                                <ReduxField
                                    name="referralCode"
                                    placeholder="Type here"
                                    label="Referral Code "
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    info="Optional"
                                    infoStyle={SocialRegisterFormStyle.reduxInfo}
                                    style={SocialRegisterFormStyle.input}
                                    onChangeText={(value) => this._onReferralChange(value)}
                                    showSideError={true}  />
                            </Col>
                        </Row>
                        <Row style={SocialRegisterFormStyle.inputRow}>
                            <Col style={SocialRegisterFormStyle.inputCol}>
                                <ReduxField
                                    name="zipcode"
                                    keyboardType='numeric'
                                    placeholder="Type here"
                                    label=" Zip Code"
                                    labelInputStyle={LayoutStyle.labelInput}
                                    style={SocialRegisterFormStyle.input}
                                    errorInputStyle={LayoutStyle.errorInput}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    maxLength={5}
                                    labelIcon={
                                        <Image source={AppImages.zipIcon} style={SocialRegisterFormStyle.labelIcon}/>
                                    } />
                            </Col>
                        </Row>
                        <Row style={SocialRegisterFormStyle.inputRow}>
                            <Col style={SocialRegisterFormStyle.inputCol}>
                                <ReduxField
                                    name="mobile"
                                    keyboardType='numeric'
                                    inputFormat="(XXX) XXX-XXXX"
                                    onChangeText={this._handleFormatChangeText.bind(this,'mobile')}
                                    placeholder="Type here"
                                    label=" Phone"
                                    labelInputStyle={LayoutStyle.labelInput}
                                    style={SocialRegisterFormStyle.input}
                                    errorInputStyle={LayoutStyle.errorInput}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    maxLength={14}
                                    labelIcon={
                                        <Image source={AppImages.phoneIcon} style={SocialRegisterFormStyle.labelIcon}/>
                                    } />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={SocialRegisterFormStyle.termsRow}>
                    <Col style={SocialRegisterFormStyle.termsCol}>
                        <Row style={SocialRegisterFormStyle.termsSubRow}>
                            <Radio onPress={this._onTermsAgree.bind(this)} standardStyle selected={terms} />
                            <Label style={SocialRegisterFormStyle.termsInfo}>I agree to the Terms & Conditions</Label>
                        </Row>
                    </Col>
                </Row>
                <Row style={SocialRegisterFormStyle.termsButtonRow}>
                    <Col style={SocialRegisterFormStyle.termsButtonCol}>
                        <TouchableOpacity style={[SocialRegisterFormStyle.termsButton, StyleConfig.shadow]}>
                            <Text style={SocialRegisterFormStyle.termsButtonText}>VIEW</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row style={SocialRegisterFormStyle.profileButtonRow}>
                    <Col style={SocialRegisterFormStyle.profileButtonCol}>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} disabled={(invalid || !terms) ? true : false}
                            style={[SocialRegisterFormStyle.profileButton,
                                StyleConfig.shadow,(invalid || !terms) ?
                                 SocialRegisterFormStyle.profileButtonInvalid : SocialRegisterFormStyle.profileButtonValid]}>
                            <Text style={SocialRegisterFormStyle.profileButtonText}>SIGN ME UP</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row style={SocialRegisterFormStyle.cancelRow}>
                    <Col style={SocialRegisterFormStyle.cancelCol}>
                        <TouchableOpacity onPress={() => Actions.socialRegister()}>
                            <Text style={SocialRegisterFormStyle.cancelText}>CANCEL</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const validate = values => {
    let errors = {};

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

    // errors.zipcode = !values.zipcode
    //     ? 'Zip Code'
    //     : (!numberRegex.test(values.zipcode))
    //         ? 'Zip Code Invalid'
    //         : undefined;
    //
    // errors.mobile = !values.mobile
    //     ? 'Phone'
    //     : (!numberRegex.test(values.mobile))
    //         ? 'Phone Invalid'
    //         : undefined;

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
    referralCode:'',
    zipcode:'',
    mobile:''
};

const withForm = reduxForm({
    form: 'profileForm',
    validate,
    asyncValidate,
    enableReinitialize: true,
    initialValues: initialState
});

export default withForm(SocialFieldForm);
