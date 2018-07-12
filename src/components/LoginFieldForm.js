import React, { Component } from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { storeUser, PLACEHOLDER_COLOR, emailRegex } from 'global';
import { Label, Row, Col, Button, Text } from 'native-base';
import { reduxForm } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import AppImages from 'AppImages';
import ReduxField from 'ReduxField';
import LoginStyle from 'LoginStyle';
import LayoutStyle from 'LayoutStyle';

class LoginFieldForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            passwordHidden: true
        }
    }

    _changeView = () => {
        this.setState({
            passwordHidden: !this.state.passwordHidden
        });
    }

    render(){
        const { passwordHidden } = this.state;
        const { invalid, handleSubmit, onSubmit } = this.props;
        return(
            <Col>
                <Row style={LoginStyle.inputRow}>
                    <Col>
                        <ReduxField
                            name="email"
                            placeholder="Type here"
                            label="Email"
                            changeSuccessColor={true}
                            style={LoginStyle.input}
                            info="Forgot email?"
                            infoIcon={<Image source={AppImages.arrowSign} style={LoginStyle.icon1} />}
                            onInfoPress={() => Actions.emailRecover()}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <ReduxField
                            name="password"
                            placeholder="Type here"
                            label="Password"
                            style={LoginStyle.input}
                            rightIcon={
                                <TouchableOpacity onPress={()=> this._changeView()}>
                                    <Image source={(passwordHidden) ? AppImages.inputHidden : AppImages.inputVisible} style={LoginStyle.icon} />
                                </TouchableOpacity>
                            }
                            secureTextEntry={passwordHidden}
                            info="Forgot password?"
                            infoIcon={<Image source={AppImages.arrowSign} style={LoginStyle.icon1} />}
                            onInfoPress={() => Actions.passwordReset()}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </Col>
                </Row>
                <Row style={LoginStyle.loginBtnRow}>
                    <Col style={LoginStyle.loginBtnCol}>
                        <TouchableOpacity
                            style={[LayoutStyle.buttonH1, (invalid) ? LoginStyle.loginBtnDisable : LoginStyle.loginBtn]}
                                disabled={invalid}
                                onPress={handleSubmit(onSubmit)}>
                            <Text
                                style={[LayoutStyle.buttonH1Text, (invalid) ? LoginStyle.loginBtnTxtDisable : LoginStyle.loginBtnTxt]}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
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

    errors.password = !values.password
        ? 'Password'
        : undefined;
    return errors;
};

const initialState = {
    email:'',
    password:''
};

const withForm = reduxForm({
    form: 'loginForm',
    validate,
    initialValues: initialState
});

export default withForm(LoginFieldForm);
