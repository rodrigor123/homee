import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withRegisterUser from 'withRegisterUser';
import API from 'AppUtils';
import LayoutStyle from 'LayoutStyle';
import SocialRegisterStyle from 'SocialRegisterStyle';
import withUser from 'withUser';
import { storeUser, FACEBOOK, GOOGLE, SOCIAL_AUTH_CONFIG } from 'global';
import  AppImages from 'AppImages';
import { Content, Label, Grid, Row, Text, Col } from 'native-base';
import StyleConfig from 'StyleConfig';
import { google, facebook } from 'react-native-simple-auth';

class SocialRegister extends Component {

    constructor(props) {
        super(props);
    }

    _doFacebookSignup = () => {
        const { setRegisterUser, loader } = this.props;
        loader(true);
        facebook(SOCIAL_AUTH_CONFIG.facebook)
        .then((data)=> {
            if (data != null) {
                const {credentials:{access_token:token}, user:{id:userId}} = data;
                API.facebookUser({token, userId}).then(response => {
                    const {email, name, picture: {data: {url: image}}} = response;
                    let registerUserData = {
                        email,
                        first_name: name.split(' ')[0],
                        last_name: name.split(' ')[1],
                        image,
                        type: FACEBOOK
                    };
                    API.urlToBase64({url: registerUserData.image}).then(imageResponse => {
                        registerUserData['image'] = imageResponse;
                        setRegisterUser(registerUserData);
                        loader(false);
                        setTimeout(() => {
                            Actions.socialRegisterForm()
                        }, 100);
                    });
                });
            } else {
                loader(false);
            }
        });
    }

    _doGoogleSignup = () => {
        const { setRegisterUser, loader } = this.props;
        loader(true);
        google(SOCIAL_AUTH_CONFIG.google)
        .then(({user}) => {
            const {email, name, picture:image} = user;
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
        });
    }

    render () {
        return (
            <Content style={LayoutStyle.rootContainer}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row style={SocialRegisterStyle.gridRow}>
                        <Col style={SocialRegisterStyle.girdCol}>
                            <Row style={SocialRegisterStyle.logoRow}>
                                <Col style={SocialRegisterStyle.logoCol}>
                                    <Image source={AppImages.consumerLogo} style={SocialRegisterStyle.logoImage}/>
                                </Col>
                            </Row>
                            <Row style={SocialRegisterStyle.titleRow}>
                                <Col style={SocialRegisterStyle.titleCol}>
                                    <Label style={SocialRegisterStyle.titleLabel}> SIGN UP </Label>
                                </Col>
                            </Row>
                            <Row style={SocialRegisterStyle.btnsRow}>
                                <Col style={SocialRegisterStyle.btnsCol}>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, SocialRegisterStyle.facebookButton]} onPress={this._doFacebookSignup.bind(this)}>
                                        <Row>
                                            <Col style={SocialRegisterStyle.touchableOpacityIconCol}>
                                                <Image style={SocialRegisterStyle.facebookButtonIcon} source={AppImages.iconsFacebook} />
                                            </Col>
                                            <Col style={SocialRegisterStyle.touchableOpacityTextCol}>
                                                <Text style={[LayoutStyle.buttonH1Text, SocialRegisterStyle.buttonTxt]}>SIGN UP WITH FACEBOOK</Text>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, SocialRegisterStyle.googleButton]} onPress={this._doGoogleSignup.bind(this)}>
                                        <Row>
                                            <Col style={SocialRegisterStyle.touchableOpacityIconCol2}>
                                                <Image style={SocialRegisterStyle.googleButtonIcon} source={AppImages.iconsGooglePlus} />
                                            </Col>
                                            <Col style={SocialRegisterStyle.touchableOpacityTextCol2}>
                                                <Text style={[LayoutStyle.buttonH1Text, SocialRegisterStyle.buttonTxt]}>SIGN UP WITH GOOGLE+</Text>
                                            </Col>
                                            <Col></Col>
                                        </Row>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[LayoutStyle.buttonH1, SocialRegisterStyle.profileButton]} onPress={() => Actions.register()}>
                                        <Text style={[LayoutStyle.buttonH1Text, SocialRegisterStyle.buttonTxt]}>CREATE MY OWN PROFILE</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={SocialRegisterStyle.cancelRow}>
                                <Col style={SocialRegisterStyle.cancelCol}>
                                    <TouchableOpacity onPress={() => {Actions.mapHome()}}>
                                        <Text style={SocialRegisterStyle.cancelText}>CANCEL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:StyleConfig.platformPadding}}></Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(withRegisterUser(SocialRegister))));
