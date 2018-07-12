/**
 * @providesModule ResidentAddPropertyFieldForm
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Content, Label, Grid, Row, Col, Text } from 'native-base';
import OwnerResidentStyle from 'OwnerResidentStyle';
import ReduxField from 'ReduxField';
import StyleConfig from 'StyleConfig';
import { reduxForm } from 'redux-form';
import { GOOGLE_API_KEY, API_BASE_URL, HOUSE_RESIDENT} from 'global';
import { Actions } from 'react-native-router-flux';
import API from 'AppUtils';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withProperty from 'withProperty';

class ResidentAddPropertyFieldForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            btnCodeDisable: true,
            isAccepted:false,
            validationMessage:false
        }
    }

    _onSubmit = (data) => {
        const {loader} = this.props;
        setTimeout(()=>{loader(true)}, 1);
        API.addResidentProperty({...data})
            .then((response) => {
                loader(false);
                const { error, message } = response;
                if(!error) {
                    const {resident_id} = response;
                    this.setState({
                        isAccepted: true,
                        validationMessage:'Accepted'
                    });
                   setTimeout(() => { this._residentPropertyApproval(resident_id);}, 4000);
                } else {
                    this._responseOfApi(message);
                }

            });
    }

    _responseOfApi = (message) => {
        const { loader, toast } = this.props;
        loader(false);
        this.setState({
            btnCodeDisable: true,
            isAccepted:false,
        });
        toast({text:message});
    }

    _residentPropertyApproval = (value) => {
        const { setViewProperty } = this.props;
        setViewProperty(value);
        Actions.ResidentPropertyApproval();
    }

    render(){
        const { isAccepted,validationMessage} = this.state;
        const { invalid, handleSubmit } = this.props;
        return(
            <Grid style={OwnerResidentStyle.grid1} >
                <Row style={OwnerResidentStyle.grid1Row}>
                    <Col style={OwnerResidentStyle.grid1Col}>
                        <Row style={OwnerResidentStyle.propCodeRow}>
                            <Col style={OwnerResidentStyle.propCodeCol}>
                                <Label style={OwnerResidentStyle.propCodeTxt}>
                                    <Label style={OwnerResidentStyle.propCodeBoldTxt}>Are you a resident?</Label> Enter property code here
                                    if your property manager has provided one.
                                </Label>
                            </Col>
                        </Row>
                        <Row>
                            <ReduxField
                                name="code"
                                placeholder="Type here"
                                placeholderTextColor={StyleConfig.placeholderColor}
                                label="Property Code"
                                style={OwnerResidentStyle.inputWhite}
                                autoCapitalize={'characters'}
                                autoCorrect={false}
                                changeSuccessColor={(isAccepted)?true:false}
                                showSideError={true}
                                sideErrorInputStyle={OwnerResidentStyle.formInputError}
                                maxLength={6}
                                info={(isAccepted)?validationMessage:false}
                                infoStyle={OwnerResidentStyle.reduxInfo}
                                rightIcon={
                                    (!isAccepted)?
                                    <TouchableOpacity
                                        disabled={invalid}
                                        onPress={handleSubmit(this._onSubmit.bind(this))}
                                        style={[OwnerResidentStyle.btnCodeSubmit,(invalid) ? OwnerResidentStyle.btnCodeSubmitDisable : OwnerResidentStyle.btnCodeSubmitEnable, StyleConfig.shadow]}>
                                        <Text style={(invalid) ? OwnerResidentStyle.btnCodeSubmitDisableTxt : OwnerResidentStyle.btnCodeSubmitEnableTxt}>SUBMIT</Text>
                                    </TouchableOpacity>
                                        :false
                                }
                            />
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}


const validate = values => {
    let errors = {};

    errors.code = !values.code
        ? 'Property Code'
        : (values.code.length!==6)
            ? 'Must be 6 digits.'
            : undefined;
    return errors;
};

const asyncValidate = (values) => {
    return new Promise(resolve => {
        values.code
            ? API.ValidatePropertyCode({code: values.code}).then((response) => {
            resolve(response);
        })
            : resolve({error:false})
    }).then(({error,message}) => {
        if(error) {
            throw { code: 'Not found, try again.' }
        }
    });
};

const initialValues = {
    code:''
};

const withForm = reduxForm({
    form: 'residentAddProperty',
    validate,
    asyncValidate,
    initialValues
});

export default withProperty(withLoader(withToast(withForm(ResidentAddPropertyFieldForm))));