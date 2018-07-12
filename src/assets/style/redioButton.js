/**
 * @providesModule RedioButtonStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

const borderWidth = 2
const btnSize = (22 - borderWidth);
const btnSelectedSize = (15 - borderWidth);
export default StyleSheet.create({
    redioBtnRow:{
        // width:StyleConfig.getWidthByColumn()
    },
    redioBtnCol1:{
        alignItems:'flex-end',
        justifyContent:'center',
        paddingHorizontal:StyleConfig.countPixelRatio(5),
    },
    redioBtnCol2:{
        alignItems:'flex-start',
        justifyContent:'center',
    },
    redioBtn:{
        borderWidth:borderWidth,
        borderColor:StyleConfig.navyLight,
        borderRadius:StyleConfig.countPixelRatio(btnSize),
        height:StyleConfig.countPixelRatio(btnSize),
        width:StyleConfig.countPixelRatio(btnSize),
        justifyContent:'center',
        alignItems:'center',
    },
    redioBtnLabel:{
        borderRadius:StyleConfig.countPixelRatio(btnSelectedSize),
        height:StyleConfig.countPixelRatio(btnSelectedSize),
        width:StyleConfig.countPixelRatio(btnSelectedSize),
        borderColor:StyleConfig.gray,
    },
    redioBtnSelected:{
        backgroundColor:StyleConfig.blue,
    },
    redioBtnDeselected:{
        backgroundColor:'transparent',
    },
    redioBtnLabelTxt:{
        marginTop:StyleConfig.countPixelRatio(5),
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook
    },
    redioBtnLabelTxtSelected:{
        color:StyleConfig.navyMediumDark,
    },
    redioBtnLabelTxtDeselected:{
        color:StyleConfig.navyMediumLight,
    },
    makeBtnIcon:{
        backgroundColor:'transparent'
    },
    makeBtnIconCheck:{
        color:StyleConfig.blue,
    },
    makeBtnIconUncheck:{
        color:'transparent',
    },
});
