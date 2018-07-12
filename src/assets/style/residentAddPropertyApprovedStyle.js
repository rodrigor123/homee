/**
 * @providesModule ResidentAddPropertyApprovedStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    content:{
        backgroundColor:StyleConfig.navyDark
    },
    grid:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal:StyleConfig.getScreenPadding,
    },
    propertyImageRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.25),
    },
    propertyImageCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyImage:{
        height:StyleConfig.getWidthByColumn(2),
        width:StyleConfig.getWidthByColumn(2),
        resizeMode:'contain'
    },
    propertyTitleRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.03),
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginVertical: StyleConfig.countPixelRatio(0),
    },
    propertyTitleCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyTitle:{
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.white,
    },
    propertySubTitleRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.03),
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    propertySubTitleCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    propertySubTitle:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.white
    },
    propertySubTitleDescriptionRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.03),
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginVertical: StyleConfig.countPixelRatio(5),
    },
    propertySubTitleDescriptionCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    propertySubTitleDescription:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white,
    },
    propertyDesRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.06),
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    propertyDesCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    propertyDes:{
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white
    },
    propertySubmitBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08)
    },
    propertySubmitBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertySubmitBtn: {
        backgroundColor:StyleConfig.green,
    },
    propertySubmitBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    inputRow:{
        alignItems:'center',
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.20),
        width: StyleConfig.getWidthByColumn(),
    },
    input:{
        color:StyleConfig.tan,
        fontSize: StyleConfig.fontSizeH2,
        letterSpacing:1
    },
});
