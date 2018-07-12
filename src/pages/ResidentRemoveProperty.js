import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ResidentRemovePropertyStyle from 'ResidentRemovePropertyStyle';
import LayoutStyle from 'LayoutStyle';
import withProperty from 'withProperty';
import StyleConfig from 'StyleConfig';
import API from 'AppUtils';
import withLoader from 'withLoader';
import withToast from 'withToast';
import AppImages from 'AppImages';

class ResidentRemoveProperty extends Component{

    constructor(props){
        super(props);
        this.state = {
            btnDisable:false
        }
    }

    _responseOfApi = (message) => {
        const { loader, toast } = this.props;
        loader(false);
        this.setState({
            btnDisable: false
        });
        Actions.viewProfile();
        toast({text:message, type:'success', navBar:true});
    }

    _removeProperty = () => {
        const { viewProperty, loader } = this.props;
        loader(true);
        this.setState({
            btnDisable: true
        });
        API.removeResidentById(viewProperty)
            .then(({error, message}) => {
                if(!error) {
                    this._responseOfApi('Property Removed');
                } else {
                    this._responseOfApi(message);
                }
            });
    }

    render(){
        const { viewProperty:{ property: { name, address } } } = this.props;
        const { btnDisable } = this.state;

        return(
            <Content style={ResidentRemovePropertyStyle.content} >
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={ResidentRemovePropertyStyle.removeImageRow}>
                                <Col style={ResidentRemovePropertyStyle.removeImageCol}>
                                    <Image source={AppImages.deleteAccount} style={ResidentRemovePropertyStyle.removeImage}/>
                                </Col>
                            </Row>
                            <Row style={ResidentRemovePropertyStyle.titleLabelRow}>
                                <Col style={ResidentRemovePropertyStyle.titleLabelCol}>
                                    <Label style={ResidentRemovePropertyStyle.titleLabel}>Are you sure?</Label>
                                </Col>
                            </Row>
                            <Row style={ResidentRemovePropertyStyle.descMainRow}>
                                <Col>
                                    <Row style={ResidentRemovePropertyStyle.addressLabelRow}>
                                        <Col>
                                            <Label style={ResidentRemovePropertyStyle.propertyNameLabel}>
                                                {name}
                                            </Label>
                                            <Label style={ResidentRemovePropertyStyle.addressLabel}>
                                                {address}
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={ResidentRemovePropertyStyle.descMainRow}>
                                <Col>
                                    <Label style={ResidentRemovePropertyStyle.infoLabel}>
                                        Removing this property from your profile will
                                        result in removing you as a resident. This will
                                        keep you from placing orders for your unit. To
                                        re-add this property to your profile, you will
                                        have to be approved before regaining access as
                                        a resident.
                                    </Label>
                                </Col>
                            </Row>
                            <Row style={ResidentRemovePropertyStyle.removeBtnRow}>
                                <Col style={ResidentRemovePropertyStyle.removeBtnCol}>
                                    <TouchableOpacity onPress={()=>{this._removeProperty()}}
                                                      disabled={btnDisable}
                                                      style={[LayoutStyle.buttonH1,
                                                          (btnDisable) ? ResidentRemovePropertyStyle.removeBtnDisabled : ResidentRemovePropertyStyle.removeBtn]}>
                                        <Text style={[LayoutStyle.buttonH1Text, ResidentRemovePropertyStyle.removeBtnTxt]}>CONTINUE REMOVAL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={ResidentRemovePropertyStyle.cancelBtnRow}>
                                <Col style={ResidentRemovePropertyStyle.cancelBtnCol}>
                                    <TouchableOpacity
                                        onPress={()=>{ Actions.ownerResident() }}
                                        style={ResidentRemovePropertyStyle.cancelBtn}>
                                        <Text style={ResidentRemovePropertyStyle.cancelBtnTxt}>CANCEL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }

}

export default withLoader(withToast(withProperty(ResidentRemoveProperty)));
