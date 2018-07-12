/**
 * @providesModule RangeSliderModalStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig'

export default StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height:StyleConfig.countPixelRatio(300),
        width: StyleConfig.getWidthByColumn(1),
        padding:  StyleConfig.getScreenPadding,
        backgroundColor: StyleConfig.navyMediumDark,
        borderColor: StyleConfig.navyMediumDark
    },
    saveButton: {
        marginTop:StyleConfig.countPixelRatio(60),
        backgroundColor: StyleConfig.white,
    },
    saveBtnText:{
        justifyContent: 'center',
        alignItems:'center',
        fontSize:StyleConfig.fontSizeH2,
        fontFamily: StyleConfig.gothamMedium,
        color:StyleConfig.navyMediumLight
    },
});

