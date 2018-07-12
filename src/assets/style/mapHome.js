/**
 * @providesModule MapHomeStyle
 */

import { StyleSheet } from 'react-native';
import StyleConfig from 'StyleConfig';
import { WINDOW } from "../../common/global";

export default StyleSheet.create({
    gridCol:{
        alignItems:'center',
        justifyContent:'center',
    },
    mapViewCol:{
        alignItems:'center',
        justifyContent:'center',
    },
    mapView:{
        height:WINDOW.height-StyleConfig.platformPadding,
        width:WINDOW.width
    },
    loginBtnRow:{
        flex: 1,
        position: 'absolute',
        bottom:StyleConfig.countPixelRatio(70),
        width: WINDOW.width,
        zIndex: 99
    },
    loginBtnCol:{
        alignItems:'center',
        justifyContent:'center',
    },
    loginBtn:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:StyleConfig.blue
    },
    loginBtnTxt:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3
    },
    signupBtnRow:{
        flex: 1,
        position: 'absolute',
        bottom:StyleConfig.countPixelRatio(20),
        width: WINDOW.width,
        zIndex: 99
    },
    signupBtnCol:{
        alignItems:'center',
        justifyContent:'center',
    },
    signupBtn:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:StyleConfig.white
    },
    signupBtnTxt:{
        color:StyleConfig.navyMediumDark,
        fontSize:StyleConfig.fontSizeH3
    }
});
