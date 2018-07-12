/**
 * @providesModule AddPropertyStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    content:{
        backgroundColor:StyleConfig.white
    },
    grid:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal:StyleConfig.getScreenPadding,
    },
    propertyImageRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.35)
    },
    propertyImageCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyImage:{
        height:StyleConfig.getWidthByColumn(2),
        width:StyleConfig.getWidthByColumn(2),
        resizeMode:'contain'
    },
    propertyTitleRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    propertyTitleCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyTitle:{
        fontSize:StyleConfig.fontSizeH2,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.navyDark
    },
    propertyDesRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.06)
    },
    propertyDesCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyDes:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyDark
    },
    propertyOwnerBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.2)
    },
    propertyOwnerBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyOwnerBtn:{
        backgroundColor:StyleConfig.navyDark,
    },
    propertyOwnerBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white
    },
    propertyMangerBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.08)
    },
    propertyMangerBtnCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propertyMangerBtn: {
        backgroundColor:StyleConfig.navyDark,
    },
    propertyMangerBtnTxt:{
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
        color:StyleConfig.gray
    }
});
