/**
 * @providesModule GoogleMapUtils
 */

import { GOOGLE_MAP_BASE_URL, getAuthToken, queryString, convertFormData } from 'global';

const GoogleMapUtils = {
    getAddressByLatLng: async function(data) {
        //address=' + myLat + ',' + myLon + '&key=' + myApiKey
        return fetch(GOOGLE_MAP_BASE_URL+'/geocode/json?'+queryString(data))
            .then((response) => response.json());
    },
}

module.exports = GoogleMapUtils;
