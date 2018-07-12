/**
 * @providesModule JobRequestStyle
 */

import { StyleSheet,Platform } from 'react-native';
import { WINDOW, } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({

    content:{
        backgroundColor:StyleConfig.white
    },
    serviceTypeIconRow:{
        marginTop:StyleConfig.countPixelRatio(15),
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1),
        width:StyleConfig.getWidthByColumn(),
    },
    serviceTypeIconCol1:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    serviceTypeIconCol2:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    serviceTypeIcon:{
        height:StyleConfig.getWidthByColumn(9),
        width:StyleConfig.getWidthByColumn(8),
        resizeMode:'contain'
    },
    serviceTypeLabel:{
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH3,
        color:StyleConfig.navyDark
    },
    swiper:{
        height:StyleConfig.countPixelRatio(180),
    },
    sliderView:{
        zIndex:99999,
        height:'100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderImage:{
        flex: 1,
        height:100,
        width:'100%',
        backgroundColor: 'transparent'
    },
    titleLabelRow:{
        marginTop:StyleConfig.countPixelRatio(25)
    },
    titleLabelCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    titleLabel:{
        color: StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeSubParagraph,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1
    },
    propDetailTxt:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyDark
    },
    redioButtonRow:{
        width:StyleConfig.getWidthByColumn(2)
    },
    redioButtonCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    choiceBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.2)
    },
    choiceBtnCol1:{
        alignItems:'flex-start',
        justifyContent:'flex-end'
    },
    choiceBtnCol2:{
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    declineBtn:{
        backgroundColor:StyleConfig.red,
    },
    acceptBtn:{
        backgroundColor:StyleConfig.green,
    },
    acceptBtnDisable:{
        backgroundColor:StyleConfig.navyLight,
    },
    choiceBtnTxt:{
        textAlign:'center',
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        lineHeight:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        color:StyleConfig.white,
        letterSpacing:1
    },
    choiceBtn:{
        width:StyleConfig.getWidthByColumn(2),
        height:StyleConfig.buttonHeight,
        borderRadius:StyleConfig.buttonHeight,
        alignItems:'center',
        borderWidth:1,
        borderColor:'transparent'
    },
    sendBtn:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:StyleConfig.blue,
    },
    sendBtnDisabled:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:StyleConfig.navyLight,
    },
    dismissBtnRow:{
        height:StyleConfig.countPixelRatio(45)
    },
    dismissBtnCol:{
        alignItems:'center',
        justifyContent:'flex-end'
    },
    dismissBtn:{
        height:StyleConfig.buttonHeight,
        borderRadius:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        alignItems:'center',
        borderWidth:1,
        borderColor:'transparent'
    },
    dismissBtnTxt:{
        textAlign:'center',
        fontFamily:StyleConfig.gothamMedium,
        fontSize:StyleConfig.fontSizeH3,
        lineHeight:StyleConfig.buttonHeight,
        backgroundColor:'transparent',
        color:StyleConfig.navyLight,
        letterSpacing:1
    },
    sliderRow:{
        marginTop:StyleConfig.countPixelRatio(5),
        width:StyleConfig.getWidthByColumn(),
    },
    sliderCol:{
        alignItems:'center',
        justifyContent:'center'
    },
    consumerRequestDescRow:{
        marginTop:StyleConfig.countPixelRatio(8),
        width:StyleConfig.getWidthByColumn(),
    },
    consumerRequestDescCol:{
        alignItems:'flex-start',
        justifyContent:'center'
    },
    formInputRow:{
        marginTop:StyleConfig.countPixelRatio(5),
    },
    input:{
        width:StyleConfig.getWidthByColumn(1),
        paddingTop:StyleConfig.countPixelRatio(120),
        paddingBottom:StyleConfig.countPixelRatio(30),
    },
    infoStyle:{
        color:StyleConfig.navyMediumDark,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:StyleConfig.countPixelRatio(4),
        letterSpacing:1
    },

});
