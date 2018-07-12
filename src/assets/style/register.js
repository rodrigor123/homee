/**
 * @providesModule RegisterStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    gridRow1:{
        backgroundColor:StyleConfig.navyMediumDark
    },
    gridRow2:{
        backgroundColor:StyleConfig.white
    },
    grid1:{
        width:StyleConfig.getWidthByColumn(),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:StyleConfig.getScreenPadding,
    },
    grid2:{
        width:StyleConfig.getWidthByColumn(),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:StyleConfig.getScreenPadding,
    },
    labelInfoRow:{
        height:StyleConfig.countPixelRatio(50)
    },
    labelInfoCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    labelInfoTxt:{
        fontFamily:StyleConfig.gothamBook,
        fontSize:StyleConfig.fontSizeParagraph,
        width:StyleConfig.getWidthByColumn(),
        color:StyleConfig.white,
    },
    inputRow:{
        marginTop:StyleConfig.countPixelRatio(20),
        height:StyleConfig.countPixelRatio(90)
    },
    inputCol:{
        justifyContent:'flex-end',
    },
    input:{
        color:StyleConfig.tan,
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamBook,
    },
    formInputError: {
        color:StyleConfig.navyLight
    },
    registerFormInput:{
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
        letterSpacing:1,
    },
    formInputRow:{
        marginTop:StyleConfig.countPixelRatio(5),
    },
    icon:{
        width:StyleConfig.countPixelRatio(20),
        height:StyleConfig.countPixelRatio(20),
        resizeMode:'contain',
    },
    registerFormRowInfo:{
        height:StyleConfig.countPixelRatio(50)
    },
    registerFormColInfo:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    registerFormInfoView:{
        backgroundColor:StyleConfig.navyMediumDark,
        height:StyleConfig.countPixelRatio(30),
        width:StyleConfig.getWidthByColumn(4),
        justifyContent:'center',
        alignItems:'center'
    },
    registerFormInfoLabel:{
        textAlign:'center',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1,
        elevation:2
    },
    formFieldIcon:{
        width: StyleConfig.countPixelRatio(15),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    },
    termsRow: {
        height:StyleConfig.countPixelRatio(90),
    },
    termsCol: {
        alignItems:'center',
        justifyContent:'center'
    },
    termsSubRow:{
        alignItems:'center',
        justifyContent:'center',
    },
    radio:{
        marginLeft: StyleConfig.countPixelRatio(30),
    },
    termsInfo: {
        marginLeft: StyleConfig.countPixelRatio(15),
        fontFamily: StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeParagraph,
    },
    termsButtonRow: {
        marginTop:StyleConfig.countPixelRatio(-30)
    },
    termsButtonCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    termsButtonText: {
        fontFamily: StyleConfig.gothamMedium,
        color:StyleConfig.blue,
        fontSize: StyleConfig.fontSizeH3,
        lineHeight:StyleConfig.buttonHeight2,
    },
    termsButton: {
        height: StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.white,
    },
    profileButtonRow: {
        height:StyleConfig.countPixelRatio(90)
    },
    profileButtonCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    profileButton: {
        width:StyleConfig.getWidthByColumn()
    },
    profileButtonInvalid: {
        backgroundColor: StyleConfig.navyLight,
    },
    profileButtonValid: {
        backgroundColor: StyleConfig.green,
    },
    profileButtonText: {
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        color:StyleConfig.white,
    },
    cancelRow: {
        height:StyleConfig.countPixelRatio(60)
    },
    cancelCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cancelText: {
        fontFamily: StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.gray,
        fontSize: StyleConfig.fontSizeH3,
    },
    lastRow: {
        height:StyleConfig.countPixelRatio(50)
    },
    infoStyle:{
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:StyleConfig.countPixelRatio(4),
        letterSpacing:1
    }
});