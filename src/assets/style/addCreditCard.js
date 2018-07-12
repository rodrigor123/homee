/**
 * @providesModule AddCreditCardStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    gridRow: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    girdCol: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCreditCardLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    addCreditCardLabelCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    addCreditCardLabel:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3
    },
    addCreditCardLabelSuccess:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.green,
        fontSize:StyleConfig.fontSizeH2
    },
    scanCardBtnRow:{
        height:StyleConfig.buttonHeight2,
        justifyContent:'center',
        borderWidth:1,
        borderColor:"transparent",
    },
    scanCardBtnCol1:{
        alignItems:'center',
        justifyContent:'center'
    },
    scanCardBtnCol2:{
        alignItems:'flex-start',
    },
    scanCardBtnIcon:{
        fontSize:StyleConfig.fontSizeH3,
        color:StyleConfig.white,
        backgroundColor:'transparent',
    },
    scanCardBtn:{
        backgroundColor:StyleConfig.blue,
        height:StyleConfig.buttonHeight2,
        alignItems:'flex-start',
    },
    scanCardBtnTxt:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        backgroundColor:'transparent'
    },
    creditCardRow:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.15)
    },
    creditCardCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    cardGrid:{
        backgroundColor:StyleConfig.white,
        borderRadius:StyleConfig.countPixelRatio(8)
    },
    cardRow:{
        height:StyleConfig.countPixelRatio(170),
        width:StyleConfig.getWidthByColumn(),
    },
    cardCol:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:StyleConfig.countPixelRatio(13),
        paddingVertical:StyleConfig.countPixelRatio(13)
    },
    cardImageRow:{
    },
    cardImageCol:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    goodLabelCol:{
        alignItems:'center',
        justifyContent:'center',
    },
    cardImageCol2:{
        alignItems:'flex-end',
        marginTop:-20
    },
    cardImage:{
        height:StyleConfig.countPixelRatio(35),
        width:StyleConfig.countPixelRatio(60),
        backgroundColor:StyleConfig.navyLight,
        borderRadius:StyleConfig.countPixelRatio(5),
    },
    goodLabel:{
        color:StyleConfig.navyMediumDark,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamBook
    },
    formInputRow:{
        marginTop:StyleConfig.countPixelRatio(-20),
    },
    formInput:{
        height:StyleConfig.countPixelRatio(40),
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        letterSpacing:1,
    },
    labelInput:{
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1,
    },
    errorLabelInput:{
        color:StyleConfig.red,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1,
    },
    cvc:{
        paddingLeft:StyleConfig.countPixelRatio(12)
    },
    selectItemText: {
        fontFamily: StyleConfig.gothamBook
    },
    yearContainer: {
        width:StyleConfig.countPixelRatio(60),
    },
    pickerContainer: {
        marginTop: StyleConfig.countPixelRatio(-50),
    },
    saveCardBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.25)
    },
    saveCardBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    saveCardBtn: {
        backgroundColor:StyleConfig.green,
    },
    saveCardBtnDisabled:{
        backgroundColor: StyleConfig.navyLight
    },
    saveCardBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08) - StyleConfig.platformPadding
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
    justAnFyiLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.4),
    },
    justAnFyiLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    justAnFyiLabel:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH2
    },
    justAnFyiDescLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.09),
    },
    justAnFyiDescLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    justAnFyiDescLabel:{
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeParagraph
    },
    continueBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.3)
    },
    continueBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    continueBtn: {
        backgroundColor:StyleConfig.green,
    },
    continueBtnDisabled:{
        backgroundColor: StyleConfig.navyLight
    },
    continueBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    neverMindBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08) - StyleConfig.platformPadding
    },
    neverMindBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    neverMindBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.navyMediumLight
    },

});
