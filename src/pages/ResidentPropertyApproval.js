import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Content, Label, Grid, Row, Col, Text } from 'native-base';
import ResidentPropertyApprovalStyle from 'ResidentPropertyApprovalStyle';
import { GOOGLE_API_KEY, API_BASE_URL, HOUSE_RESIDENT} from 'global';
import { Actions } from 'react-native-router-flux';
import AppImages from 'AppImages';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withProperty from 'withProperty';
import API from 'AppUtils';

class ResidentPropertyApproval extends Component{

    constructor(props){
        super(props);
        this.state = {
            property:{}
        }
    }

    componentDidMount(){
        const { viewProperty,loader, toast } = this.props;
        API.getResident({'id':viewProperty})
            .then((response) => {
                loader(false);
                const {error, message} = response;
                if (!error) {
                    const {property} = response;
                    this.setState({
                        property: property,
                    });
                } else {
                    toast({text:message});
                }
            });
    }

    _goToViewProfile(){
        return Actions.viewProfile();
    }

    render(){
        const {property} = this.state;
        return(
            <Content scrollEnabled={ false }>
                <Grid style={ResidentPropertyApprovalStyle.grid1} form='addPropertyForm'>
                    <Row style={ResidentPropertyApprovalStyle.grid1Row}>
                        <Col style={ResidentPropertyApprovalStyle.grid1Col}>
                            <Row style={ResidentPropertyApprovalStyle.pendingApprovalImageRow}>
                                <Col style={ResidentPropertyApprovalStyle.pendingApprovalImageCol}>
                                    <Image source={AppImages.pendingApprovalImg} style={ResidentPropertyApprovalStyle.pendingApprovalImage} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={ResidentPropertyApprovalStyle.propertyDetailsCol}>
                                    <Label style={ResidentPropertyApprovalStyle.pendingApproval}>
                                        Pending Approval...
                                    </Label>
                                    <Label style={ResidentPropertyApprovalStyle.propertyName}>
                                        {property.name}
                                    </Label>
                                    <Label style={ResidentPropertyApprovalStyle.propertyAddress}>
                                        {property.address}
                                    </Label>
                                    <Label style={ResidentPropertyApprovalStyle.propInfoTxt}>
                                        Just hold tight, your property manager is going to have to approve
                                        you before you can order under their account. It may take it a bit,
                                        so check back later. If it's taking too long you can always contact
                                        to your property manager to possibly speed things up.
                                    </Label>
                                </Col>
                            </Row>
                            <Row style={ResidentPropertyApprovalStyle.okBtnRow}>
                                <Col style={ResidentPropertyApprovalStyle.okBtnCol}>
                                    <TouchableOpacity
                                        onPress={this._goToViewProfile.bind(this)}
                                        style={[ResidentPropertyApprovalStyle.okBtn]}>
                                        <Text style={[ResidentPropertyApprovalStyle.okBtnTxt]}>
                                           OKAY
                                        </Text>
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

export default withProperty(withLoader(withToast(ResidentPropertyApproval)));
