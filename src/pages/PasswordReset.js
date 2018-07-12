import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LayoutStyle from 'LayoutStyle';
import PasswordResetStyle from 'PasswordResetStyle';
import withToast from 'withToast';
import withLoader from 'withLoader';
import API from 'AppUtils';
import withUser from 'withUser';
import { storeUser, emailRegex } from 'global';
import AppImages from 'AppImages';
import PasswordResetFieldForm from '../components/PasswordResetFieldForm';

class PasswordReset extends Component {

    constructor(props) {
        super(props);
    }

    _onSendLink = (data) => {
        const { loader, toast } = this.props;
        setTimeout(() => { loader(true); }, 1);
        API.passwordReset(data)
        .then((response) => {
            const { error, message } = response;
            loader(false);
            toast({text: message});
            (!error) && Actions.login();
        });
    }

    render () {
        return (
            <Content style={LayoutStyle.rootContainer}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={PasswordResetStyle.iconRow}>
                                <Col style={PasswordResetStyle.logoCol}>
                                    <Image source={AppImages.consumerLogo} style={PasswordResetStyle.logo} />
                                </Col>
                            </Row>
                            <Row style={PasswordResetStyle.passwordResetRow}>
                                <Col style={PasswordResetStyle.passwordResetCol}>
                                    <Image source={AppImages.passwordOrEmailRecover} style={PasswordResetStyle.passwordResetImage} />
                                </Col>
                            </Row>
                            <Row style={PasswordResetStyle.passwordResetTxtRow}>
                                <Col style={PasswordResetStyle.passwordResetTxtCol}>
                                    <Label style={PasswordResetStyle.passwordResetLabel}>Reset Password</Label>
                                </Col>
                            </Row>
                            <Row style={PasswordResetStyle.passwordResetDescRow}>
                                <Col style={PasswordResetStyle.passwordResetDescCol}>
                                    <Label style={PasswordResetStyle.passwordResetDescLabel}>To re-set your password, enter your email and we'll send you a re-set link.</Label>
                                </Col>
                            </Row>
                            <PasswordResetFieldForm {...this.props} onSubmit={this._onSendLink.bind(this)} />
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(PasswordReset)));
