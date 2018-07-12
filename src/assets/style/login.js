/**
 * @providesModule LoginStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    content:{
        backgroundColor:StyleConfig.navyMediumDark,
    },
    gridRow:{
        justifyContent:'center',
        alignItems:'center'
    },
    girdCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    logoRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.3)
    },
    logoCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo:{
        width:StyleConfig.getWidthByColumn(2),
        height:'100%',
        resizeMode:'contain'
    },
    icon:{
        width:StyleConfig.countPixelRatio(18),
        resizeMode:'contain',
    },
    iconGoogle:{
        width:StyleConfig.countPixelRatio(22),
        resizeMode:'contain',
    },
    icon1:{
        height:StyleConfig.countPixelRatio(10),
        width:StyleConfig.countPixelRatio(10),
        resizeMode:'contain',
        marginTop:6,
        marginLeft:4,
        opacity:0.9
    },
    input:{
        color:StyleConfig.tan,
        fontSize: StyleConfig.fontSizeH2,
        letterSpacing:1
    },
    loginBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.09)
    },
    loginBtnCol:{
        alignItems:'center',
        justifyContent:'flex-end',
    },
    loginBtn:{
        backgroundColor:StyleConfig.blue,
    },
    loginBtnDisable:{
        backgroundColor:StyleConfig.navyLight,
    },
    loginBtnTxt:{
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1
    },
    loginBtnTxtDisable:{
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1
    },
    loginWithLabel:{
        color:StyleConfig.navyLight,
        fontSize: StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamMedium,
        fontWeight:'bold',
        textAlign:'center',
        width:StyleConfig.getWidthByColumn(2),
    },
    loginWithFBBtn:{
        justifyContent:'center',
        width:StyleConfig.getWidthByColumn(2),
        borderRadius:StyleConfig.buttonHeight,
        backgroundColor:StyleConfig.conectratedBlue
    },
    loginWithGoogleBtn:{
        justifyContent:'center',
        width:StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.red
    },
    loginWithColRight:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    inputRow:{
        alignItems:'center',
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.25),
        width: StyleConfig.getWidthByColumn(),
    },
    loginWithRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08)
    },
    loginWithCol:{
        alignItems:'flex-start',
        justifyContent:'flex-end',
    },
    loginWithLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.01)
    },
    loginWithLabelCol:{
        justifyContent:'center',
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.22) - StyleConfig.platformPadding
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
