import React from 'react';

import {
    StyleSheet,
    Image
} from 'react-native';
import AppImages from 'AppImages';
import { deviceType } from 'global';

export default class CustomMarker extends React.Component {
    render() {
        return (
            <Image
                style={styles.image}
                source={this.props.pressed && (deviceType == 'phone') ? AppImages.rangeArrowIcon : AppImages.rangeArrowIcon}
                resizeMode='contain'
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
        marginBottom:20
    }
});