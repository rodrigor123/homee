/**
 * @providesModule ViewPropertyDetailsStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    grid1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.white,
    },
    grid1Row: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid1Col: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    residentCardGrid:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.white,
        marginHorizontal: StyleConfig.getScreenPadding,
        marginTop:StyleConfig.countPixelRatio(10)
    },
    grid2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.white,
        marginHorizontal: StyleConfig.getScreenPadding,
    },
    grid2Row: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid2Col: {
        marginHorizontal: StyleConfig.getScreenPadding,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StyleConfig.white,
        marginHorizontal: StyleConfig.getScreenPadding,
    },
    labelRow:{
        marginVertical:StyleConfig.countPixelRatio(10)
    },
    labelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    labelViewTxt2:{
        width:StyleConfig.getWidthByColumn(2),
        alignItems:'flex-start',
        paddingLeft:StyleConfig.countPixelRatio(10)
    },
    titleLabelRow:{
        marginTop:StyleConfig.countPixelRatio(10)
    },
    titleLabelCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    titleLabel:{
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeSubParagraph,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1
    },
    mainContainer:{
        backgroundColor: StyleConfig.white,
    },
    featuresDescription:{
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        fontSize:StyleConfig.fontSizeH3,
    },
   noteLabelRow:{
        marginTop:StyleConfig.countPixelRatio(10),
    },
    noteDescription: {
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
    },
    blueImage:{
        alignItems:'center',
        width:StyleConfig.countPixelRatio(50),
        height:StyleConfig.countPixelRatio(50),
        backgroundColor:StyleConfig.blue,
        borderRadius:StyleConfig.countPixelRatio(50),
    },
    blueImageCol:{
        justifyContent:'center',
        alignItems:'flex-start',
        borderWidth:2
    },
    image:{
        alignItems:'flex-start',
        width:StyleConfig.countPixelRatio(50),
        height:StyleConfig.countPixelRatio(50),
        borderRadius:StyleConfig.countPixelRatio(50),
    },
    priceCol:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingRight: StyleConfig.countPixelRatio(50),
        paddingTop: StyleConfig.countPixelRatio(10),
    },
    cardTitle:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
        fontSize:StyleConfig.fontSizeSubParagraph,
        fontFamily:StyleConfig.gothamBold,
        letterSpacing:1,
    },
    cardDate:{
        marginRight:StyleConfig.countPixelRatio(10),
        fontSize:StyleConfig.fontSizeSubParagraph,
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    cardTitleCol:{
        width:StyleConfig.getWidthByColumn(4),
    },
    cardTitleSubRow:{
        width:StyleConfig.getWidthByColumn(2)
    },
    cardTitleSubCol1:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    cardTitleSubCol2:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    cardDateCol:{
        width:StyleConfig.getWidthByColumn(4),
    },
    actionImage:{
        marginTop:StyleConfig.countPixelRatio(5),
        width:StyleConfig.countPixelRatio(30),
        height:StyleConfig.countPixelRatio(30),
        resizeMode:'contain'
    },
    actionCol:{
        alignItems:'center',
        justifyContent:'center',
        paddingRight:StyleConfig.countPixelRatio(10),
    },
    jobAction:{
        width:StyleConfig.countPixelRatio(30),
        height:StyleConfig.countPixelRatio(30),
        resizeMode:'contain',
    },
    jobRate:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.blue,
        width:StyleConfig.countPixelRatio(100)
    },
    mainCardRow:{
        borderTopColor:StyleConfig.blue,
    },
    viewHistory:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBold,
        color:StyleConfig.blue
    },
    cardItem:{
        paddingHorizontal: StyleConfig.getScreenPadding,
        borderTopWidth:1,
        borderTopColor:StyleConfig.blue,
        paddingRight:0,
    },
    cardBodyRow: {
        width:StyleConfig.getWidthByColumn(),
        marginTop:StyleConfig.countPixelRatio(5),
        marginBottom:StyleConfig.countPixelRatio(5),
        justifyContent:'space-between',
    },
    cardBodyCol:{
        justifyContent:'center',
        alignItems:'center',
    },
    viewHistoryCol:{
        justifyContent:'center',
        alignItems:'flex-end',
    },
    viewHistoryIcon:{
       fontSize:StyleConfig.fontSizeH3,
    },
    propertySubCol:{
        alignItems:'flex-end'
    },
    propertyImageCol:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    propertyOwerIcon:{
        width: StyleConfig.getWidthByColumn(6),
        height: StyleConfig.getWidthByColumn(6),
        resizeMode:'contain'
    },
    residentCardRow:{
        marginVertical: StyleConfig.countPixelRatio(10),
    }
});