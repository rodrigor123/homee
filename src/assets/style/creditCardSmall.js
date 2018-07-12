/**
 * @providesModule CreditCardSmallStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    verifiedCardGrid:{
        height:StyleConfig.countPixelRatio(170) / 2,
        width:StyleConfig.getWidthByColumn(2),
        backgroundColor:StyleConfig.conectratedBlue,
        borderRadius:StyleConfig.countPixelRatio(8) / 2
    },
    verifiedCardCol:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:StyleConfig.countPixelRatio(20) / 2,
        paddingVertical:StyleConfig.countPixelRatio(20) / 2
    },
    verifiedCardImageCol1:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    verifiedCardImageCol2:{
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    cardImage:{
        height:StyleConfig.countPixelRatio(35) / 2,
        width:StyleConfig.countPixelRatio(60) / 2,
        backgroundColor:StyleConfig.navyLight,
        borderRadius:StyleConfig.countPixelRatio(5) / 2
    },
    defaultTxt:{
        marginTop:StyleConfig.countPixelRatio(5) / 2,
        fontSize:StyleConfig.fontSizeH4 / 2,
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamMedium
    },
    verifiedCardNumberCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    verifiedCardNumber:{
        fontSize:StyleConfig.fontSizeH1 / 2,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    verifiedCardNameCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    verifiedCardName:{
        fontSize:StyleConfig.fontSizeH4 / 2,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    verifiedCardDateCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    verifiedCardDate:{
        fontSize:StyleConfig.fontSizeH4 / 2,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    verifiedCardGoodTxt:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    verifiedCardOverlay:{
        top:0,
        position:'absolute',
        elevation:1,
    },
    verifiedCardOverlayImage:{

        width:StyleConfig.getWidthByColumn(4),
        height:StyleConfig.countPixelRatio(170) / 2,
        borderRadius:StyleConfig.countPixelRatio(8) / 2,
    }

});



