/**
 * @providesModule PropertyProfileCard
 */

import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Row, Col, Text, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import StyleConfig from 'StyleConfig';
import PropertyClassType from 'PropertyClassType';
import { API_BASE_URL } from 'global';
import PropertyProfileCardStyle from 'PropertyProfileCardStyle';
import LayoutStyle from 'LayoutStyle';

class PropertyProfileCard extends Component {

    render(){
        const { propertyData, editBtn, hideNameAddress } = this.props;

        return(
            <ImageBackground
                resizeMode={(propertyData.image_id) ? "cover" : "contain"}
                source={
                    (propertyData.image_id)
                    ? {uri:API_BASE_URL+'/properties/'+propertyData.id+'/image'}
                    : StyleConfig.propertyTypes[propertyData.class].profileImage
                }
                style={
                    (propertyData.image_id)
                    ? [PropertyProfileCardStyle.propertyImage]
                    : [PropertyProfileCardStyle.propertyImage, {backgroundColor: StyleConfig.propertyTypes[propertyData.class].color}]
                }>
                {
                    (editBtn)
                    ?
                        <Row style={PropertyProfileCardStyle.editBtnRow}>
                            <Col style={PropertyProfileCardStyle.editBtnCol}>
                                <TouchableOpacity onPress={()=> { Actions.ownerResident() } } style={[LayoutStyle.buttonH1,PropertyProfileCardStyle.editBtn]}>
                                    <Text style={[LayoutStyle.buttonH1Text, PropertyProfileCardStyle.editBtnTxt]}>EDIT</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    :
                        null
                }
                {
                    (!hideNameAddress)
                    ?
                        <Row style={PropertyProfileCardStyle.propertyImageSubRow}>
                            <PropertyClassType value={propertyData} column={true} />
                            <Col size={StyleConfig.getWidthByColumn(3)} style={PropertyProfileCardStyle.propertyImageSubCol2}>
                                <Label style={PropertyProfileCardStyle.propertyTitle}>{propertyData.name}</Label>
                                <Label style={PropertyProfileCardStyle.propertyAddress}>{propertyData.address}</Label>
                            </Col>
                        </Row>
                    :
                        null
                }

            </ImageBackground>
        )
    }
}

export default PropertyProfileCard;
