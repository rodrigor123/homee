/**
 * @providesModule GridView
 */

import React, { Component } from 'react';
import { View, PixelRatio } from 'react-native';
import { WINDOW } from 'global';
import GridStyle from 'GridStyle';

class GridView extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={GridStyle.container}>
                <View style={GridStyle.column}>
                </View>
                <View style={GridStyle.column}>
                </View>
                <View style={GridStyle.column}>
                </View>
                <View style={GridStyle.column}>
                </View>
            </View>
        );
    }
}

export default GridView;
