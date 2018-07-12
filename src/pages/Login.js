import React, { Component } from 'react';
import { Image, TouchableOpacity, Alert, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withRegisterUser from 'withRegisterUser';
import API from 'AppUtils';
import withUser from 'withUser';
import { storeUser, PLACEHOLDER_COLOR, emailRegex, SOCIAL_AUTH_CONFIG } from 'global';
import { Content, Label, Grid, Row, Col, Text } from 'native-base';
import AppImages from 'AppImages';
import LoginFieldForm from '../components/LoginFieldForm';
import LoginStyle from 'LoginStyle';
import LayoutStyle from 'LayoutStyle';
import { FACEBOOK, GOOGLE, CONSUMER, PLATFORM } from 'global';
import { google, facebook } from 'react-native-simple-auth';
import PushNotification from 'react-native-push-notification';

class Login extends Component{

    constructor(props){
        super(props);
    }

    _doFacebookLogin = () => {
        const { setRegisterUser, loader } = this.props;
        loader(true);
        facebook(SOCIAL_AUTH_CONFIG.facebook)
            .then((data)=>{
            const { credentials:{access_token}} = data;
            API.facebookLogin({token:access_token, application:CONSUMER}).then(response => {
                const { error } = response;
                if (error) {
                    API.facebookUser(data.credentials).then(response => {
                        const {email, name, picture:{data:{url:image}}} = response;
                        let registerUserData = {
                            email,
                            first_name: name.split(' ')[0],
                            last_name: name.split(' ')[1],
                            image,
                            type: FACEBOOK
                        };
                        API.urlToBase64({url:registerUserData.image}).then(imageResponse => {
                            registerUserData['image'] = imageResponse;
                            setRegisterUser(registerUserData);
                            loader(false);
                            setTimeout(() => {Actions.socialRegisterForm()},100);
                        });
                    });
                } else {
                    loader(false);
                    this._appLogin(response);
                }
            });
        }).catch((error) => {
            loader(false);
        });
    }

    _doGoogleLogin = () => {
        const { setRegisterUser, loader, toast } = this.props;
        loader(true);
        google(SOCIAL_AUTH_CONFIG.google)
            .then(({credentials:{access_token, id_token, token_type, expires_in}}) => {
            API.googleLogin({token:JSON.stringify({access_token, id_token, token_type, expires_in}),application:CONSUMER,platform:PLATFORM}).then(response => {
                const { error } = response;
                if (error) {
                    const {email, name, photo:image} = user;
                    let registerUserData = {
                        email,
                        first_name: name.split(' ')[0],
                        last_name: name.split(' ')[1],
                        image,
                        type: GOOGLE
                    };
                    API.urlToBase64({url:registerUserData.image}).then(imageResponse => {
                        registerUserData['image'] = imageResponse;
                        setRegisterUser(registerUserData);
                        loader(false);
                        setTimeout(() => {Actions.socialRegisterForm()},100);
                    });
                } else {
                    loader(false);
                    this._appLogin(response);
                }
            });
        }).catch((error) => {
            loader(false);
        });
    }

    _appLogin = (user) => {
        const { toast, setUser } = this.props;
        const { id, apiKey, createdAt, email, permissions, roles, first_name, last_name } = user;
        const userData = { id, apiKey, createdAt, email, permissions, roles, first_name, last_name };
        storeUser(userData);
        setUser(userData);
        this._registerPushNotification(userData);
        toast({text:'Login success'});
        Actions.main();
    }

    _doLogin = (loginData) => {
        const { loader, toast } = this.props;
        setTimeout(() => { loader(true); }, 1);
        API.standardLogin(loginData).then((response) => {
            const { error, message } = response;
            if (error) {
                loader(false);
                toast({text:message});
            } else {
                this._appLogin(response);
            }
        });
    }

    _registerPushNotification = (userData) => {
        const { setUser } = this.props;
        PushNotification.configure({

            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
                let deviceData = {platform:1,application:CONSUMER,device_id:token.token};
                API.createDevice(deviceData).then(deviceRes => {
                    const { error } = deviceRes;

                });
            },

            // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications,
            // but is need to receive remote push notifications)
            senderID: "GCM SENDER ID",

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             */
            requestPermissions: true,
        });
    }

    render() {
        const { setUser } = this.props;
        return(
            <Content style={LayoutStyle.rootContainer} scrollEnabled={false}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row style={LoginStyle.gridRow}>
                        <Col style={LoginStyle.girdCol}>
                            <Row style={LoginStyle.logoRow}>
                                <Col style={LoginStyle.logoCol}>
                                    <Image source={AppImages.consumerLogo} style={LoginStyle.logo} />
                                </Col>
                            </Row>

                            <LoginFieldForm {...this.props} {...setUser} onSubmit={this._doLogin.bind(this)} />

                            <Row style={LoginStyle.loginWithRow}>
                                <Col style={LoginStyle.loginWithCol}>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, LoginStyle.loginWithFBBtn]}
                                                      onPress={this._doFacebookLogin.bind(this)}>
                                        <Image source={AppImages.iconsFacebook} style={LoginStyle.icon} />
                                    </TouchableOpacity>
                                </Col>
                                <Col style={LoginStyle.loginWithColRight}>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, LoginStyle.loginWithGoogleBtn]} onPress={this._doGoogleLogin.bind(this)}>
                                        <Image source={AppImages.iconsGooglePlus} style={LoginStyle.iconGoogle} />
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={LoginStyle.loginWithLabelRow}>
                                <Col style={LoginStyle.loginWithLabelCol}>
                                    <Label style={LoginStyle.loginWithLabel}>Log In With Facebook</Label>
                                </Col>
                                <Col style={[LoginStyle.loginWithLabelCol, {alignItems:"flex-end"}]}>
                                    <Label style={LoginStyle.loginWithLabel}>Log In With Google</Label>
                                </Col>
                            </Row>
                            <Row style={LoginStyle.cancelBtnRow}>
                                <Col style={LoginStyle.cancelBtnCol}>
                                    <TouchableOpacity onPress={() => Actions.mapHome()}>
                                        <Text style={LoginStyle.cancelBtnTxt}>CANCEL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(withRegisterUser(Login))));
