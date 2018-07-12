/**
 * @providesModule StyleConfig
 */

import { WINDOW, deviceType } from 'global';
import { Platform } from 'react-native';
import AppImages from 'AppImages';

smartScale = (value) => {
    if (deviceType == 'phone') {
        return (value * WINDOW.width) / 375;
    } else {
        return (value * WINDOW.height) / 667;
    }
}

const getWidthByColumn = (column = 1) => {
    const totalPixel = WINDOW.width;
    const totalSpace = ((screenPaddingValue * 2) + (scalarSpace * (column - 1)));
    return ((totalPixel - totalSpace) / column);
}

const screenPaddingValue = smartScale(26);

const scalarSpace = 13;

const gridSize = 4;
const configData = {
    gothamBold: (Platform.OS == 'ios') ? 'gothamBold' : 'gotham-bold',
    gothamBook: 'gotham-book',
    gothamMedium: 'gotham-medium',
    homeeHeaderHeight:smartScale(65),
    platformPadding: (Platform.OS == 'ios') ? 0 : smartScale(20),
    countPixelRatio: (defaultValue) => {
        return smartScale(defaultValue);
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset:{ width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:2
    },

    //Color
    placeholderColor:'#6D8190',
    navyDark:'#1F2F3C',
    navyMediumDark:'#2A3F50',
    navyMediumLight:'#6D8190',
    navyLight:'#B2BBC2',
    blue:'#2980B9',
    conectratedBlue:'#26436F',
    red:'#E74C3C',
    conectratedRed:'#993025',
    tan:'#E0E2D5',
    orange:'#FF9C1D',
    purple:'#6A5C7F',
    teal:'#229499',
    green:'#1B8633',
    gray:'#747474',
    lightGray:'#D3D3D3',
    white:'#FFFFFF',
    black:'#000',
    whiteFullLight:'rgba(255,255,255,0.3)',
    whiteMediumLight:'rgba(255,255,255,0.8)',

    //Font Size for Phone
    headerIcon: smartScale(40),
    commonIcon:smartScale(15),
    fontSizeParagraph: smartScale(13),
    fontSizeSubParagraph: smartScale(10),
    fontSizeH1: smartScale(26),
    fontSizeH2: smartScale(20),
    fontSizeH3: smartScale(15),
    fontSizeH4: smartScale(10),
    fontSizeH5: smartScale(8),
    fieldButtonFontSize: smartScale(10),


    //Font Size for Tablet
    fontSizeTabletParagraph: 13,
    fontSizeTabletSubParagraph: 10,
    fontSizeTabletH1: 36,
    fontSizeTabletH2: 26,
    fontSizeTabletH3: 18,
    fontSizeTabletH4: 12,
    fieldButtonTabletFontSize: 17,

    // buttons
    buttonHeight: smartScale(40),
    buttonHeight2:smartScale(22),

    drawerWidth:WINDOW.width - smartScale(26),
    paddingHorizontal:26,

    //Grid values
    screenPaddingValue: smartScale(16),
    scalarSpace: smartScale(13),
    getScreenPadding: screenPaddingValue,
    getWidthByColumn: (column = 1) => {
        return (column == 3)
            ? getWidthByColumn(2) + getWidthByColumn(4) + scalarSpace
            : getWidthByColumn(column);
    },
}

const googleSearch = {
    container:{},
    textInputContainer: {
        borderBottomColor:configData.blue,
    },
    textInput: {

        width:'100%',
        height:'100%',
        marginLeft:-10,
        marginTop:-1,
        marginRight:-1,
        marginBottom:-1,
        borderRadius:0,
        fontFamily:configData.gothamBook,
        color:configData.navyMediumLight
    },
    description:{},
    predefinedPlacesDescription:{},
    listView: {
        position:'absolute',
        top:50,
        left:0,
        elevation:2,
        height: WINDOW.height,
        width: WINDOW.width,
        backgroundColor:configData.white,
        shadowColor: "#000",
        shadowOffset:{ width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        zIndex:9999999
    },
    poweredContainer:{
        height: 0
    },
    powered:{
        height: 0
    },
    separator:{
        borderWidth:1,
        borderColor: configData.white
    }
}

const propertyTypes = {
    1: {
        class: 1,
        color: configData.red,
        label: 'Single-Family',
        selected: 0,
        icon: AppImages.houseIcon,
        cardImage: AppImages.cardSingleFamilyIcon,
        profileImage:AppImages.profileSingleFamily,
    },
    2: {
        class: 2,
        color: configData.orange,
        label: 'Multi-Family',
        selected: 0,
        icon: AppImages.multiFamilyIcon,
        cardImage: AppImages.cardMultiFamilyIcon,
        profileImage:AppImages.profileMultiFamily,
    },
    3: {
        class: 3,
        color: configData.purple,
        label: 'Commerical',
        selected: 0,
        icon: AppImages.commericalIcon,
        cardImage: AppImages.property,
        profileImage:AppImages.profileCommerical,
    },
}

const cardType = {
    'Visa':{
        color:configData.conectratedBlue,
        image:AppImages.visa,
        overlayImage:AppImages.cardBlue
    },
    'MasterCard':{
        color:configData.orange,
        image:AppImages.mastercard,
        overlayImage:AppImages.cardBlack
    },
    'AmericanExpress':{
        color:configData.blue,
        image:AppImages.americanExpress,
        overlayImage:AppImages.cardBlack
    },
    'Discover':{
        color:configData.red,
        image:AppImages.discover,
        overlayImage:AppImages.cardBlack
    }
}

export default {
    ...configData,
    googleSearch,
    propertyTypes,
    cardType
}
