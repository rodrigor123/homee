/**
 * @providesModule SelectFilterDropDownStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({

    input:{
        color:StyleConfig.black,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
    },
    searchItemIcon:{
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeH2
    }

});
