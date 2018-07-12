/**
 * @providesModule HomeNotificationListStyle
 */

import { StyleSheet,Platform } from 'react-native';
import { WINDOW, } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    sliderGrid: {
        flex:1,
        backgroundColor: StyleConfig.white,
        paddingHorizontal: StyleConfig.getScreenPadding,
       // paddingBottom: StyleConfig.getScreenPadding,
        width: WINDOW.width,
        position:'absolute',
        bottom:0,
        height:'auto'
    },
    toggleRow: {
        flex:0,
        height:100,
    },
    iconView: {
        alignItems:'center',
        width:StyleConfig.getWidthByColumn(1),
    },
    toggleIcon: {
        fontSize:StyleConfig.countPixelRatio(35),
        color:StyleConfig.gray,
        opacity:0.8
    },
    notificationMainGrid: {
        marginBottom:StyleConfig.countPixelRatio(0)
    },
    servicesMainGrid:{
        marginBottom:StyleConfig.countPixelRatio(0),
        marginTop:StyleConfig.countPixelRatio(0)
    },
    titleRow: {
        marginVertical:StyleConfig.countPixelRatio(5),
    },
    titleText: {
        width: StyleConfig.getWidthByColumn(3),
        alignItems:'flex-start',
        justifyContent:'center'
    },
    titleCol:{
        //width: StyleConfig.getWidthByColumn(3),
    },
    titleIconCol:{
        alignItems:'flex-end',
        justifyContent:'center',
    },
    titleIcon:{
        width: StyleConfig.countPixelRatio(50),
        height: StyleConfig.countPixelRatio(50),
        resizeMode:'contain',
        alignItems:'flex-start',
        justifyContent:'center',
        marginBottom:StyleConfig.countPixelRatio(20),
    },
    imageCol: {
        flex:0,
        alignItems:'center',
        justifyContent:'center',
        width:StyleConfig.getWidthByColumn(4),
        marginRight:StyleConfig.scalarSpace,
    },
    imageIcon: {
        width:StyleConfig.countPixelRatio(45),
        height:StyleConfig.countPixelRatio(45),
        resizeMode:'contain'
    },
    descCol: {
        flex:0,
        width:StyleConfig.getWidthByColumn(3)
    },
    descText: {
        fontFamily:StyleConfig.gothamBook,
        fontSize: StyleConfig.fontSizeParagraph,
        color: StyleConfig.navyMediumDark
    },
    emailText: {
        fontFamily:StyleConfig.gothamMedium,
    },
    buttonsRow: {
        alignItems:'center',
        justifyContent:'center'
    },
    switchButtonsRow: {
        marginVertical:StyleConfig.countPixelRatio(5),
        alignItems:'center',
        justifyContent:'flex-end'
    },
    addBankAccountBtn: {
        width: StyleConfig.getWidthByColumn(3),
        backgroundColor:StyleConfig.blue
    },
    listContainer: {
        width: '100%',
    },
    listItem: {
        marginBottom: StyleConfig.countPixelRatio(5)
    },
    dropdownContainerStyle:{
        flex:0,
        flexDirection:'row',
        paddingHorizontal: StyleConfig.countPixelRatio(20)
    },
    imageView: {
        width:'20%'
    },
    listImage:{
        width: StyleConfig.countPixelRatio(40),
        height: StyleConfig.countPixelRatio(40),
        resizeMode:'contain',
        borderRadius: StyleConfig.countPixelRatio(20)
    },
    listTextColumn: {
        width:'80%'
    },
    listTitle: {
        fontSize: StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.navyMediumDark
    },
    listSubTitle: {
        fontSize: StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark
    },
    selectedItem:{
        backgroundColor:StyleConfig.tan
    },
    selectedImage:{
        top: StyleConfig.countPixelRatio(-3),
        borderColor:StyleConfig.blue,
        borderRadius: StyleConfig.countPixelRatio(15),
        borderWidth:StyleConfig.countPixelRatio(3),
        width: StyleConfig.countPixelRatio(30),
        height: StyleConfig.countPixelRatio(30),
        marginLeft: StyleConfig.countPixelRatio(20),
        marginRight: StyleConfig.countPixelRatio(10),
    },
    jobTypeButton: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: StyleConfig.getWidthByColumn(1),
        height: StyleConfig.buttonHeight,
        borderWidth:1,
        marginBottom: StyleConfig.countPixelRatio(0),
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
        backgroundColor:StyleConfig.blue,
    },

    jobTypeButtonInvalid: {
        backgroundColor: StyleConfig.navyLight,
        borderColor: StyleConfig.navyLight,
    },
    jobTypeButtonValid: {
        backgroundColor: StyleConfig.blue,
        borderColor: StyleConfig.blue,
    },
    jobTypeButtonText: {
        width: StyleConfig.getWidthByColumn(3),
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3
    },
    jobTypeNextIcon: {
        color: StyleConfig.navyLight,
        fontSize: StyleConfig.fontSizeH1,
        marginRight: StyleConfig.countPixelRatio(-15)
    },
    jobTypeRow:{
        marginVertical: StyleConfig.countPixelRatio(10),

    },
    locationIcon:{
        width: StyleConfig.countPixelRatio(15),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain',
    },
    inputPlace:{
        backgroundColor:StyleConfig.white,
        height: 44,
        borderTopColor: StyleConfig.white,
        borderBottomColor: StyleConfig.white,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        flexDirection: 'row',
    },
    adjustExperienceBtnRow:{
        marginTop:StyleConfig.countPixelRatio(10),
        marginBottom:StyleConfig.countPixelRatio(10)
    },
    adjustExperienceBtnCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    adjustExperienceBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        borderWidth:2,
        width:StyleConfig.getWidthByColumn(3),
        borderColor:StyleConfig.navyMediumDark,
        alignItems:'center',
    },
    adjustExperienceBtnDisabled:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        borderWidth:2,
        width:StyleConfig.getWidthByColumn(3),
        borderColor:StyleConfig.navyLight,
        alignItems:'center',
        backgroundColor: "transparent",
    },
    adjustExperienceBtnTxt: {
        lineHeight: StyleConfig.buttonHeight2,
        color: StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH3,
        backgroundColor: "transparent",
        fontFamily: StyleConfig.gothamMedium,
        letterSpacing: 1
    },
    adjustExperienceBtnTxtDisabled: {
        lineHeight: StyleConfig.buttonHeight2,
        color: StyleConfig.navyLight,
        fontSize: StyleConfig.fontSizeH3,
        backgroundColor: "transparent",
        fontFamily: StyleConfig.gothamMedium,
        letterSpacing: 1
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
    locationImg:{
        height: 40,
        width: 40,
        zIndex:1,
        position:'absolute',
        left:StyleConfig.countPixelRatio(20)
    },
    favLocationImg:{
        height: 40,
        width: 40,
        zIndex:1,
        position:'absolute',
        left:StyleConfig.countPixelRatio(20)
    },
    jobTypeCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    favLocationCount:{
        backgroundColor:'transparent',
        textAlign:'center',
        marginTop:StyleConfig.countPixelRatio(11),
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.navyMediumLight
    },
    input:{
        width:StyleConfig.getWidthByColumn(1),
        paddingTop:StyleConfig.countPixelRatio(100),
        paddingBottom:StyleConfig.countPixelRatio(20),
    },
    placeholder:{
        color:StyleConfig.placeholderColor
    },
    formInputRow:{
        marginTop:StyleConfig.countPixelRatio(5),
    },
    infoStyle:{
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:StyleConfig.countPixelRatio(4),
        letterSpacing:1
    },
    jobDetailsText: {
        alignItems:'flex-start',
        justifyContent:'space-between',
        //width: StyleConfig.getWidthByColumn(1),
        fontSize: StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark
    },
    diameterCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    diameter:{
        fontSize: StyleConfig.fontSizeH1,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.blue
    },
    diameterInfo:{
        fontSize: StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark
    },
    chargeInfoCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    chargeInfo:{
        paddingTop:StyleConfig.countPixelRatio(5),
        paddingBottom:StyleConfig.countPixelRatio(5),
        fontSize: StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark
    },
    chargePriceCol:{
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    chargePrice:{
        paddingTop:StyleConfig.countPixelRatio(5),
        paddingBottom:StyleConfig.countPixelRatio(5),
        fontSize: StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.navyMediumDark
    },
    addPhotosBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: StyleConfig.getWidthByColumn(3),
        height: StyleConfig.buttonHeight,
        borderWidth:1,
        marginBottom: StyleConfig.countPixelRatio(0),
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
        backgroundColor:StyleConfig.blue,
    },
    removePhotosBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: StyleConfig.getWidthByColumn(3),
        height: StyleConfig.buttonHeight,
        borderWidth:1,
        marginBottom: StyleConfig.countPixelRatio(0),
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
        backgroundColor:StyleConfig.blue,
    },
    addPhotosCol: {
        alignItems:'center',
        justifyContent:'center',
        width: StyleConfig.getWidthByColumn(2),
    },
    removePhotosCol: {
        alignItems:'center',
        justifyContent:'center',
        width: StyleConfig.getWidthByColumn(2),
    },
    addBtnRow:{
        marginTop:StyleConfig.countPixelRatio(15),
    },
    addBtnCol:{
        justifyContent:'center',
        alignItems:'flex-start',
        marginBottom:StyleConfig.countPixelRatio(15),
    },
    addBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.white,
    },
    addBtnTxt:{
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    removeBtnTxt:{
        color:StyleConfig.red,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    removeBtnCol:{
        justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:StyleConfig.countPixelRatio(15),
    },
    removeBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.white,
    },
    addBtnPlusRow:{
        height:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(2),
        justifyContent:'center',
        alignItems:'flex-start',
        borderWidth:1,
        borderColor:"transparent"
    },
    removeBtnPlusRow:{
        height:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(2),
        justifyContent:'center',
        borderWidth:1,
        borderColor:"transparent"
    },
});
