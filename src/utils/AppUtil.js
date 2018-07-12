/**
 * @providesModule AppUtils
 */

import { API_BASE_URL, getAuthToken, queryString, STORAGE_PATH, STRIPE_PK_KEY, userLogout, convertFormData } from 'global';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob'

const isTokenExpire = async (responseJson) => {
    if (typeof responseJson == 'string' && responseJson.includes('Authentication token expired')) {
        userLogout();
        Actions.login();
        return 'Login session expired! Please login'
    }
    return responseJson;
}

const AppUtils = {

    facebookUser: async function (data) {
        return fetch(`https://graph.facebook.com/v2.10/${data.userId}?fields=name,email,picture&access_token=${data.token}`, {
            method: 'GET'
        }).then((response) => response.json());
    },

    urlToBase64: async function (data) {
        return RNFetchBlob.config({
            fileCache : true,
            // by adding this option, the temp files will have a file extension
            appendExt : 'png'
        }).fetch('GET', data.url).then((res) => ({uri:STORAGE_PATH+res.path(),filename:'avatar.png',name:'avatar.png'}));
    },

    standardLogin : async function(data) {
        return fetch(API_BASE_URL+'/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    register : async function(data) {
        return fetch(API_BASE_URL+'/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: await convertFormData(data)
        }).then((response) => response.json())
            .catch(error =>{
                console.warn('sssss', error)
            });
    },

    facebookLogin : async function(data) {
        return fetch(API_BASE_URL+'/login/facebook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    googleLogin : async function(data) {
        return fetch(API_BASE_URL+'/login/google', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    passwordReset : async function(data) {
        return fetch(API_BASE_URL+'/password/reset', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    emailRecover : async function(data){
        return fetch(API_BASE_URL+'/email/recover', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    validateReferral : async function(data) {
        return fetch(API_BASE_URL+'/validate/referral?' + queryString(data), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
        }).then((response) => response.json());
    },

    createReferral : async function(data) {
        return fetch(API_BASE_URL+'/validate/referral', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    updateProfileAvatar : async function(data) {
        return fetch(API_BASE_URL+'/avatar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    setPromocode : async function(data) {
        return fetch(API_BASE_URL+'/promocode', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data)
        }).then((response) => response.json());
    },

    getPromocode : async function() {
        return fetch(API_BASE_URL+'/promocode', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },

    getUserProfile: async function(data) {
        return fetch(API_BASE_URL+'/profile/'+ data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },

    updateUserProfile: async function(data) {
        return fetch(API_BASE_URL+'/profile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data)
        }).then((response) => response.json());
    },

    updateUserPassword: async function(data){
        return fetch(API_BASE_URL+'/password', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data)
        }).then((response) => response.json());
    },

    listProperties: async function() {
        return fetch(API_BASE_URL+'/properties', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },

    addProperties: async function(data) {
        return fetch(API_BASE_URL+'/properties', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    updateProperties: async function(apiData) {
        const { data,  property_id } = apiData;
        return fetch(API_BASE_URL+'/properties/'+property_id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data)
        }).then((response) => response.json());
    },

    addPropertiesAvatar: async function({property_id, image}) {
        return fetch(API_BASE_URL+'/properties/'+ property_id +'/image', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData({image:image})
        }).then((response) => response.json());
    },

    getPropertiesDetails: async function({property_id}) {
        return fetch(API_BASE_URL+'/properties/'+ property_id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },

    removeProperties: async function({property_id}) {
        return fetch(API_BASE_URL+'/properties/'+ property_id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },

    saveCard: async function(cardDetails) {
        var formBody = [];
        for (var property in cardDetails) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(cardDetails[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return fetch('https://api.stripe.com/v1/tokens', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '+ STRIPE_PK_KEY
            },
            body:  formBody
        }).then((response) => response.json());
    },

    createPayments: async function(data) {
        return fetch(API_BASE_URL+'/payments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },

    getPayments: async function() {
        return fetch(API_BASE_URL+'/payments', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },

    getPaymentsById: async function(data) {
        return fetch(API_BASE_URL+'/payments/'+data.payment_id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },

    setDefaultPayments: async function(data) {
        return fetch(API_BASE_URL+'/payments/'+data.payment_id+'/default', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },

    removePaymentsById: async function(data) {
        return fetch(API_BASE_URL+'/payments/'+data.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },

    replacePaymentsById: async function(data) {
        const { newCardData, oldCardData } = data;
        return fetch(API_BASE_URL+'/payments/'+oldCardData.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString({'token':newCardData.token})
        }).then((response) => response.json());
    },
    addResidentProperty: async function(data) {
        return fetch(API_BASE_URL+'/residents', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },
    ValidatePropertyCode: async function(data) {
        return fetch(API_BASE_URL+'/validate/property?code='+data.code, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    getResident: async function(data) {
        return fetch(API_BASE_URL+'/residents/'+data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    getAllResident: async function() {
        return fetch(API_BASE_URL+'/residents', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    propertiesDefault: async function(data) {
        return fetch(API_BASE_URL+'/properties/settings', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data)
        }).then((response) => response.json());
    },
    savePropertySettingsById: async function(data) {
        return fetch(API_BASE_URL+'/properties/'+ data.property_id +'/settings', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data.data)
        }).then((response) => response.json());
    },
    getPropertySettingsById: async function(data) {
        return fetch(API_BASE_URL+'/properties/'+ data.id +'/settings', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },
    getDefaultSettings: async function(data) {
        return fetch(API_BASE_URL+'/properties/settings', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },
    createDevice : async function(data) {
        return fetch(API_BASE_URL+'/devices', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
            body: await convertFormData(data)
        }).then((response) => response.json());
    },
    removeDevice: async function(data) {
        return fetch(API_BASE_URL+'/devices/'+data.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    getDevices: async function() {
        return fetch(API_BASE_URL+'/devices', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    searchProviders: async function(data) {
        return fetch(API_BASE_URL+'/search?'+queryString(data), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                // 'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    getResidentByPropertyId: async function(data) {
        return fetch(API_BASE_URL+ '/properties/' + data.property_id +'/residents', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    removeResidentByPropertyId: async function(data) {
        return fetch(API_BASE_URL+ '/properties/' + data.property_id +'/residents/'+data.resident_id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    updateResidentById: async function(data) {
        return fetch(API_BASE_URL+'/residents/'+data.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(data.data)
        }).then((response) => response.json());
    },
    removeResidentById: async function(data) {
        return fetch(API_BASE_URL+'/residents/'+data.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            }
        }).then((response) => response.json());
    },
    getConsumerRequestById:async function(data) {
        return fetch(API_BASE_URL + '/consumer_requests/' + data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': await getAuthToken()
            },
        }).then((response) => response.json());
    },
    setConsumerRequestById:async function(data) {
        const { bodyData, id } = data;
        return fetch(API_BASE_URL + '/consumer_requests/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': await getAuthToken()
            },
            body: queryString(bodyData)
        }).then((response) => response.json());
    },
}

module.exports = AppUtils;
