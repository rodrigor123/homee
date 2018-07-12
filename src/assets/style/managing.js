/**
 * @providesModule ManagingStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    grid1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.navyMediumDark,
    },
    grid1Row: {
        marginHorizontal: StyleConfig.getScreenPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid1Col: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid2:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleConfig.white,
    },
    grid2Row:{
        marginHorizontal:StyleConfig.getScreenPadding,
        alignItems:'center',
        justifyContent:'center',
    },
    grid2Col:{
        alignItems:'center',
        justifyContent:'center'
    },
    defaultLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.07)
    },
    defaultLabelCol:{
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    defaultLabel:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamMedium
    },
    defaultLabelDescRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.05),
        marginBottom:StyleConfig.countPixelRatio(WINDOW.height * 0.02)
    },
    defaultLabelDescCol:{
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    defaultLabelDesc:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamBook
    },
    labelRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    labelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    labelViewTxt2:{
        width:StyleConfig.getWidthByColumn(3),
        alignItems:'flex-start',
        paddingLeft:StyleConfig.countPixelRatio(10)
    },
    noteLabelRow:{
        marginTop: StyleConfig.countPixelRatio(WINDOW.height * 0.01)
    },
    noteLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    noteLabel:{
        color:StyleConfig.navyMediumDark,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamBook
    },
    titleLabelTxt:{
        backgroundColor:StyleConfig.white,
        width:StyleConfig.getWidthByColumn(3),
        shadowOpacity:0,
        alignItems:'flex-start'
    },
    titleLabelSubTxt:{
        color:StyleConfig.navyDark,
    },

    paymentLabelRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.02)
    },
    paymentLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    addBtnRow:{
        marginTop:StyleConfig.countPixelRatio(15)
    },
    addBtnCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    addBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:StyleConfig.white,
    },
    addBtnPlus:{
        fontSize:StyleConfig.fontSizeH2,
        color:StyleConfig.blue,
        backgroundColor:'transparent',
    },
    addBtnPlusRow:{
        height:StyleConfig.buttonHeight2,
        justifyContent:'center',
        borderWidth:1,
        borderColor:"transparent"
    },
    addBtnPlusCol1:{
        alignItems:'flex-end'
    },
    addBtnPlusCol2:{
        alignItems:'flex-start'
    },
    addBtnTxt:{
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        backgroundColor:'transparent'
    },
    notToLabelRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.03)
    },
    notToLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    notToRedioCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    notToRedioBtnGrid:{
        marginTop: StyleConfig.countPixelRatio(WINDOW.height * 0.05),
        width:StyleConfig.getWidthByColumn(),
    },
    notToRedioBtnRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.05),
    },
    notToRedioSliderRow:{
        width:StyleConfig.getWidthByColumn(),
    },
    notToRedioSliderCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    notToRedioSliderSubRow1:{
        marginTop:StyleConfig.countPixelRatio(5),
        marginBottom:StyleConfig.countPixelRatio(5),
        width:StyleConfig.getWidthByColumn(),
    },
    notToRedioSliderSubRow2:{
        marginTop:StyleConfig.countPixelRatio(15),
        marginBottom:StyleConfig.countPixelRatio(15),
        width:StyleConfig.getWidthByColumn(),
    },
    notToRedioSliderLabel:{
        color:StyleConfig.navyDark,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH4
    },
    saveBtnRow:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.05),
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    saveBtnSubRow:{
        height:StyleConfig.buttonHeight,
        borderWidth:1,
        borderColor:"transparent"
    },
    saveBtnCol1:{
        alignItems:'center',
    },
    saveBtnCol2:{
        alignItems:'center',
        marginTop:StyleConfig.countPixelRatio(6)
    },
    saveBtn: {
        backgroundColor:StyleConfig.blue,
    },
    saveBtnDisabled:{
        backgroundColor: StyleConfig.navyLight
    },
    saveBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    saveBtnArrow:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        backgroundColor:'transparent'
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.05) - StyleConfig.platformPadding
    },
    cancelBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cancelBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.navyMediumLight
    },
    propertyCodeRow:{
        paddingTop:StyleConfig.countPixelRatio(50),
        backgroundColor:StyleConfig.navyDark,
        paddingVertical:StyleConfig.countPixelRatio(10),
        paddingHorizontal: StyleConfig.getScreenPadding,
    },
    propertyCodeCol:{
        alignItems:'flex-start',
        justifyContent:'center'
    },
    propertyCodeText1:{
        color:StyleConfig.blue,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH4,
        paddingVertical:StyleConfig.countPixelRatio(3),
    },
    propertyCodeText2:{
        color:StyleConfig.lightGray,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH4,
        paddingVertical:StyleConfig.countPixelRatio(3),
    },
    propertyCode:{
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH2,
        paddingVertical:StyleConfig.countPixelRatio(3),
    },

});
