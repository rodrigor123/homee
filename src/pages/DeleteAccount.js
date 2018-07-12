import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppImages from 'AppImages';
import DeleteAccountStyle from 'DeleteAccountStyle';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';

class DeleteAccount extends Component{

    render(){
        return(
            <Content style={DeleteAccountStyle.content} >
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={DeleteAccountStyle.deleteImageRow}>
                                <Col style={DeleteAccountStyle.deleteImageCol}>
                                    <Image source={AppImages.deleteAccount} style={DeleteAccountStyle.deleteImage}/>
                                </Col>
                            </Row>
                            <Row style={DeleteAccountStyle.titleLabelRow}>
                                <Col style={DeleteAccountStyle.titleLabelCol}>
                                    <Label style={DeleteAccountStyle.titleLabel}>Are you sure?</Label>
                                </Col>
                            </Row>

                            <Row style={DeleteAccountStyle.descMainRow}>
                                <Col>
                                    <Row style={DeleteAccountStyle.descLabelRow}>
                                        <Col>
                                            <Label style={DeleteAccountStyle.descLabel}>
                                                Deleting your account will remove all your
                                            </Label>
                                        </Col>
                                    </Row>
                                    <Row style={DeleteAccountStyle.descLabelRow}>
                                        <Col>
                                            <Label style={DeleteAccountStyle.descLabel}>
                                                information from Homee. You will not be able to
                                            </Label>
                                        </Col>
                                    </Row>
                                    <Row style={DeleteAccountStyle.descLabelRow}>
                                        <Col>
                                            <Label style={DeleteAccountStyle.descLabel}>
                                                order Homee jobs without an account.
                                            </Label>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            <Row style={DeleteAccountStyle.descMainRow}>
                                <Col>
                                    <Row style={DeleteAccountStyle.descLabelRow}>
                                        <Col>
                                            <Label style={DeleteAccountStyle.descLabel}>
                                                If you wish to use Homee after deleting your
                                            </Label>
                                        </Col>
                                    </Row>
                                    <Row style={DeleteAccountStyle.descLabelRow}>
                                        <Col>
                                            <Label style={DeleteAccountStyle.descLabel}>
                                                account you will need to create a new profile
                                            </Label>
                                        </Col>
                                    </Row>
                                    <Row style={DeleteAccountStyle.descLabelRow}>
                                        <Col>
                                            <Label style={DeleteAccountStyle.descLabel}>
                                                and re-enter your information.
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row style={DeleteAccountStyle.deleteBtnRow}>
                                <Col style={DeleteAccountStyle.deleteBtnCol}>
                                    <TouchableOpacity onPress={()=>{Alert.alert('coming soon')}} style={[DeleteAccountStyle.deleteBtn, StyleConfig.shadow]}>
                                        <Text style={DeleteAccountStyle.deleteBtnTxt}>CONTINUE DELETING ACCOUNT</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={DeleteAccountStyle.cancelBtnRow}>
                                <Col style={DeleteAccountStyle.cancelBtnCol}>
                                    <TouchableOpacity onPress={()=>{ Actions.editProfile() }} style={DeleteAccountStyle.cancelBtn}>
                                        <Text style={DeleteAccountStyle.cancelBtnTxt}>CANCEL</Text>
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

export default DeleteAccount;
