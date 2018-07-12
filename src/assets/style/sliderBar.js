/**
 * @providesModule SliderBarStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    sliderBarRow:{
        width: StyleConfig.getWidthByColumn(),
    },
    sliderBarCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    sliderRow: {
        borderColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    slider: {
        width: StyleConfig.getWidthByColumn(3),
    },
    sliderTrack:{
        width: StyleConfig.getWidthByColumn(3),
        height:StyleConfig.countPixelRatio(3),
    },
    sliderThumb: {
        height: StyleConfig.countPixelRatio(30),
        width: StyleConfig.countPixelRatio(30),
        backgroundColor:'transparent'
    },
    sliderInfoLabelGrid:{
        justifyContent:'center',
        alignItems:'center'
    },
    sliderLabelValue:{
        marginTop:StyleConfig.countPixelRatio(10),
        color:StyleConfig.blue,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH1,
        width: StyleConfig.getWidthByColumn(3)
    },
    sliderInfoLabel: {
        width: StyleConfig.getWidthByColumn(3),
        marginTop:StyleConfig.countPixelRatio(-5),
        justifyContent:'space-between',
    },
    sliderMinNumber: {
        backgroundColor:'transparent',
        color: StyleConfig.navyMediumLight,
        fontFamily: StyleConfig.gothamMedium,
        marginLeft: StyleConfig.countPixelRatio(11),
        fontSize: StyleConfig.fontSizeParagraph,
    },
    sliderMaxNumber: {
        backgroundColor:'transparent',
        color: StyleConfig.navyMediumLight,
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeParagraph,
    },

});
