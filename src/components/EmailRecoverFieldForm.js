import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Row, Col, Label, Button, Text } from 'native-base';
import EmailRecoverStyle from 'EmailRecoverStyle';
import { storeUser, numberRegex } from 'global';
import { reduxForm } from 'redux-form';
import ReduxField from 'ReduxField';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';

class EmailRecoverFieldForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { invalid, onSubmit, handleSubmit } = this.props;
        return(
            <Col>
                <Row style={EmailRecoverStyle.inputRow}>
                        <ReduxField
                            name="mobile"
                            placeholder="Type here"
                            label="Phone"
                            style={EmailRecoverStyle.inputbox}
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={10}/>
                </Row>
                <Row style={EmailRecoverStyle.sendBtnRow}>
                    <Col style={EmailRecoverStyle.sendBtnCol}>
                        <TouchableOpacity
                            style={[LayoutStyle.buttonH1, (invalid) ? EmailRecoverStyle.sendDisableBtn : EmailRecoverStyle.sendEnableBtn]}
                            disabled={invalid}
                            onPress={handleSubmit(onSubmit)}>
                            <Text
                                style={[LayoutStyle.buttonH1Text, (invalid) ? EmailRecoverStyle.sendBtnTxtDisable : EmailRecoverStyle.sendBtnTxt]}>
                                SEND
                            </Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row style={EmailRecoverStyle.cancelBtnRow}>
                    <Col style={EmailRecoverStyle.cancelBtnCol}>
                        <TouchableOpacity
                            onPress={() => Actions.login()}>
                            <Text style={EmailRecoverStyle.cancelBtnTxt}>CANCEL</Text>
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
    errors.mobile = !values.mobile
        ? 'Phone Required'
        : (!numberRegex.test(values.mobile))
            ? 'Phone Invalid'
            : undefined;

    return errors;
};

const initialState = {
    phone:''
};

const withForm = reduxForm({
    form: 'emailRecoverForm',
    validate,
    initialValues: initialState
});

export default withForm(EmailRecoverFieldForm);
