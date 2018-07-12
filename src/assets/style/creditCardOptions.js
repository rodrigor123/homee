/**
 * @providesModule CreditCardOptionsStyle
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
    creditCardLabelRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    creditCardLabelCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    creditCardLabel:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3
    },
    creditCardRow:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.1),
    },
    replaceCardBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.16)
    },
    removeCardBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08)
    },
    cardBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    replaceCardBtn: {
        backgroundColor:StyleConfig.blue,
    },
    removeCardBtn: {
        backgroundColor:StyleConfig.red,
    },
    cardBtnDisabled:{
        backgroundColor: StyleConfig.navyLight
    },
    cardBtnTxt:{
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