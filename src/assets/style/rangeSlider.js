/**
 * @providesModule RangeSliderStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig'

export default StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        marginBottom: StyleConfig.countPixelRatio(10),
    },
    title: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontFamily: StyleConfig.gothamMedium,
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeH3,
    },
    sliderLabelRange:{
        marginBottom: StyleConfig.countPixelRatio(15),
        marginTop: StyleConfig.countPixelRatio(10),
    },
    sliderLabelRangeCol:{
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    introText: {
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeParagraph,
    },
    introTextRow:{
        justifyContent:'space-between',
        marginTop:StyleConfig.countPixelRatio(20),
    },
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
        marginBottom:StyleConfig.countPixelRatio(10),
        color:StyleConfig.white,
        fontFamily: StyleConfig.gothamBold,
        fontSize: StyleConfig.fontSizeH3,
    },
    sliderLabelValueCol:{
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    sliderInfoLabel: {
        justifyContent:'space-between',
        marginTop:StyleConfig.countPixelRatio(0),
    },
    sliderMinNumberCol: {
        justifyContent: 'center', alignItems: 'flex-start'
    },
    sliderMinNumber: {
        backgroundColor:'transparent',
        color: StyleConfig.white,
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeParagraph,
        alignItems:'flex-start'
    },
    sliderMaxNumberCol: {
        justifyContent: 'center', alignItems: 'flex-end'
    },
    sliderMaxNumber: {
        backgroundColor:'transparent',
        color: StyleConfig.white,
        fontFamily: StyleConfig.gothamMedium,
        fontSize: StyleConfig.fontSizeParagraph,
        alignItems:'flex-end'
    },
});
