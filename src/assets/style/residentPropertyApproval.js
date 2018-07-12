/**
 * @providesModule ResidentPropertyApprovalStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    grid1: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: StyleConfig.navyDark,
        height: WINDOW.height,
        width: WINDOW.width,
    },
    grid1Row: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal:StyleConfig.getScreenPadding,
        paddingTop:StyleConfig.countPixelRatio(25),
    },
    grid1Col: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    propInfoTxt:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white
    },
    pendingApprovalRow:{
        // height: StyleConfig.countPixelRatio(WINDOW.height * 0.01)
    },
    pendingApprovalCol:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    pendingApproval:{
        marginTop:StyleConfig.countPixelRatio(20),
        marginBottom:StyleConfig.countPixelRatio(10),
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white,
        fontWeight:'bold'
    },
    okBtnRow:{
        // height: StyleConfig.countPixelRatio(WINDOW.height * 0.15)
    },
    okBtnCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    okBtn:{
        backgroundColor:StyleConfig.navyDark
    },
    okBtnTxt:{
        color:StyleConfig.navyLight,
        fontSize:StyleConfig.fontSizeH3,
        fontWeight:'bold'
    },
    pendingApprovalImageRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.35)
    },
    pendingApprovalImageCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    pendingApprovalImage:{
        height:StyleConfig.getWidthByColumn(3),
        width:StyleConfig.getWidthByColumn(3),
        resizeMode:'contain'
    },
    propertyDetailsCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    propertyName:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:'transparent',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeParagraph,
        letterSpacing:1,
    },
    propertyAddress:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:'transparent',
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeParagraph,
        letterSpacing:1,
        marginBottom:StyleConfig.countPixelRatio(10)
    },

});
