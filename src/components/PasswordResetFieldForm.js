import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Row, Col, Label, Button, Text } from 'native-base';
import PasswordResetStyle from 'PasswordResetStyle';
import { storeUser, emailRegex } from 'global';
import { reduxForm } from 'redux-form';
import ReduxField from 'ReduxField';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';

class PasswordResetFieldForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { invalid, onSubmit, handleSubmit } = this.props;
        return(
            <Col>
                <Row style={PasswordResetStyle.inputRow}>
                        <ReduxField
                            name="email"
                            placeholder="Type here"
                            label="Email"
                            style={PasswordResetStyle.inputbox}
                            autoCapitalize="none"
                            autoCorrect={false} />
                </Row>
                <Row style={PasswordResetStyle.sendBtnRow}>
                    <Col style={PasswordResetStyle.sendBtnCol}>
                        <TouchableOpacity
                            style={[LayoutStyle.buttonH1, (invalid) ? PasswordResetStyle.sendDisableBtn : PasswordResetStyle.sendEnableBtn]}
                            disabled={invalid}
                            onPress={handleSubmit(onSubmit)}>
                            <Text
                                style={[LayoutStyle.buttonH1Text, (invalid) ? PasswordResetStyle.sendBtnTxtDisable : PasswordResetStyle.sendBtnTxt]}>
                                SEND
                            </Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row style={PasswordResetStyle.cancelBtnRow}>
                    <Col style={PasswordResetStyle.cancelBtnCol}>
                        <TouchableOpacity
                            onPress={() => Actions.login()}>
                            <Text style={PasswordResetStyle.cancelBtnTxt}>CANCEL</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row style={{marginBottom:StyleConfig.platformPadding}}></Row>
            </Col>
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

    return errors;
};

const initialState = {
    email:''
};

const withForm = reduxForm({
    form: 'passwordResetForm',
    validate,
    initialValues: initialState
});

export default withForm(PasswordResetFieldForm);
