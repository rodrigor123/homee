import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LayoutStyle from 'LayoutStyle';
import EmailRecoverStyle from 'EmailRecoverStyle';
import withToast from 'withToast';
import withLoader from 'withLoader';
import API from 'AppUtils';
import withUser from 'withUser';
import { storeUser, emailRegex } from 'global';
import AppImages from 'AppImages';
import EmailRecoverFieldForm from '../components/EmailRecoverFieldForm';

class EmailRecover extends Component {

    constructor(props) {
        super(props);
    }

    _onSendSMS = (data) => {
        const { loader, toast } = this.props;
        setTimeout(() => { loader(true); }, 1);
        const { mobile } = data;
        API.emailRecover({mobile})
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
                            <Row style={EmailRecoverStyle.iconRow}>
                                <Col style={EmailRecoverStyle.logoCol}>
                                    <Image source={AppImages.consumerLogo} style={EmailRecoverStyle.logo} />
                                </Col>
                            </Row>
                            <Row style={EmailRecoverStyle.emailRecoverRow}>
                                <Col style={EmailRecoverStyle.emailRecoverCol}>
                                    <Image source={AppImages.passwordOrEmailRecover} style={EmailRecoverStyle.emailRecoverImage} />
                                </Col>
                            </Row>
                            <Row style={EmailRecoverStyle.emailRecoverTxtRow}>
                                <Col style={EmailRecoverStyle.emailRecoverTxtCol}>
                                    <Label style={EmailRecoverStyle.emailRecoverLabel}>Recover Email</Label>
                                </Col>
                            </Row>
                            <Row style={EmailRecoverStyle.emailRecoverDescRow}>
                                <Col style={EmailRecoverStyle.emailRecoverDescCol}>
                                    <Label style={EmailRecoverStyle.emailRecoverDescLabel}>
                                        Can't remember which email you're linked to?
                                        Enter the phone number associated your
                                        account and we'll send you your correct email.
                                    </Label>
                                </Col>
                            </Row>
                            <EmailRecoverFieldForm {...this.props} onSubmit={this._onSendSMS.bind(this)} />
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(EmailRecover)));
