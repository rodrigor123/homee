/**
 * @providesModule LayoutStyle
 */

import { StyleSheet, Platform } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    rootContainer: {
        flex:1,
        backgroundColor:StyleConfig.navyMediumDark,
    },
    mainGrid: {
        width:StyleConfig.getWidthByColumn(),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:StyleConfig.getScreenPadding,
    },
    inputStyle: {
        fontFamily: StyleConfig.gothamBook,
        color:StyleConfig.navyDark,
        fontSize: StyleConfig.fontSizeH3,

    },

    sideErrorView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    sideErrorInput: {
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:4,
        letterSpacing:1
    },

    sideInputInfo: {
        color:StyleConfig.navyLight,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:4,
    },

    sideInputView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    sideInputSubView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },

    labelInput: {
        color:StyleConfig.blue,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        ...(Platform.OS == 'ios') ? {marginTop:4} : {},
    },

    labelInputSuccess: {
        color:StyleConfig.green,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        ...(Platform.OS == 'ios') ? {marginTop:4} : {},
    },

    errorInput: {
        color:StyleConfig.red,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        ...(Platform.OS == 'ios') ? {marginTop:4} : {},
    },

    placeholder: {
        fontFamily: StyleConfig.gothamMedium,
        letterSpacing:1,
    },

    itemInput: {
        borderColor:StyleConfig.blue,
        marginLeft:0
    },

    itemInputError: {
        borderColor: StyleConfig.red,
        marginLeft:0
    },

    itemInputSuccess: {
        borderColor:StyleConfig.green,
        marginLeft:0
    },

    labelInfo: {
        fontFamily: StyleConfig.gothamBook,
        fontSize: StyleConfig.fontSizeH3,
        color:StyleConfig.navyMediumDark,
        letterSpacing:1
    },

    mainContainerWithLoader: {
        flex:1,
        position:'absolute',
        right:0,
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex:999999
    },

    indicatorWithLoader: {
        flex: 1,
        position: 'absolute',
        right: 0,
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex: 9999999,
        elevation:3
    },

    empty:{
        height:0,
        width:0
    },

    indicator: {
        flex:1,
        right:0,
        height:0,
        width:0,
        zIndex:0
    },

    mainContainer: {
        flex:1,
        position:'absolute',
        right:0,
        left:0,
        height:25,
        width:WINDOW.width,
        zIndex:999,
    },
    headerLabel: {
        letterSpacing:1,
        lineHeight: StyleConfig.countPixelRatio(30),
        backgroundColor: StyleConfig.navyMediumDark,
        color: StyleConfig.white,
        paddingLeft: StyleConfig.countPixelRatio((WINDOW.width + WINDOW.height) * 0.012),
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    spinner:{
        width: StyleConfig.getWidthByColumn(2),
        height: StyleConfig.getWidthByColumn(2),
        borderRadius: StyleConfig.getWidthByColumn(2) / 2,
    },

    buttonH1: {
        borderRadius: StyleConfig.buttonHeight,
        backgroundColor: StyleConfig.white,
        marginVertical: StyleConfig.countPixelRatio(8),
        ...(Platform.OS == 'ios') ? {} : {justifyContent:'center'},
        alignItems:'center',
        width:'100%',
        height: StyleConfig.buttonHeight,
        shadowColor: "#000",
        shadowOffset:{ width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:2
    },

    buttonH1Text: {
        width:'100%',
        textAlign:'center',
        backgroundColor:'transparent',
        ...(Platform.OS == 'ios') ? {lineHeight: StyleConfig.buttonHeight} : {},
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.buttonHeight,
        letterSpacing:1,
        color:StyleConfig.white,
    },

    labelView:{
        backgroundColor:StyleConfig.navyMediumDark,
        height:StyleConfig.countPixelRatio(30),
        width:StyleConfig.getWidthByColumn(4),
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset:{ width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    labelViewTxt:{
        textAlign:'center',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1,
        elevation:2
    },

    propsTypeBtn:{
        width:StyleConfig.countPixelRatio(50),
        height:StyleConfig.countPixelRatio(50),
        borderRadius:StyleConfig.countPixelRatio(50),
        justifyContent:'center',
        alignItems:'center',
        marginBottom:StyleConfig.countPixelRatio(10),
    },
    propsTypeImage:{
        width:StyleConfig.countPixelRatio(40),
        height:StyleConfig.countPixelRatio(40),
        resizeMode:"contain",
    },
    propertyImageSubCol1:{
        alignItems:'center',
        justifyContent:'flex-end',
    },
    makeDefaultBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1),
        width:StyleConfig.getWidthByColumn(),
    },
    makeDefaultBtnCol1:{
        alignItems:'flex-end',
        justifyContent:'center'
    },
    makeDefaultBtnCol2:{
        alignItems:'center',
        justifyContent:'center'
    },
    makeDefaultBtnLabel:{
        color:StyleConfig.white,
        fontStyle:'italic',
        fontSize:StyleConfig.fontSizeParagraph,
        letterSpacing:1
    },
    headerLabelNoColor: {
        letterSpacing:1,
        ...(Platform.OS == 'ios') ? {lineHeight: StyleConfig.countPixelRatio(30)} : {},
        backgroundColor: 'transparent',
        color: StyleConfig.navyMediumDark,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    cardListRow:{
        marginTop:StyleConfig.countPixelRatio(15),
    },
    cardListCol1:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:StyleConfig.getWidthByColumn(2),
    },
    cardListBtnSelected:{
        borderWidth:4,
        borderRadius:StyleConfig.countPixelRatio(4),
        borderColor:StyleConfig.orange
    }
});
