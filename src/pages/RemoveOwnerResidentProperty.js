import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RemoveOwnerResidentPropertyStyle from 'RemoveOwnerResidentPropertyStyle';
import LayoutStyle from 'LayoutStyle';
import withProperty from 'withProperty';
import StyleConfig from 'StyleConfig';
import API from 'AppUtils';
import withLoader from 'withLoader';
import withToast from 'withToast';

class RemoveOwnerResidentProperty extends Component{

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
        const { viewProperty:{id:property_id}, loader } = this.props;
        loader(true);
        this.setState({
            btnDisable: true
        });
        API.removeProperties({property_id})
            .then(({error, message}) => {
                if(!error) {
                    this._responseOfApi('Property Removed');
                } else {
                    this._responseOfApi(message);
                }
            });
    }

    render(){
        const { viewProperty } = this.props;
        const { btnDisable } = this.state;

        return(
            <Content style={RemoveOwnerResidentPropertyStyle.content} >
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={RemoveOwnerResidentPropertyStyle.removeImageRow}>
                                <Col style={RemoveOwnerResidentPropertyStyle.removeImageCol}>
                                    <Image source={StyleConfig.propertyTypes[viewProperty.class].profileImage} style={RemoveOwnerResidentPropertyStyle.removeImage}/>
                                </Col>
                            </Row>
                            <Row style={RemoveOwnerResidentPropertyStyle.titleLabelRow}>
                                <Col style={RemoveOwnerResidentPropertyStyle.titleLabelCol}>
                                    <Label style={RemoveOwnerResidentPropertyStyle.titleLabel}>Are you sure?</Label>
                                </Col>
                            </Row>
                            <Row style={RemoveOwnerResidentPropertyStyle.descMainRow}>
                                <Col>
                                    <Row style={RemoveOwnerResidentPropertyStyle.descLabelRow}>
                                        <Col>
                                            <Label style={RemoveOwnerResidentPropertyStyle.descLabel}>
                                                Removal of the property will erase this property from your profile.
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={RemoveOwnerResidentPropertyStyle.removeBtnRow}>
                                <Col style={RemoveOwnerResidentPropertyStyle.removeBtnCol}>
                                    <TouchableOpacity onPress={()=>{this._removeProperty()}}
                                                      disabled={btnDisable}
                                                      style={[LayoutStyle.buttonH1,
                                                          (btnDisable) ? RemoveOwnerResidentPropertyStyle.removeBtnDisabled : RemoveOwnerResidentPropertyStyle.removeBtn]}>
                                        <Text style={[LayoutStyle.buttonH1Text, RemoveOwnerResidentPropertyStyle.removeBtnTxt]}>CONTINUE REMOVAL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={RemoveOwnerResidentPropertyStyle.cancelBtnRow}>
                                <Col style={RemoveOwnerResidentPropertyStyle.cancelBtnCol}>
                                    <TouchableOpacity
                                        onPress={()=>{ Actions.ownerResident() }}
                                        style={RemoveOwnerResidentPropertyStyle.cancelBtn}>
                                        <Text style={RemoveOwnerResidentPropertyStyle.cancelBtnTxt}>CANCEL</Text>
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

export default withLoader(withToast(withProperty(RemoveOwnerResidentProperty)));
