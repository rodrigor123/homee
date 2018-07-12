import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RemoveResidentStyle from 'RemoveResidentStyle';
import LayoutStyle from 'LayoutStyle';
import withProperty from 'withProperty';
import withLoader from 'withLoader';
import withToast from 'withToast';
import AppImages from 'AppImages';
import ResidentCard from 'ResidentCard';
import withResident from 'withResident';
import API from 'AppUtils';

class RemoveResident extends Component{

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
        const { setViewResident } = this.props;
        setViewResident([]);
        (message) ? toast({text:message, type:'danger', navBar:true}) : undefined;
        Actions.residentList();
    }

    _removeResident = () => {
        const { viewResident, loader } = this.props;
        setTimeout(()=>{loader(true)}, 1);
        viewResident.map((value, key) => {
            API.removeResidentByPropertyId({'property_id': value.property_id, 'resident_id': value.id})
                .then((response) => {
                    const {error, message} = response;
                    if (!error) {
                        this._responseOfApi(viewResident.length + ' Resident Removed');
                    } else {
                        this._responseOfApi(message);
                    }
                })
                .catch(() => {
                    this._responseOfApi();
                })
        });
    }

    render(){
        const { viewResident } = this.props;
        const { btnDisable } = this.state;
        return(
            <Content style={RemoveResidentStyle.content} >
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={RemoveResidentStyle.removeImageRow}>
                                <Col style={RemoveResidentStyle.removeImageCol}>
                                    <Image source={AppImages.deleteAccount} style={RemoveResidentStyle.removeImage}/>
                                </Col>
                            </Row>
                            <Row style={RemoveResidentStyle.titleLabelRow}>
                                <Col style={RemoveResidentStyle.titleLabelCol}>
                                    <Label style={RemoveResidentStyle.titleLabel}>Are you sure?</Label>
                                </Col>
                            </Row>
                            <Row style={RemoveResidentStyle.descMainRow}>
                                <Col>
                                    <Row style={RemoveResidentStyle.descLabelRow}>
                                        <Col>
                                            <Label style={RemoveResidentStyle.descLabel}>
                                                Removing a resident or resident will remove
                                                them from the property, and will keep them
                                                from placing orders under your account in the future.
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={RemoveResidentStyle.descMainRow}>
                                <Col>
                                    <Row style={RemoveResidentStyle.descLabelRow}>
                                        <Col>
                                            <Label style={RemoveResidentStyle.removeTitleTxt}>
                                               RESIDENT TO BE REMOVED:
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {
                                        viewResident.map((value, key) => {
                                            return <ResidentCard key={value.id} residentData={value} shadow={1} sideOption={false} />
                                        })
                                    }
                                </Col>
                            </Row>
                            <Row style={RemoveResidentStyle.removeBtnRow}>
                                <Col style={RemoveResidentStyle.removeBtnCol}>
                                    <TouchableOpacity onPress={()=>{this._removeResident()}}
                                                      disabled={btnDisable}
                                                      style={[LayoutStyle.buttonH1,
                                                          (btnDisable) ? RemoveResidentStyle.removeBtnDisabled : RemoveResidentStyle.removeBtn]}>
                                        <Text style={[LayoutStyle.buttonH1Text, RemoveResidentStyle.removeBtnTxt]}>
                                            YES, REMOVE RESIDENTS
                                        </Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={RemoveResidentStyle.cancelBtnRow}>
                                <Col style={RemoveResidentStyle.cancelBtnCol}>
                                    <TouchableOpacity
                                        onPress={()=>{ Actions.residentList() }}
                                        style={RemoveResidentStyle.cancelBtn}>
                                        <Text style={RemoveResidentStyle.cancelBtnTxt}>CANCEL</Text>
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

export default withResident(withLoader(withToast(withProperty(RemoveResident))));
