import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Label, Grid, Row, Col } from 'native-base';
import AppImages from 'AppImages';
import AddPropertyStyle from 'AddPropertyStyle';
import LayoutStyle from 'LayoutStyle';
import withProperty from 'withProperty';

class AddProperty extends Component {

    _addProperty = (type) => {
        const { setAddManagingProperty } = this.props;
        if (type) {
            setAddManagingProperty(false);
            Actions.ownerResident();
        } else {
            setAddManagingProperty(true);
            Actions.managing();
        }
    }

    render(){
        return(
            <Content style={AddPropertyStyle.content}>
                <Grid style={AddPropertyStyle.grid}>
                    <Row>
                        <Col>
                            <Row style={AddPropertyStyle.propertyImageRow}>
                                <Col style={AddPropertyStyle.propertyImageCol}>
                                    <Image source={AppImages.addProperty} style={AddPropertyStyle.propertyImage} />
                                </Col>
                            </Row>
                            <Row style={AddPropertyStyle.propertyTitleRow}>
                                <Col style={AddPropertyStyle.propertyTitleCol}>
                                    <Label style={AddPropertyStyle.propertyTitle}>Property Type</Label>
                                </Col>
                            </Row>
                            <Row style={AddPropertyStyle.propertyDesRow}>
                                <Col style={AddPropertyStyle.propertyDesCol}>
                                    <Label style={AddPropertyStyle.propertyDes}>Is the property you're adding a home that you own/reside, or one that you manage?</Label>
                                </Col>
                            </Row>
                            <Row style={AddPropertyStyle.propertyOwnerBtnRow}>
                                <Col style={AddPropertyStyle.propertyOwnerBtnCol}>
                                    <TouchableOpacity onPress={() => {this._addProperty(1)}} style={[LayoutStyle.buttonH1, AddPropertyStyle.propertyOwnerBtn]}>
                                        <Label style={[LayoutStyle.buttonH1Text, AddPropertyStyle.propertyOwnerBtnTxt]}>
                                            HOME OWNER/RESIDENT
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={AddPropertyStyle.propertyMangerBtnRow}>
                                <Col style={AddPropertyStyle.propertyMangerBtnCol}>
                                    <TouchableOpacity onPress={() => {this._addProperty(0)}}
                                        style={[LayoutStyle.buttonH1, AddPropertyStyle.propertyMangerBtn]}>
                                        <Label style={[LayoutStyle.buttonH1Text, AddPropertyStyle.propertyMangerBtnTxt]}>
                                            MANAGING
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={AddPropertyStyle.cancelBtnRow}>
                                <Col style={AddPropertyStyle.cancelBtnCol}>
                                    <TouchableOpacity onPress={() => {Actions.viewProfile()}}>
                                        <Label style={[LayoutStyle.buttonH1Text, AddPropertyStyle.cancelBtnTxt]}>
                                            CANCEL
                                        </Label>
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

export default withProperty(AddProperty);
