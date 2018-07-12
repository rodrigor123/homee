/**
 * @providesModule NumberCardStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    numberCardRow: {
        justifyContent:'space-between',
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.15),
    },
    numberCard: {
        flex:0,
        width: StyleConfig.getWidthByColumn(4),
        justifyContent:'center',
        alignItems:'center'
    },
    numberText: {
        fontFamily:StyleConfig.gothamBold,
        fontSize: StyleConfig.countPixelRatio(50),
        color: StyleConfig.navyDark,
        marginVertical:StyleConfig.countPixelRatio(10),
    },
});
