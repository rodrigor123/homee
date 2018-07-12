/**
 * @providesModule HomeStyle
 */

import { StyleSheet } from 'react-native';
import { WINDOW } from 'global';
import StyleConfig from 'StyleConfig';

export default StyleSheet.create({
    mapView: {
        width: WINDOW.width,
        height: WINDOW.height - StyleConfig.homeeHeaderHeight,
    },
    cameraBackgroundImage: {
        width: WINDOW.width,
        height: WINDOW.height - StyleConfig.homeeHeaderHeight,
        //resizeMode:'stretch',
    },
    imageView:{
        width: WINDOW.width,
        height: WINDOW.height - StyleConfig.homeeHeaderHeight,
        backgroundColor:'transparent',
    },
    grid1:{
        justifyContent:'center',
        alignItems:'center',
    },
    grid1Row:{
        marginLeft:-StyleConfig.getScreenPadding,
        alignItems:'center',
        justifyContent:'center',
    },
    gridPhotosRow:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    grid1Col:{
        alignItems:'center',
        justifyContent:'center'
    },
    grid2:{
        justifyContent:'center',
        alignItems:'center',
    },
    photosView:{
        flex: 1,
        flexDirection: 'row'
    },
    grid1PhotosCol:{
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    gridPhotos2:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    grid2Row:{
        marginLeft:-StyleConfig.getScreenPadding,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    grid2Col:{
        alignItems:'center',
        justifyContent:'flex-start',
    },
    imageUpload:{
        marginTop:StyleConfig.countPixelRatio(50),
        alignItems:'center',
        justifyContent:'center',
    },
    cameraImage: {
        width: StyleConfig.countPixelRatio(50),
        height: StyleConfig.countPixelRatio(50),
        marginRight:-StyleConfig.getScreenPadding,
        resizeMode: 'contain',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:0
    },
    cameraText:{
        marginRight:-StyleConfig.getScreenPadding,
        backgroundColor:'transparent',
        color:StyleConfig.white,
    },
    cancelBtnRow:{
        height:StyleConfig.countPixelRatio(WINDOW.height * 0.05) - StyleConfig.platformPadding
    },
    cancelBtnCol:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cancelBtnTxt:{
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        color:StyleConfig.navyMediumLight
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100,
    },
    listImage:{
        width: 125,
        height: 125,
        borderColor:StyleConfig.white,
        borderWidth:1,
    },
    imageRootContainer: {
        flex:1,
        backgroundColor:StyleConfig.white,
    },
    addBtnPlusRow:{
        height:StyleConfig.buttonHeight2,
        justifyContent:'center',
        borderWidth:1,
        borderColor:"transparent"
    },
    addBtnTxt:{
        color:StyleConfig.blue,
        fontSize:StyleConfig.fontSizeH3,
        fontFamily:StyleConfig.gothamMedium,
        lineHeight:StyleConfig.buttonHeight2,
        textAlign:'center',
        backgroundColor:'transparent'
    },
});
