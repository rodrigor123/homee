/**
 * @providesModule global
 */

import { AsyncStorage, Dimensions, Platform } from 'react-native';
import store from 'ReduxStore';
import { Actions } from 'react-native-router-flux';
import { currentUserSet } from "ReduxActions";
import AppImages from 'AppImages';
import {NOTIFICATION_POP} from "../redux/actions";
import API from 'AppUtils';

export const WINDOW = Dimensions.get('window');

export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

export const IMAGECROP = {
    width: 256,
    height: 256,
    cropping: true
}

export const IMAGE_CAMERA = {
    width: 256,
    height: 256,
}

export const IMAGE_PICKER = {
    multiple:true,
    minFiles:1,
    maxFiles:10
}

export const SOCIAL_AUTH_CONFIG = {
    facebook:{
        appId: '1155655921165215',
        callback: 'fb1155655921165215://authorize',
    },
    google:{
        appId:'744157207560-kf9eqdqap9gk16sjmuq7gjrrmindlc0s.apps.googleusercontent.com',
        callback: (Platform.OS == 'ios') ? 'com.googleusercontent.apps.744157207560-kf9eqdqap9gk16sjmuq7gjrrmindlc0s:/oauth2redirect' : 'io.homee.consumer:/oauth2redirect',
    }
}

export const STORAGE_PATH = Platform.OS === 'android' ? 'file://' : '';

export const IMAGE_BASE_URL = 'https://api-dev.homeeondemand.com/v1/avatar';

export const FACEBOOK = 'facebook';

export const CONSUMER = 1;

export const PLATFORM = 1;

export const GOOGLE = 'google';

export const MANUAL = 'manual';

export const SCREEN_PADDING = 88;

export const PLACEHOLDER_COLOR = '#475C6C';

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const numberRegex = /^\d+$/;

//export const API_BASE_URL = 'http://localhost/homee_api/web/v1/index.php';
export const API_BASE_URL = 'https://api-dev.homeeondemand.com/v1';

export const USER_STORAGE_KEY = 'HOMEE_CONSUMER_USER_DATA';

export const GOOGLE_MAP_BASE_URL = 'https://maps.googleapis.com/maps/api';
export const GOOGLE_API_KEY = 'AIzaSyAOEnN3pgtFRDE5DXK5JgMAroLlnm2RQ80';

export const STRIPE_PK_KEY = 'pk_test_DFSU0dl4iVSoDbZp24kb85UT';

export const HOUSE_RESIDENT = 1;

export const MANAGING = 2;

export const getDeviceToken = async () =>{
    return JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY)).token;
};

export const getMonths = async() => {
    return [
        {value:'01'},
        {value:'02'},
        {value:'03'},
        {value:'04'},
        {value:'05'},
        {value:'06'},
        {value:'07'},
        {value:'08'},
        {value:'09'},
        {value:'10'},
        {value:'11'},
        {value:'12'}
    ];
}

export const NOT_TO_EXCEED_LIMITS = [
    {
        limit_type:0,
        selected:true,
        text:'No Limit',
        subText:['No Limit'],
        sign:'$'
    },
    {
        limit_type:1,
        selected:false,
        text:'Labor & Materials',
        subText:['Laber Cost', 'Part & Materials Cost'],
        sign:'$'
    },
    {
        limit_type:2,
        selected:false,
        text:'General Total',
        subText:['General Total'],
        sign:'$'
    }
]

export const NOTIFICATION_GROUP = [
    {
        notify_request:0,
        selected:false,
        text:'Service Request',
    },
    {
        notify_initiate:0,
        selected:false,
        text:'Job Initiation'
    },
    {
        notify_complete:0,
        selected:false,
        text:'Job Completion'
    }
]

export const getYears = async (limit = 50) => {
    let currentYear = JSON.parse(new Date().getFullYear()), years = [];
    for(let i=0; i <= limit; i++){
        years.push({value:""+(currentYear+i)});
    }
    return years;
}

export const storeUser = user => {
    AsyncStorage.setItem(USER_STORAGE_KEY,JSON.stringify(user));
}

export const getUser = async () => JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY));

export const userLogout = async () => {
    const token= JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY)).deviceToken;

    API.getDevices()
        .then((response) => {
            const { error } = response;
            if(!error) {
                const { devices } = response;
                devices.map((value, key)=>{
                    if(value.device_id==token) {
                        API.removeDevice({'id': value.id})
                            .then((response) => {
                            const {error} = response;
                        })
                    }
                })

            }
            AsyncStorage.removeItem(USER_STORAGE_KEY);
            setTimeout(() => {
                Actions.login();
                store.dispatch(currentUserSet(null));
            },50);
        });
}

export const getAuthToken = async (forAPICall = false) => {
    let AuthType = ((forAPICall) ? 'Bearer ':'');
    return  AuthType + JSON.parse(await AsyncStorage.getItem(USER_STORAGE_KEY)).apiKey;
}

export const queryString = (obj) => {
    var str = [];
    for(var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

export const convertFormData = async (data) => {

    var formData = new FormData();

    for (var k in data) {
        formData.append(k, data[k]);
    }
    return formData;
}

export const getCardType = (number) => {
    // visa
    let re = new RegExp("^4");
    if (number.match(re) != null)
        return "Visa";

    // MasterCard
    // Updated for MasterCard 2017 BINs expansion
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
        return "MasterCard";

    // AmericanExpress
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "AmericanExpress";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "Discover";

    // // Diners
    // re = new RegExp("^36");
    // if (number.match(re) != null)
    //     return "Diners";
    //
    // // Diners - Carte Blanche
    // re = new RegExp("^30[0-5]");
    // if (number.match(re) != null)
    //     return "Diners - Carte Blanche";
    //
    // // JCB
    // re = new RegExp("^35(2[89]|[3-8][0-9])");
    // if (number.match(re) != null)
    //     return "JCB";
    //
    // // Visa Electron
    // re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    // if (number.match(re) != null)
    //     return "Visa Electron";

    return null;
}

export const _doFormat = (mask,reference) => {
    let newReference = mask;
    let ignoreCount = 0;
    for (let n=0; n<reference.length; n++) {

        if (reference.charAt(n) != mask.charAt(n)) {
            newReference = newReference.replace('X',reference.charAt(n));
            mask.charAt(n) != 'X' && ignoreCount++;
        }

    }
    newReference = newReference.substr(0,reference.length + ignoreCount);
    return newReference;
}

export const pad = (n, length) => {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
}

export const HANDYMAN = 1;

export const PLUMBING = 2;

export const HEATING = 3;

export const ELECTRIC = 4;

export const SERVICES = {
    1 : {
        title: 'Handyman',
        images: {
            normal : AppImages.handymanNormal,
            select : AppImages.handymanSelect,
            disable : AppImages.handymanDisable,
            mark : AppImages.handymanMark,
        }
    },
    2 : {
        title: 'Plumbing',
        images: {
            normal : AppImages.plumbingNormal,
            select : AppImages.plumbingSelect,
            disable : AppImages.plumbingDisable,
            mark : AppImages.plumbingMark,
        }
    },
    3 : {
        title: 'Heating & Cooling',
        images: {
            normal : AppImages.heatingNormal,
            select : AppImages.heatingSelect,
            disable : AppImages.heatingDisable,
            mark : AppImages.heatingMark,
        }
    },
    4 : {
        title: 'Electric',
        images: {
            normal : AppImages.electricNormal,
            select : AppImages.electricSelect,
            disable : AppImages.electricDisable,
            mark : AppImages.electricMark,
        }
    }
}

export const calculateDist =  (lat1,lon1,lat2,lon2) => {
    let R = 6371; // now in km (change for get miles)
    let dLat = (lat2 - lat1) * Math.PI / 180;
    let dLon = (lon2 - lon1) * Math.PI / 180;
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return {val: Math.round(d * 1000), dType: 'm'};
}
