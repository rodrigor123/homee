/**
 * @providesModule ResidentListStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';
const btnSize = 11;
export default StyleSheet.create({
    content: {
        backgroundColor: StyleConfig.white,
    },
    residentTitleTxtRow:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.05)
    },
    residentTitleTxtCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    residentTitleTxt:{
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeH3
    },
    residentSubTitleTxtRow:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.01)
    },
    residentSubTitleTxtCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    residentSubTitleTxt:{
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeH4
    },
    titleLabelRow:{
        marginTop:StyleConfig.countPixelRatio(25)
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
        fontSize:StyleConfig.fontSizeSubParagraph,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.navyDark
    },
    editBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        backgroundColor:StyleConfig.blue,
        width:StyleConfig.getWidthByColumn(4),
        borderWidth:1,
        borderColor:"transparent"
    },
    editBtnTxt:{
        color:StyleConfig.white,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        fontSize:StyleConfig.fontSizeH3,
    },
    removeGroupBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        backgroundColor:StyleConfig.red,
        width:StyleConfig.getWidthByColumn(2),
        borderWidth:1,
        borderColor:"transparent"
    },
    removeGroupBtnTxt:{
        color:StyleConfig.white,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        fontSize:StyleConfig.fontSizeH3,
    },
    removeBtnTxt:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamMedium
    },
    residentListRow:{
        marginTop:StyleConfig.countPixelRatio(WINDOW.height * 0.04)
    },
    swiperRow1:{
        width:StyleConfig.getWidthByColumn()
    },
    swiperRow2:{
        width:StyleConfig.getWidthByColumn() + (StyleConfig.getWidthByColumn(4) / 2)
    },
    swiperCol1:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    swiperCol2:{
        justifyContent:'center',
    },
    swiperBtnOption:{
        height:StyleConfig.countPixelRatio(80),
        width:StyleConfig.countPixelRatio(80),
        borderWidth:1,
        backgroundColor:StyleConfig.red
    },
    swiper:{
        marginVertical:StyleConfig.countPixelRatio(5)
    },
    removeMultiRoundSelectedIcon:{
        fontSize:StyleConfig.countPixelRatio(btnSize),
        color:StyleConfig.red
    },
    removeMultiRoundSelectedIconBtn:{
        borderWidth:1,
        borderColor:StyleConfig.navyLight,
        borderRadius:StyleConfig.countPixelRatio(btnSize),
        height:StyleConfig.countPixelRatio(btnSize),
        width:StyleConfig.countPixelRatio(btnSize),
        justifyContent:'center',
        alignItems:'center',
    },
    removeMultiRoundSelectedBtn:{
        borderColor:StyleConfig.navyLight,
        borderRadius:StyleConfig.countPixelRatio(btnSize),
        height:StyleConfig.countPixelRatio(btnSize),
        width:StyleConfig.countPixelRatio(btnSize),
        justifyContent:'center',
        alignItems:'center',
    }
});
