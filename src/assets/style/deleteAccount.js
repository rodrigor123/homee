/**
 * @providesModule DeleteAccountStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    content:{
        backgroundColor:StyleConfig.red,
    },
    deleteImageRow:{
        height:WINDOW.height * 0.4,
    },
    deleteImageCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    deleteImage:{
        width:StyleConfig.getWidthByColumn(2),
        height:StyleConfig.getWidthByColumn(2),
        resizeMode:'contain'
    },
    titleLabelRow:{
        height:StyleConfig.countPixelRatio(50)
    },
    titleLabelCol:{
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    titleLabel:{
        width:StyleConfig.getWidthByColumn(2),
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        letterSpacing:1
    },
    descMainRow:{
        paddingVertical:StyleConfig.countPixelRatio(10)
    },
    descLabelRow:{
        paddingVertical:StyleConfig.countPixelRatio(2)
    },
    descLabel:{
        width:StyleConfig.getWidthByColumn(),
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
    },
    deleteBtnRow:{
        height:StyleConfig.countPixelRatio(60)
    },
    deleteBtnCol:{
        alignItems:'center',
        justifyContent:'flex-end'
    },
    deleteBtn:{
        width:StyleConfig.getWidthByColumn(),
        height:StyleConfig.buttonHeight,
        borderRadius:StyleConfig.buttonHeight,
        backgroundColor:StyleConfig.conectratedRed,
        alignItems:'center',
        borderWidth:1,
        borderColor:'transparent'
    },
    deleteBtnTxt:{
        textAlign:'center',
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        lineHeight:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        color:StyleConfig.white,
        letterSpacing:1
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(45)
    },
    cancelBtnCol:{
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cancelBtn:{
        height:StyleConfig.buttonHeight,
        borderRadius:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        alignItems:'center',
        borderWidth:1,
        borderColor:'transparent'
    },
    cancelBtnTxt:{
        textAlign:'center',
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        lineHeight:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        color:StyleConfig.navyLight,
        letterSpacing:1
    }
});