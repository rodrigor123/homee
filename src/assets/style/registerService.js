/**
 * @providesModule RegisterServiceStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    gridRow:{
        justifyContent:'center',
    },
    headerRow: {
        marginTop: StyleConfig.countPixelRatio(25),
    },
    labelService:{
        width: StyleConfig.getWidthByColumn(2),
    },
    dynamicLabelService:{
        letterSpacing:1,
        color:StyleConfig.navyMediumDark,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
        paddingTop: StyleConfig.countPixelRatio(20),
        paddingBottom: StyleConfig.countPixelRatio(10),
    },
    sectionLabel:{
        letterSpacing:1,
        color:StyleConfig.navyMediumDark,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH4,
        paddingVertical: StyleConfig.countPixelRatio(12),
    },
    serviceRow: {
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'red'
    },
    introTextRow: {
        marginTop: StyleConfig.countPixelRatio(13),
    },
    introText: {
        fontFamily:StyleConfig.gothamBook,
        color: StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeParagraph
    },
    servicesRow: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    serviceImageCol: {
        flex: 0,
        width:StyleConfig.getWidthByColumn(4),
        marginVertical: StyleConfig.countPixelRatio(8),
        alignItems:'center'
    },
    serviceImageLabel: {
        textAlign:'center',
        letterSpacing:1,
        color:StyleConfig.navyMediumDark,
        width:StyleConfig.getWidthByColumn(4),
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH4,
        marginVertical: StyleConfig.countPixelRatio(10)
    },
    disable:{
        opacity:0.6,
    },
    sliderRow: {
        borderColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    slider: {
        width: StyleConfig.getWidthByColumn(3),
    },
    sliderTrack:{
        width: StyleConfig.getWidthByColumn(3),
        height:StyleConfig.countPixelRatio(3),
    },
    sliderThumb: {
        height: StyleConfig.countPixelRatio(30),
        width: StyleConfig.countPixelRatio(30),
        backgroundColor:'transparent'
    },
    sliderInfoLabelGrid:{
        justifyContent:'center',
        alignItems:'center'
    },
    sliderLabelValue:{
        marginTop:StyleConfig.countPixelRatio(10),
        color:StyleConfig.blue,
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeH1,
        width: StyleConfig.getWidthByColumn(1),
        textAlign:'center'
    },
    sliderInfoLabel: {
        width: StyleConfig.getWidthByColumn(3),
        marginTop:StyleConfig.countPixelRatio(-5),
        justifyContent:'space-between',
    },
    sliderMinNumber: {
        backgroundColor:'transparent',
        color: StyleConfig.navyMediumLight,
        fontFamily: StyleConfig.gothamMedium,
        marginLeft: StyleConfig.countPixelRatio(11),
        fontSize: StyleConfig.fontSizeParagraph,
    },
    sliderMaxNumber: {
        backgroundColor:'transparent',
        color: StyleConfig.navyMediumLight,
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeParagraph,
    },
    licensingRow: {
        marginTop: StyleConfig.countPixelRatio(20)
    },
    licensingTitleRow: {
        justifyContent:'space-between'
    },
    sideInputInfo: {
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeSubParagraph,
        fontStyle: 'italic',
        marginTop:StyleConfig.countPixelRatio(4),
        letterSpacing:1
    },
    licensesRow: {
        justifyContent:'space-between'
    },
    licenseRowLabel: {
        backgroundColor: StyleConfig.navyDark,
        width: StyleConfig.getWidthByColumn(3),
        marginVertical: StyleConfig.countPixelRatio(5),
    },
    licenseRowLabelTxt: {
        textAlign:'left',
        color:StyleConfig.white,
        marginLeft: StyleConfig.countPixelRatio(12),
    },
    removeIcon:{
        width: StyleConfig.getWidthByColumn(4),
    },
    removeLicenseImage: {
        width: StyleConfig.countPixelRatio(30),
        height: StyleConfig.countPixelRatio(30),
        resizeMode:'contain'
    },
    licensingButton: {
        width: StyleConfig.getWidthByColumn(1),
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    licensingButtonTxt: {
        textAlign:'left',
        color:StyleConfig.blue
    },
    plusIcon: {
        backgroundColor:'transparent',
        alignSelf:'center',
        width: StyleConfig.countPixelRatio(13),
        height: StyleConfig.countPixelRatio(13),
        marginHorizontal: StyleConfig.countPixelRatio(10)
    },
    serviceButtonRow: {
    },
    serviceButton: {
        width: StyleConfig.getWidthByColumn(1),
        borderWidth:1,
        marginBottom:StyleConfig.countPixelRatio(15),
    },
    serviceButtonInvalid: {
        backgroundColor: 'transparent',
        borderColor: StyleConfig.navyLight,
    },
    serviceButtonValid: {
        backgroundColor: 'transparent',
        borderColor: StyleConfig.navyDark,
    },
    serviceButtonTextValid: {
        color:StyleConfig.navyMediumDark,
    },
    serviceButtonTextInvalid: {
        color:StyleConfig.navyLight,
    },
    permissionButton: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:StyleConfig.buttonHeightH1,
        width: StyleConfig.getWidthByColumn(1),
        height: StyleConfig.buttonHeightH1,
        borderWidth:1,
        marginBottom: StyleConfig.countPixelRatio(15),
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
    },
    permissionButtonInvalid: {
        backgroundColor: StyleConfig.navyLight,
        borderColor: StyleConfig.navyLight,
    },
    permissionButtonValid: {
        backgroundColor: StyleConfig.blue,
        borderColor: StyleConfig.blue,
    },
    permissionButtonText: {
        width: StyleConfig.getWidthByColumn(3),
        color:StyleConfig.lightGray,
    },
    permissionNextIcon: {
        color: StyleConfig.lightGray,
        fontSize: StyleConfig.fontSizeH1,
        marginRight: StyleConfig.countPixelRatio(-15)
    },
    cancelCol: {
        alignItems: 'center',
        justifyContent: 'center',
        height:StyleConfig.buttonHeightH1,
        marginBottom: StyleConfig.countPixelRatio(15)
    },
    cancelText: {
        fontFamily: StyleConfig.gothamMedium,
        letterSpacing:1,
        color:StyleConfig.navyMediumLight,
        fontSize: StyleConfig.buttonTextH1
    },
    buttonsRow: {
    },
    addButtonsRow: {
        marginTop: StyleConfig.countPixelRatio(20)
    }
});
