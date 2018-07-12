/**
 * @providesModule EmailRecoverStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    iconRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.23)
    },
    logoCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo:{
        width:StyleConfig.getWidthByColumn(2),
        resizeMode:'contain'
    },
    emailRecoverRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.25),
    },
    emailRecoverCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    emailRecoverImage:{
        width:StyleConfig.getWidthByColumn(2),
        height:StyleConfig.getWidthByColumn(2),
        resizeMode:'contain'
    },
    emailRecoverTxtRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.03),
    },
    emailRecoverTxtCol:{
        alignItems:'flex-start',
        justifyContent:'flex-end',
    },
    emailRecoverLabel:{
        color:StyleConfig.tan,
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamMedium,
    },
    emailRecoverDescRow:{
        width:StyleConfig.getWidthByColumn(),
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08)
    },
    emailRecoverDescCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    emailRecoverDescLabel:{
        color:StyleConfig.tan,
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
    },
    inputRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.2),
    },
    inputbox:{
        color:StyleConfig.tan,
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamBook,
        letterSpacing:1
    },
    sendBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    sendBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    sendDisableBtn:{
        backgroundColor:StyleConfig.navyLight,
    },
    sendEnableBtn:{
        backgroundColor:StyleConfig.green
    },
    sendBtnTxt:{
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1
    },
    sendBtnTxtDisable:{
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.05)
    },
    cancelBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cancelBtnTxt:{
        color:StyleConfig.navyMediumLight,
        fontFamily:StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    }
});
