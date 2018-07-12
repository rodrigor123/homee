/**
 * @providesModule PropertyProfileCardStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    editBtnRow:{
        paddingRight:StyleConfig.getScreenPadding,
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingTop:StyleConfig.countPixelRatio(10),
    },
    editBtnCol:{
        alignItems:'flex-end'
    },
    editBtn:{
        height:StyleConfig.buttonHeight2,
        borderRadius:StyleConfig.buttonHeight2,
        backgroundColor:StyleConfig.blue,
        width:StyleConfig.getWidthByColumn(4),
        borderWidth:1,
        borderColor:"transparent"
    },
    editBtnTxt:{
        color:StyleConfig.white,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        fontSize:StyleConfig.fontSizeH3,
    },
    propertyImage:{
        height:StyleConfig.getWidthByColumn(3),
        width:WINDOW.width,
    },
    propertyImageSubRow: {
        paddingLeft: StyleConfig.getScreenPadding,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    propertyImageSubCol2:{
        alignItems:'flex-start',
        justifyContent:'flex-end',
        marginBottom:StyleConfig.countPixelRatio(10)
    },
    propertyTitle:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:'transparent',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH2,
        letterSpacing:1,
    },
    propertyAddress:{
        width:StyleConfig.getWidthByColumn(),
        backgroundColor:'transparent',
        color:StyleConfig.white,
        fontFamily:StyleConfig.gothamBold,
        fontSize:StyleConfig.fontSizeH5,
        letterSpacing:1,
        marginBottom:StyleConfig.countPixelRatio(10)
    }
});
