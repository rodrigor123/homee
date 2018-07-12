/**
 * @providesModule PropertyClassType
 */

import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Col } from 'native-base';
import StyleConfig from 'StyleConfig';
import LayoutStyle from 'LayoutStyle';

class PropertyClassType extends Component {

    render(){
        const { value, column } = this.props;

        if(value.image_id) {
            return (
                <Col size={StyleConfig.getWidthByColumn(4)} style={LayoutStyle.propertyImageSubCol1}>
                    <TouchableOpacity disabled={true}
                                      style={[LayoutStyle.propsTypeBtn, {backgroundColor: StyleConfig.propertyTypes[value.class].color}]}>
                        <Image source={StyleConfig.propertyTypes[value.class].icon} style={LayoutStyle.propsTypeImage} />
                    </TouchableOpacity>
                </Col>
            )
        } else {
            return null;
        }
    }
}
export default PropertyClassType;