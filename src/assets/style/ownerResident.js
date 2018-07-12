/**
 * @providesModule OwnerResidentStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    grid1:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleConfig.navyMediumDark,
    },
    grid1Row:{
        marginHorizontal:StyleConfig.getScreenPadding,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:StyleConfig.countPixelRatio(20)
    },
    grid1Col:{
        alignItems:'center',
        justifyContent:'center'
    },
    grid2:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleConfig.white,
    },
    grid2Row:{
        marginHorizontal:StyleConfig.getScreenPadding,
        alignItems:'center',
        justifyContent:'center',
    },
    grid2Col:{
        alignItems:'center',
        justifyContent:'center'
    },
    editLabelRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    editLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    editLabel:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyMediumDark
    },
    labelRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    labelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    labelViewTxt2:{
        width:StyleConfig.getWidthByColumn(3),
        alignItems:'flex-start',
        paddingLeft:StyleConfig.countPixelRatio(10)
    },
    propertyNameRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    input:{
        color:StyleConfig.black,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
    },
    inputWhite:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamBook,
    },
    formInputError: {
        color:StyleConfig.navyLight
    },
    formFieldIcon:{
        width: StyleConfig.countPixelRatio(15),
        height: StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    },
    addressRow:{
        // height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    addressLabelRow:{
        marginTop:StyleConfig.countPixelRatio(-21),
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width:StyleConfig.getWidthByColumn(),
    },
    addressLabelCol:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    addressLabelCol2:{
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    unitRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    noteRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    propDetailRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    propDetailCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propDetailTxt:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.navyDark
    },
    numberResidentCol:{
        justifyContent:'center',
        alignItems:'center'
    },
    titleLabelRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    titleLabelCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    titleLabelTxt:{
        backgroundColor:StyleConfig.white,
        width:StyleConfig.getWidthByColumn(3),
        shadowOpacity:0,
        alignItems:'flex-start'
    },
    titleLabelSubTxt:{
        color:StyleConfig.navyDark,
    },
    addPhotoBtnRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    addPhotoBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    imageBtnCol1:{
        justifyContent:'center',
        flex:StyleConfig.countPixelRatio(0.4)
    },
    imageBtnCol2:{
        flex:0
    },
    addPhotoBtn:{
        height:StyleConfig.buttonHeight2,
        width:StyleConfig.getWidthByColumn(3)
    },
    addPhotoBtnTxt:{
        lineHeight:StyleConfig.buttonHeight2,
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeParagraph,
    },
    propsTypeRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.14)
    },
    propsTypeCol:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    propsTypeLabel:{
        fontSize:StyleConfig.fontSizeH4,
        fontWeight:"bold"
    },
    photoRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.4)
    },
    photoCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    photo:{
        width: StyleConfig.getWidthByColumn(),
        height: StyleConfig.getWidthByColumn(3),
    },
    saveBtnRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.15)
    },
    saveBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    saveBtn:{
        backgroundColor:StyleConfig.green
    },
    saveBtnDisabled:{
        backgroundColor: StyleConfig.navyLight
    },
    saveBtnTxt:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3
    },
    removeBtnRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.08)
    },
    removeBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    removeBtn:{
        backgroundColor:StyleConfig.red
    },
    removeBtnTxt:{
        color:StyleConfig.white,
        fontSize:StyleConfig.fontSizeH3
    },
    cancelRow: {
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.05)
    },
    cancelCol: {
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cancelText: {
        fontFamily: StyleConfig.gothamBold,
        letterSpacing:1,
        color:StyleConfig.gray,
        fontSize: StyleConfig.fontSizeH3,
    },
    lastRow: {
        height:StyleConfig.countPixelRatio(50)
    },
    propCodeRow:{
        height: StyleConfig.countPixelRatio(WINDOW.height * 0.1)
    },
    propCodeCol:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    propCodeTxt:{
        fontSize:StyleConfig.fontSizeParagraph,
        fontFamily:StyleConfig.gothamBook,
        color:StyleConfig.white

    },
    propCodeBoldTxt:{
        fontFamily: StyleConfig.gothamBold,
    },
    btnCodeSubmit:{
        borderRadius:StyleConfig.fontSizeH3,
        alignItems:'center',
        width:StyleConfig.getWidthByColumn(4),
        marginBottom:StyleConfig.countPixelRatio(-15)
    },
    btnCodeSubmitDisable:{
        backgroundColor:StyleConfig.navyLight,
    },
    btnCodeSubmitEnable:{
        backgroundColor:StyleConfig.white,
    },
    btnCodeSubmitEnableTxt:{
        color:StyleConfig.blue,
        fontWeight:'bold',
        fontSize:StyleConfig.fontSizeH3
    },
    btnCodeSubmitDisableTxt:{
        color:StyleConfig.white,
        fontWeight:'bold',
        fontSize:StyleConfig.fontSizeH3
    },
    reduxInfo: {
        color:StyleConfig.white,
        fontSize: StyleConfig.fontSizeH4,
        fontStyle: 'italic',
        marginTop:StyleConfig.countPixelRatio(4),
        letterSpacing:1
    },
    disabledFiled:{
       opacity:0.3
    },
    lockIcon:{
        color:StyleConfig.navyDark,
        fontSize:StyleConfig.fontSizeH3
    }

});
