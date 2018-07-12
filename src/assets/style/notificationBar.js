/**
 * @providesModule NotificationBarStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    notificationBarRow:{
        left:StyleConfig.countPixelRatio(WINDOW.width / 2),
        position:'absolute',
        zIndex:9999,
        top:StyleConfig.countPixelRatio(65),
    },
    notificationBarCol:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.navyDark
    },
    notificationBarRowLabel:{
        width:StyleConfig.getWidthByColumn(2),
        height:StyleConfig.countPixelRatio(20),
        backgroundColor: StyleConfig.navyMediumDark,
        borderBottomLeftRadius:StyleConfig.countPixelRatio(4),
        borderBottomRightRadius:StyleConfig.countPixelRatio(4),
    },
    notificationBarColLabel:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationBarLabel:{
        position:'absolute',
        zIndex:99999,
        backgroundColor:StyleConfig.navyLight,
        width:StyleConfig.getWidthByColumn(4),
        height:StyleConfig.countPixelRatio(2),
        borderBottomLeftRadius:StyleConfig.countPixelRatio(4),
        borderBottomRightRadius:StyleConfig.countPixelRatio(4),
    },
})

