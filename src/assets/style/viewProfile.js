/**
 * @providesModule ViewProfileStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, SCREEN_PADDING, PLACEHOLDER_COLOR } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    grid1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.navyDark,
    },
    grid1Row: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:StyleConfig.getScreenPadding,
        paddingTop:StyleConfig.countPixelRatio(25),
    },
    grid1Col: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    editBtnRow:{
        marginTop:StyleConfig.countPixelRatio(10)
    },
    editBtnCol:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    editBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        backgroundColor:StyleConfig.blue,
        width:StyleConfig.getWidthByColumn(4),
        alignItems:'center',
        borderWidth:1,
        borderColor:"transparent"
    },
    editBtnTxt:{
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        fontSize:StyleConfig.fontSizeH3,
        backgroundColor:'transparent',
        letterSpacing:1
    },
    profileRow:{
        marginTop:StyleConfig.countPixelRatio(10)
    },
    profileCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    profile:{
        width: StyleConfig.getWidthByColumn(2),
        height: StyleConfig.getWidthByColumn(2),
        borderRadius: StyleConfig.getWidthByColumn(2) / 2,
    },
    nameRow:{
        marginTop:StyleConfig.countPixelRatio(20)
    },
    nameCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    name:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamMedium
    },
    ratingRow:{
        marginTop:StyleConfig.countPixelRatio(5)
    },
    ratingCol:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    rating:{
       paddingHorizontal:StyleConfig.countPixelRatio(4)
    },
    otherIconCol:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:StyleConfig.countPixelRatio(15),
    },
    otherIcon:{
        height:StyleConfig.countPixelRatio(13),
        width:StyleConfig.countPixelRatio(13),
        resizeMode:'contain',
    },
    otherLabel:{
        marginLeft:StyleConfig.countPixelRatio(5),
        color:StyleConfig.white,
        fontFamily: StyleConfig.gothamBook,
        fontSize:StyleConfig.fontSizeParagraph,
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
    cardListRow:{
        marginTop:StyleConfig.countPixelRatio(15),
    },
    cardListCol1:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:StyleConfig.getWidthByColumn(2),
    },
    cardListCol2:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:StyleConfig.getWidthByColumn(2)
    },
    titleLabelRow:{
        marginTop:StyleConfig.countPixelRatio(20)
    },
    titleLabelCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    titleLabelCol2:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    titleLabel:{
        color: StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeSubParagraph,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1
    },
    titleLabelSubTxt:{
        fontSize:StyleConfig.fontSizeParagraph,
        backgroundColor:'transparent',
        color:StyleConfig.navyMediumDark,
        fontFamily:StyleConfig.gothamBook
    },
    titleLabelColIcon:{
        color: StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeH3,
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
    promoLabelRow:{
        marginTop:StyleConfig.countPixelRatio(30)
    },
    promoLabelCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    promoLabel:{
        width:StyleConfig.getWidthByColumn(),
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        letterSpacing:1
    },
    input:{
        color:StyleConfig.gray,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
    },
    formInputError: {
        color:StyleConfig.navyMediumDark
    },
    labelInput:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.blue
    },
    reduxInfo: {
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH5,
        fontStyle: 'italic',
        marginTop:StyleConfig.countPixelRatio(4),
        letterSpacing:1
    },
    promoInfoRow:{
        marginTop:StyleConfig.countPixelRatio(15),
    },
    promoInfoCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    promoInfo:{
        width:StyleConfig.getWidthByColumn(),
        fontSize:StyleConfig.fontSizeH4,
        textAlign:'center',
        fontFamily:StyleConfig.gothamBook,
    },
    promoBtn:{
        height:StyleConfig.fontSizeH3,
        borderRadius:StyleConfig.fontSizeH3,
        alignItems:'center',
        width:StyleConfig.getWidthByColumn(4),
        marginBottom:StyleConfig.countPixelRatio(-15)
    },
    promoBtnDisable:{
        backgroundColor:StyleConfig.navyLight,
    },
    promoBtnEnable:{
        backgroundColor:StyleConfig.green,
    },
    promoBtnTxt:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeParagraph,
        lineHeight:StyleConfig.fontSizeH3,
        textAlign:'center',
        backgroundColor:"transparent"

    },
    propertyResidentImageSubRow: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    propertyStatusRow:{
        marginTop:StyleConfig.countPixelRatio(10)
    },
    propertyStatusCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    propertyStatusTxt:{
        color:StyleConfig.black,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        fontSize:StyleConfig.fontSizeH4,
        backgroundColor:'transparent',
        letterSpacing:1
    },
    propertyStatus:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        backgroundColor:StyleConfig.lightGray,
        width:StyleConfig.getWidthByColumn(4),
        alignItems:'center',
        borderWidth:1,
        borderColor:"transparent"
    },
    propertyResidentImageRow:{
        marginTop:StyleConfig.countPixelRatio(10),
    },
    propertyResidentImageCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    propertyResidentImage:{
        // paddingLeft:StyleConfig.countPixelRatio(10),
        // backgroundColor: StyleConfig.orange,
        height:StyleConfig.countPixelRatio(100),
        width:StyleConfig.getWidthByColumn(),
    },
    propertyResidentImageSubCol2:{
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    propertyResidentTitle:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:'transparent',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH2,
        letterSpacing:1,
    },
    propertyResidentAddress:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:'transparent',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH5,
        letterSpacing:1,
        marginBottom:StyleConfig.countPixelRatio(10)
    },
});
