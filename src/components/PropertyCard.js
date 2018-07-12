/**
 * @providesModule PropertyCard
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Label } from 'native-base';
import { ImageBackground, TouchableOpacity } from 'react-native';
import StyleConfig from 'StyleConfig';
import PropertyClassType from 'PropertyClassType';
import { API_BASE_URL, MANAGING } from 'global';
import PropertyCardStyle from 'PropertyCardStyle';

class PropertyCard extends Component {

    render(){
        const { propertyData, _onPress, status } = this.props;
        return(
            <Row style={[PropertyCardStyle.propertyImageRow, StyleConfig.shadow]}>
                <Col style={PropertyCardStyle.propertyImageCol}>
                    <TouchableOpacity onPress={()=>{_onPress()}} disabled={(status==null || status==1)?false:true}>
                        <Row style={{justifyContent:'center', alignItems:'flex-start'}}>
                            <ImageBackground
                                resizeMode={ (propertyData.image_id) ? "cover" : "contain" }
                                source={
                                    (propertyData.image_id)
                                        ?
                                        {uri:API_BASE_URL+'/properties/'+propertyData.id+'/image'}
                                        :
                                        StyleConfig.propertyTypes[propertyData.class].cardImage
                                }
                                style={
                                    (propertyData.image_id)
                                        ?
                                        [PropertyCardStyle.propertyImage,{opacity:(status==null || status==1)?1:0.5}]
                                        :
                                        [PropertyCardStyle.propertyImage, {backgroundColor: StyleConfig.propertyTypes[propertyData.class].color},{opacity:(status==null || status==1)?1:0.5}]
                                }>
                                <Row style={PropertyCardStyle.propertyImageSubRow}>
                                    <Col size={StyleConfig.getWidthByColumn((propertyData.image_id) ? 4 : 10)}>
                                        <PropertyClassType value={propertyData} column={true} />
                                    </Col>
                                    <Col size={StyleConfig.getWidthByColumn(3)} style={PropertyCardStyle.propertyImageSubCol2}>
                                        {
                                            (propertyData.type == MANAGING && status==null)
                                            ?
                                                <TouchableOpacity disabled={true} style={PropertyCardStyle.propertyManagedBtn}>
                                                    <Label style={PropertyCardStyle.propertyManagedLabel}>Managed</Label>
                                                </TouchableOpacity>
                                            :(propertyData.type == MANAGING && status==0)?
                                                <TouchableOpacity disabled={true} style={PropertyCardStyle.propertyManagedBtn}>
                                                    <Label style={PropertyCardStyle.propertyManagedLabel}>Pending</Label>
                                                </TouchableOpacity>
                                                :
                                                null
                                        }

                                        <Label style={PropertyCardStyle.propertyTitle}>{propertyData.name}</Label>
                                        <Label style={PropertyCardStyle.propertyAddress}>{propertyData.address}</Label>
                                    </Col>
                                </Row>
                            </ImageBackground>
                        </Row>
                    </TouchableOpacity>
                </Col>
            </Row>
        )
    }
}

export default PropertyCard;
