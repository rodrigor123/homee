/**
 * @providesModule ResidentCardStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    card:{
        backgroundColor: StyleConfig.white,
        paddingVertical:StyleConfig.countPixelRatio(10),
    },
    residentProfileImageCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    residentProfileImageCol2:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    residentProfileImageCol3:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    residentProfileImage:{
        width: StyleConfig.getWidthByColumn(6),
        height: StyleConfig.getWidthByColumn(6),
        borderRadius:  StyleConfig.getWidthByColumn(6) / 2,
        resizeMode:'stretch',
        backgroundColor:StyleConfig.blue
    },
    residentProfileSubTxtRow:{
        marginHorizontal:StyleConfig.getScreenPadding,
        width:StyleConfig.getWidthByColumn(3)
    },
    residentProfileSubTxtCol:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    residentProfileTxt:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamMedium,
        letterSpacing:1,
        color:StyleConfig.navyDark
    },
    residentProfileTxt2:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        letterSpacing:1,
        color:StyleConfig.navyDark
    },
    residentProfileTxt3:{
        fontSize:StyleConfig.fontSizeH1,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.navyDark
    },
    menuDotsImage:{
        width: StyleConfig.countPixelRatio(15),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain',
    }
});

