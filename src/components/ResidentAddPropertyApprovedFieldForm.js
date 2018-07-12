import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { storeUser, PLACEHOLDER_COLOR, emailRegex } from 'global';
import { Label, Row, Col, Button } from 'native-base';
import { reduxForm } from 'redux-form';
import AppImages from 'AppImages';
import ReduxField from 'ReduxField';
import ResidentAddPropertyApprovedStyle from 'ResidentAddPropertyApprovedStyle';
import LayoutStyle from 'LayoutStyle';

class ResidentAddPropertyApprovedFieldForm extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <Col>
                <Row style={ResidentAddPropertyApprovedStyle.inputRow}>
                    <Col>
                        <ReduxField
                            name="unit_number"
                            placeholder="Type here"
                            label="Unit Number"
                            changeSuccessColor={true}
                            style={ResidentAddPropertyApprovedStyle.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            info="Optional but encouraged"
                        />

                        <ReduxField
                            name="resident_notes"
                            placeholder="Type here"
                            label="Resident Notes"
                            changeSuccessColor={true}
                            style={ResidentAddPropertyApprovedStyle.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            info="Optional"
                        />
                    </Col>
                </Row>
                <Row style={ResidentAddPropertyApprovedStyle.propertySubmitBtnRow}>
                    <Col style={ResidentAddPropertyApprovedStyle.propertySubmitBtnCol}>
                        <TouchableOpacity style={[LayoutStyle.buttonH1, ResidentAddPropertyApprovedStyle.propertySubmitBtn]}>
                            <Label style={[LayoutStyle.buttonH1Text, ResidentAddPropertyApprovedStyle.propertySubmitBtnTxt]}>
                                SUBMIT
                            </Label>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Col>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.unit_number = !values.unit_number
        ? 'Required'
        : undefined;

    return errors;
};

const initialState = {
    unit_number:'',
    resident_notes:''
};

const withForm = reduxForm({
    form: 'residentApproved',
    validate,
    initialValues: initialState
});

export default withForm(ResidentAddPropertyApprovedFieldForm);
