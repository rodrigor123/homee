/**
 * @providesModule GridStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({

    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: StyleConfig.getScreenPadding,
        zIndex:999999
    },

    column: {
        width: StyleConfig.getWidthByColumn(4),
        backgroundColor:'#2980B9',
        opacity:0.4,
        height:WINDOW.height
    }

});
