/**
 * @providesModule PropertyCardStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    propertyImageRow:{
        marginTop:StyleConfig.countPixelRatio(10),
    },
    propertyImageCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    propertyImage:{
        height:StyleConfig.countPixelRatio(100),
        width:StyleConfig.getWidthByColumn(),
    },
    propertyImageSubRow: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    propertyImageSubCol2:{
        alignItems:'flex-start',
        justifyContent:'flex-end'
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
        marginTop:StyleConfig.countPixelRatio(5),
        marginBottom:StyleConfig.countPixelRatio(10)
    },
    propertyManagedBtn:{
        borderRadius:StyleConfig.countPixelRatio(20),
        height:StyleConfig.countPixelRatio(15),
        backgroundColor:StyleConfig.white,
        width:StyleConfig.countPixelRatio(55),
        alignItems:'center',
        marginBottom:StyleConfig.countPixelRatio(20)
    },
    propertyManagedLabel:{
        lineHeight:StyleConfig.countPixelRatio(15),
        backgroundColor:'transparent',
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeH4,
        fontFamily:StyleConfig.gothamMedium,
        textAlign:'center'
    }
});
