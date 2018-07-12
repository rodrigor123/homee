/**
 * @providesModule ReplaceCreditCardStyle
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
    replaceCreditCardLabelRow: {
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    replaceCreditCardLabelCol: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    replaceCreditCardLabel: {
        fontFamily: StyleConfig.gothamMedium,
        color: StyleConfig.white,
        fontSize: StyleConfig.fontSizeH3
    },
    replaceCreditCardLabelDescRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    replaceCreditCardLabelDescCol: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    replaceCreditCardLabelDesc: {
        textAlign:'center',
        fontFamily: StyleConfig.gothamBook,
        color: StyleConfig.white,
        fontSize: StyleConfig.fontSizeParagraph
    },
    cardGrid:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.1),
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
    replaceCardBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.15)
    },
    replaceCardBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    replaceCardBtn: {
        backgroundColor:StyleConfig.green,
    },
    replaceCardBtnDisabled:{
        backgroundColor: StyleConfig.navyLight
    },
    replaceCardBtnTxt:{
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
});
