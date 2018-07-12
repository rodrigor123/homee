/**
 * @providesModule ImageViewerStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({

    modalRotate: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position:'absolute',
        margin:0,
        top:0,
        right:0,
        left:0,
        bottom:0,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeRotate: {
        height:'100%',
        width:'100%',
    },
    size:{
        height: WINDOW.height,
        width: WINDOW.width,
    },
    heightRotate:{
        height:'100%',
    },
    height:{
        height: WINDOW.height
    },
    widthRotate:{
        width:'100%',
    },
    width:{
        width: WINDOW.width
    },
    container: {
        position:'absolute',
        backgroundColor: StyleConfig.black,
        borderColor: StyleConfig.black,
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1.2,
    },
    swiperRotate:{
        height:'100%',
    },
    swiper:{
        height:WINDOW.height,
    },
    sliderView:{
        alignItems:'center',
        justifyContent:'center',
        height:WINDOW.height,
        width:'100%',
    },
    sliderImage:{
        height:StyleConfig.countPixelRatio(200),
        width:WINDOW.width,
        backgroundColor: 'transparent'
    },
    sliderImageRotate:{
        height:'100%',
        width:'100%',
        backgroundColor: 'transparent'
    },
    nextIcon: {
        fontSize:StyleConfig.countPixelRatio(40),
        color:StyleConfig.white
    },
    prevIcon: {
        fontSize:StyleConfig.countPixelRatio(40),
        color:StyleConfig.white
    },
    closeButton: {
        backgroundColor:'transparent',
        position:'absolute',
        zIndex:9999,
        top:StyleConfig.countPixelRatio(20),
        right:StyleConfig.countPixelRatio(10),
        alignSelf:'flex-end'
    },
    closeIcon: {
        fontSize:StyleConfig.countPixelRatio(30),
        color:StyleConfig.white
    }
});
