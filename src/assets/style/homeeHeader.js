/**
 * @providesModule HeaderStyle
 */

import { StyleSheet, Platform } from 'react-native';
import StyleConfig from 'StyleConfig';
import { WINDOW } from 'global';

export default StyleSheet.create({
    header:{
        backgroundColor:StyleConfig.navyMediumDark,
        borderBottomColor: 'transparent',
        height:StyleConfig.homeeHeaderHeight,
    },
    headerLeft:{
        marginLeft:StyleConfig.getScreenPadding/2,
    },
    headerBody:{
        marginRight:StyleConfig.getScreenPadding/2,
        ...(Platform.OS == 'ios') ? {} : {alignItems:'flex-end'}

    },
    logo:{
        height:StyleConfig.countPixelRatio(50),
        width:StyleConfig.countPixelRatio(70),
        resizeMode:'contain',
    },
    notificationView: {
        height:StyleConfig.countPixelRatio(20),
        alignSelf:'center',
        top:StyleConfig.countPixelRatio(WINDOW.height * 0.095),
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:StyleConfig.navyMediumDark,
        width: StyleConfig.getWidthByColumn(2),
        left:WINDOW.width * 0.294,
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
        elevation: 1,

    },
    notificationSubView: {
        backgroundColor:StyleConfig.navyLight,
        height: StyleConfig.countPixelRatio(3),
        width: StyleConfig.getWidthByColumn(4),
    },
    success:{
        color:StyleConfig.green
    },
    danger:{
        color:StyleConfig.red
    },
    notificationText: {
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeParagraph
    }
});