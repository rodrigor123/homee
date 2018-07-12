/**
 * @providesModule CheckboxButtonSmallStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    makeDefaultBtn:{
        borderRadius:StyleConfig.countPixelRatio(25) / 2,
        height:StyleConfig.countPixelRatio(25) / 2,
        width:StyleConfig.countPixelRatio(25) / 2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleConfig.white,
    },
    makeDefaultUncheck:{
        borderColor:StyleConfig.white,
        borderWidth:1
    },
    makeDefaultBtnIcon:{
        fontSize:StyleConfig.fontSizeH3 / 2,
        backgroundColor:'transparent',
    },
    makeDefaultBtnIconCheck:{
        color:StyleConfig.blue,
    },
    makeDefaultBtnIconUncheck:{
        color:'transparent'
    }
});
