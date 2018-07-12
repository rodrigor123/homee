/**
 * @providesModule ResidentRemovePropertyStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    content:{
        backgroundColor:StyleConfig.red,
    },
    removeImageRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.4)
    },
    removeImageCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    removeImage:{
        width:StyleConfig.getWidthByColumn(2),
        height:StyleConfig.getWidthByColumn(3),
        resizeMode:'contain',
    },
    titleLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.02)
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
    propertyNameLabel:{
        width:StyleConfig.getWidthByColumn(),
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.white,
        marginVertical:StyleConfig.countPixelRatio(5)
    },
    addressLabelRow:{
        paddingVertical:StyleConfig.countPixelRatio(2)
    },
    addressLabel:{
        width:StyleConfig.getWidthByColumn(),
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white,
    },
    infoLabel:{
        width:StyleConfig.getWidthByColumn(),
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white,
    },
    removeBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.15)
    },
    removeBtnCol:{
        alignItems:'center',
        justifyContent:'flex-end'
    },
    removeBtn:{
        backgroundColor:StyleConfig.conectratedRed,
    },
    removeBtnDisabled:{
        backgroundColor:StyleConfig.navyLight,
    },
    removeBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.07)
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
