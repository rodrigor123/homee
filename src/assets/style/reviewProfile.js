/**
 * @providesModule ReviewProfileStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW, deviceType } from 'global';
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
    reviewLabelRow:{
        height:StyleConfig.countPixelRatio(130)
    },
    reviewLabelCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    reviewLabel:{
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1,
        width: '100%',
        textAlign:'center'
    },
    reviewProfileRow:{
        height:StyleConfig.getWidthByColumn(2),
        marginTop:StyleConfig.countPixelRatio(-25),
    },
    reviewProfileCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    reviewProfile:{
        width: StyleConfig.getWidthByColumn(2),
        height: StyleConfig.getWidthByColumn(2),
        borderRadius: StyleConfig.getWidthByColumn(2) / 2,
        resizeMode:'stretch'
    },
    changeProfileBtnRow:{
        height:StyleConfig.countPixelRatio(55)
    },
    changeProfileBtnCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    changeProfileBtn:{
        height: StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        backgroundColor:StyleConfig.white,
        width:StyleConfig.getWidthByColumn(2)
    },
    changeProfileBtnIcon:{
        height:"100%",
        width:StyleConfig.countPixelRatio(20),
        resizeMode:'contain',
    },
    changeProfileBtnLabel:{
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        marginLeft:StyleConfig.countPixelRatio(-8),
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeH3,
        letterSpacing:1,
        backgroundColor:'transparent',
    },
    profileBtnIconCol: {
        flex:0.6,
        alignItems:'center',
        justifyContent:'center'
    },
    profileBtnTxtCol: {
        flex:2.2,
        alignItems:'center',
    },
    reviewProfileEmailRow:{
        height:StyleConfig.countPixelRatio(50),
    },
    reviewProfileEmailCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    reviewProfileEmailLabel:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH2,
        letterSpacing:1,
        width:StyleConfig.getWidthByColumn(),
        textAlign:'center'
    },
    reviewProfileOtherDetaillRow:{
        height:StyleConfig.countPixelRatio(25),
    },
    reviewProfileOtherDetaillCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    reviewProfileOtherDetaillLabel:{
        lineHeight:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.tan,
        fontSize:StyleConfig.fontSizeParagraph,
        paddingLeft:StyleConfig.countPixelRatio(15),
        letterSpacing:1,
        width:StyleConfig.getWidthByColumn(),
        textAlign:'center'
    },
    reviewProfileOtherDetaillImg:{
        width:StyleConfig.countPixelRatio(10),
        resizeMode:'contain',
    },
    reviewProfileBtnRow:{
        height:StyleConfig.countPixelRatio((deviceType =='tablet') ? 60 : 140)
    },
    reviewProfileBtnCol:{
        alignItems:'center',
        justifyContent:'flex-end',
    },
    reviewProfileBtn:{
        justifyContent:'center',
        alignItems:'center',
        height: StyleConfig.buttonHeight,
        backgroundColor:StyleConfig.green,
        width:StyleConfig.getWidthByColumn(),
        borderRadius:StyleConfig.buttonHeight,
    },
    reviewProfileBtnLabel:{
        color:StyleConfig.white,
        letterSpacing:1,
        fontSize:((WINDOW.width + WINDOW.height) * 0.014),
        fontFamily:StyleConfig.gothamMedium,
        marginTop:StyleConfig.countPixelRatio(4)
    }
});
