/**
 * @providesModule SocialRegisterStyle
 */

import { StyleSheet, Platform } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    gridRow:{
        justifyContent:'center',
        alignItems:'center'
    },
    girdCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    logoRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.12),
    },
    logoCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    titleRow: {
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.09)
    },
    titleCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    btnsRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.4)
    },
    btnsCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    titleLabel: {
        fontFamily: StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.tan,
        fontSize: StyleConfig.fontSizeH3,
    },
    logoImage: {
        height:StyleConfig.countPixelRatio(32),
        width:StyleConfig.countPixelRatio(65),
        resizeMode:'contain',
    },
    cancelRow: {
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.33)
    },
    cancelCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    facebookButton: {
        backgroundColor:StyleConfig.conectratedBlue
    },
    googleButton: {
        backgroundColor:StyleConfig.red
    },
    profileButton: {
        borderWidth:1,
        backgroundColor:'transparent',
        borderColor:StyleConfig.white,
    },
    buttonTxt: {
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1
    },
    cancelText: {
        color:StyleConfig.navyMediumLight,
        fontFamily:StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    touchableOpacityTextCol:{
        flex:7,
        ...(Platform.OS == 'ios') ? {} : {justifyContent:'center'},
        alignItems:'center',
    },
    touchableOpacityTextCol2:{
        flex:6,
        ...(Platform.OS == 'ios') ? {} : {justifyContent:'center'},
        alignItems:'center',
    },
    touchableOpacityIconCol:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    touchableOpacityIconCol2:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    facebookButtonIcon: {
        width: StyleConfig.countPixelRatio(18),
        height: StyleConfig.countPixelRatio(18),
        resizeMode:'contain',
    },
    googleButtonIcon: {
        width: StyleConfig.countPixelRatio(25),
        height: StyleConfig.countPixelRatio(25),
        resizeMode:'contain',
    },
});
