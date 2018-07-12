/**
 * @providesModule Loader
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import LayoutStyle from 'LayoutStyle';
import { View,Text } from 'react-native';

class Loader extends Component {
    constructor() {
        super(...arguments);
    }

    componentWillReceiveProps({loader}) {
        if (loader == true) {
            loaderHandler.showLoader("Loading");
        } else {
            loaderHandler.hideLoader();
        }
    }

    render() {
        const { loader } = this.props;
        return (
            <View style={ (loader) ? LayoutStyle.indicatorWithLoader : LayoutStyle.indicator}>
                <BusyIndicator />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.loader ? state.loader : false
});

export default connect(mapStateToProps)(Loader);
