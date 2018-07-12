/**
 * @providesModule SocialRegisterFormStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    content:{
        backgroundColor: StyleConfig.white
    },
    grid:{
        flex:1
    },
    gridRow:{
        justifyContent:'center',
        alignItems:'center',
    },
    girdCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    userDetailsRow: {
        justifyContent:'center',
        alignItems:'center'
    },
    facebookBackground: {
        backgroundColor: StyleConfig.conectratedBlue,
    },
    googleBackground: {
        backgroundColor:StyleConfig.red,
    },
    profileImage: {
        width: StyleConfig.countPixelRatio(100),
        height: StyleConfig.countPixelRatio(100),
        borderRadius: StyleConfig.countPixelRatio(51)
    },
    imageRow: {
        height:WINDOW.height * 0.166,
    },
    imageCol: {
        alignItems:'center',
    },
    backBtnRow: {
        height:WINDOW.height * 0.1,
        marginHorizontal:StyleConfig.getScreenPadding,
    },
    backBtnCol: {
        justifyContent:'flex-end',
        alignItems:'flex-start',
    },
    backBtn:{
        justifyContent:'center',
        alignItems:'flex-start',
        width:StyleConfig.getWidthByColumn(4),
    },
    nameRow: {
        height:WINDOW.height * 0.066,
    },
    nameCol: {
        justifyContent:'flex-start',
        alignItems:'center',
    },
    nameLabel: {
        color:StyleConfig.white,
        letterSpacing:1,
        fontSize: StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamMedium,
    },
    infoLabelRow: {
        height:WINDOW.height * 0.1,
    },
    infoLabelCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    infoLabel: {
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark,
        width:StyleConfig.getWidthByColumn()
    },
    inputRow: {
        height:WINDOW.height * 0.11,
    },
    inputCol: {
        justifyContent:'center',
    },
    termsSubRow:{
        alignItems:'center',
        justifyContent:'center',
    },
    termsRow: {
        height:WINDOW.height * 0.15,
    },
    termsCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    termsButtonRow: {
        marginTop:-WINDOW.height * 0.05,
    },
    termsButtonCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    profileButtonRow: {
        height:WINDOW.height * 0.13,
    },
    profileButtonCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cancelRow: {
        height:StyleConfig.countPixelRatio(69),
    },
    cancelCol: {
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        color:StyleConfig.navyDark,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        fontFamily: StyleConfig.gothamBook,
    },
    labelIcon: {
        marginTop: StyleConfig.countPixelRatio(3),
        width: StyleConfig.countPixelRatio(18),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    },
    termsInfo: {
        marginLeft: StyleConfig.countPixelRatio(15),
        fontFamily: StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeParagraph,
    },
    termsButtonText: {
        fontFamily: StyleConfig.gothamMedium,
        color:StyleConfig.blue,
        letterSpacing:1,
        fontSize: StyleConfig.fontSizeH3,
        marginTop:3,
    },
    termsButton: {
        justifyContent:'center',
        alignItems:'center',
        height: StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.white,
    },
    profileButton: {
        alignItems:'center',
        height:StyleConfig.buttonHeight,
        borderRadius:StyleConfig.buttonHeight,
        borderColor:StyleConfig.white,
        width:StyleConfig.getWidthByColumn()
    },
    profileButtonInvalid: {
        backgroundColor: StyleConfig.navyLight,
    },
    profileButtonValid: {
        backgroundColor: StyleConfig.green,
    },
    profileButtonText: {
        lineHeight:StyleConfig.buttonHeight,
        textAlign:'center',
        backgroundColor:'transparent',
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH3,
        letterSpacing:1,
        color:StyleConfig.white
    },
    cancelText: {
        fontFamily: StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.gray,
        fontSize: StyleConfig.fontSizeH3,
    },
    reduxInfo: {
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:4,
        letterSpacing:1
    }
});
