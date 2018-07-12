import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Label, Grid, Row, Col } from 'native-base';
import AppImages from 'AppImages';
import ResidentAddPropertyApprovedStyle from 'ResidentAddPropertyApprovedStyle';
import LayoutStyle from 'LayoutStyle';
import ResidentAddPropertyApprovedFieldForm from '../components/ResidentAddPropertyApprovedFieldForm';

class ResidentAddPropertyApproved extends Component {

    render(){
        return(
            <Content style={ResidentAddPropertyApprovedStyle.content}>
                <Grid style={ResidentAddPropertyApprovedStyle.grid}>
                    <Row>
                        <Col>
                            <Row style={ResidentAddPropertyApprovedStyle.propertyImageRow}>
                                <Col style={ResidentAddPropertyApprovedStyle.propertyImageCol}>
                                    <Image source={AppImages.ApprovedPropertyImg} style={ResidentAddPropertyApprovedStyle.propertyImage} />
                                </Col>
                            </Row>
                            <Row style={ResidentAddPropertyApprovedStyle.propertyTitleRow}>
                                <Col style={ResidentAddPropertyApprovedStyle.propertyTitleCol}>
                                    <Label style={ResidentAddPropertyApprovedStyle.propertyTitle}>You're approved!</Label>
                                </Col>
                            </Row>
                            <Row style={ResidentAddPropertyApprovedStyle.propertySubTitleRow}>
                                <Col style={ResidentAddPropertyApprovedStyle.propertySubTitleCol}>
                                    <Label style={ResidentAddPropertyApprovedStyle.propertySubTitle}>Sherwood Condos</Label>

                                </Col>
                            </Row>
                            <Row style={ResidentAddPropertyApprovedStyle.propertySubTitleDescriptionRow}>
                                <Col style={ResidentAddPropertyApprovedStyle.propertySubTitleDescriptionCol}>
                                    <Label style={ResidentAddPropertyApprovedStyle.propertySubTitleDescription}>15 N, Whatever Dr.Cincinnati, OH</Label>
                                </Col>
                            </Row>

                            <Row style={ResidentAddPropertyApprovedStyle.propertyDesRow}>
                                <Col style={ResidentAddPropertyApprovedStyle.propertyDesCol}>
                                    <Label style={ResidentAddPropertyApprovedStyle.propertyDes}>Congrats, your property
                                        manager approved you to the requested property above!</Label>
                                    <Label style={ResidentAddPropertyApprovedStyle.propertyDes}>
                                        Enter the unit number and optional notes below.
                                    </Label>
                                </Col>
                            </Row>
                            <ResidentAddPropertyApprovedFieldForm {...this.props} />
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }
}

export default ResidentAddPropertyApproved;
