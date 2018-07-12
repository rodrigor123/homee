/**
 * @providesModule EditProfileStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    container:{
        backgroundColor:StyleConfig.navyDark
    },
    mainGrid:{
        marginHorizontal: StyleConfig.getScreenPadding,
        justifyContent:'center',
        alignItems:'center',
    },
    gridTitleCol:{
        paddingTop:StyleConfig.countPixelRatio(35),
        justifyContent:'center',
        alignItems:'center'
    },
    gridTitle:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        width:StyleConfig.getWidthByColumn(3),
        letterSpacing:1,
        textAlign:'center'
    },
    gridRow:{
        justifyContent:'center',
    },
    girdCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    imageBtn:{
        alignItems:'center',
        borderRadius:StyleConfig.buttonHeight2,
        height:StyleConfig.buttonHeight2,
        width: StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.white,
        borderWidth:1,
        borderColor:'transparent'
    },
    imageBtnText:{
        textAlign:'center',
        lineHeight:StyleConfig.buttonHeight2,
        backgroundColor:'transparent',
        color:StyleConfig.blue,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeParagraph,
        letterSpacing:1,
    },
    imageBtnCol1:{
        justifyContent:'center',
        flex:0.7
    },
    imageBtnCol2:{
        flex:0
    },
    infoStyle:{
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:4,
        letterSpacing:1
    },
    profileFormInput:{
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeH3,
        marginTop: StyleConfig.countPixelRatio(15),
    },
    profileForm:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    profileFormRowInfo:{
        paddingTop: StyleConfig.countPixelRatio(20),
        width: StyleConfig.getWidthByColumn(1)
    },
    labelLogin:{
        width:StyleConfig.getWidthByColumn(2),
        lineHeight: StyleConfig.countPixelRatio(30),
        backgroundColor: StyleConfig.white,
        color: StyleConfig.navyDark,
        paddingLeft: StyleConfig.countPixelRatio(10),
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    labelProfile: {
        width:StyleConfig.getWidthByColumn(3),
        lineHeight: StyleConfig.countPixelRatio(30),
        backgroundColor: StyleConfig.white,
        color: StyleConfig.navyDark,
        paddingLeft: StyleConfig.countPixelRatio(10),
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    profileCol: {
        marginTop: StyleConfig.countPixelRatio(20)
    },
    formFieldIcon:{
        marginTop: StyleConfig.countPixelRatio(2),
        width: StyleConfig.countPixelRatio(15),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    },
    inputHiddenBtn: {
        marginBottom: -30,
    },
    eyeIcon: {
        height: StyleConfig.countPixelRatio(20),
        width: StyleConfig.countPixelRatio(20),
        resizeMode:'contain'
    },
    submitButtonRow: {
        flexDirection:'column',
        marginTop: StyleConfig.countPixelRatio(40)
    },
    submitButton: {
        alignItems:'center',
        height:StyleConfig.buttonHeight,
        borderRadius: StyleConfig.buttonHeight,
        width: StyleConfig.getWidthByColumn(),
        borderWidth:1,
        borderColor:"transparent"
    },
    serviceButtonInvalid: {
        backgroundColor: StyleConfig.navyLight,
    },
    serviceButtonValid: {
        backgroundColor: StyleConfig.green,
    },
    deleteBtn: {
        backgroundColor: StyleConfig.red,
    },
    serviceButtonText: {
        textAlign:'center',
        lineHeight:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        color:StyleConfig.white,
    },
    deleteBtnCol: {
        marginVertical: StyleConfig.countPixelRatio(15),
    },
    cancelCol: {
        justifyContent:'center',
        alignItems:'center',
        width: StyleConfig.getWidthByColumn(1),
        marginBottom: StyleConfig.countPixelRatio(30),
    },
    cancelText: {
        fontFamily: StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.gray,
        fontSize: StyleConfig.fontSizeH3
    },
    thumbnailCol:{
        justifyContent:'center',
        alignItems:'center',
        height: StyleConfig.getWidthByColumn(2),
        marginVertical: StyleConfig.countPixelRatio(20)
    },
    thumbnail:{
        width: StyleConfig.getWidthByColumn(2),
        height: StyleConfig.getWidthByColumn(2),
        borderRadius: StyleConfig.getWidthByColumn(2) / 2,
    },
});