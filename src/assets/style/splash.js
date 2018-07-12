/**
 * @providesModule SplashStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullScreen: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: WINDOW.height - (WINDOW.width * (1280 / 720)),
        bottom: 0
    }
});
