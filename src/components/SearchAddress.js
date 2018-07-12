/**
 * @providesModule SearchAddress
 */

import React, { Component } from 'react';
import { WINDOW } from 'global';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import StyleConfig from 'StyleConfig';
import { GOOGLE_API_KEY } from 'global';

class SearchAddress extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { inputLabel, onSelect, isError, error, addressData, _validateAddress, value, updateAddressText, disableTypeEvent, setPropertyLocation, userProperties } = this.props;
        return (
                <GooglePlacesAutocomplete
                    placeholder='Enter Address'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed={'auto'}    // true/false/undefined
                    fetchDetails={true}
                    text={addressData}
                    rendorView={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        onSelect(data, details);
                    }}
                    textInputProps={{
                        name:"address",
                        ...(disableTypeEvent)
                            ?
                                {}
                            :
                                {
                                    // value: value,
                                    onChangeText: ((data) => {
                                        updateAddressText(data);
                                    }),
                                    // onBlur: ((e) => {
                                    //     onSelect({description: value});
                                    //     this.forceUpdate();
                                    // })
                                }
                    }}
                    getDefaultValue={() => ''}

                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: GOOGLE_API_KEY,
                        language: 'en', // language of the results
                        types: 'address' // default: 'geocode'
                    }}

                    styles={{
                        textInputContainer: {
                            marginTop:StyleConfig.countPixelRatio(10),
                            width: '100%',
                            backgroundColor: StyleConfig.white,
                            height: StyleConfig.countPixelRatio(44),
                            borderTopColor: 'transparent',
                            borderBottomColor: (!isError) ? StyleConfig.blue : StyleConfig.red,
                            borderTopWidth: 0,
                            borderBottomWidth:1,
                            flexDirection: 'row',
                        },
                        textInput:{
                            backgroundColor: '#FFFFFF',
                            height: StyleConfig.countPixelRatio(28),
                            borderRadius: 5,
                            paddingTop:0,
                            paddingBottom:0,
                            paddingLeft:0,
                            paddingRight:0,
                            marginTop: StyleConfig.countPixelRatio(15),
                            marginLeft: 0,
                            fontFamily: StyleConfig.gothamBook,
                            fontSize: StyleConfig.fontSizeH3,
                            marginRight: 0,
                            flex: 1
                        },
                        errorText:{
                            color:StyleConfig.navyMediumDark,
                            fontSize: StyleConfig.fontSizeH4,
                            fontStyle: 'italic',
                            marginTop:StyleConfig.countPixelRatio(4),
                            letterSpacing:1
                        },
                        inputLabel:{
                            color: (!isError) ? StyleConfig.blue : StyleConfig.red,
                            fontFamily: StyleConfig.gothamBold,
                            fontSize: StyleConfig.fontSizeH3,
                            marginTop:4
                        },
                        listView: {
                            shadowColor: "#000",
                            shadowOffset:{ width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 1.2,
                            elevation: 1,
                        },
                        row: {
                            alignItems:'center',
                            padding:0,
                        },
                        description: {

                            fontFamily: StyleConfig.gothamBook,
                            color: StyleConfig.navyMediumDark,
                            fontSize: StyleConfig.fontSizeH3,
                        },
                        container:{
                            maxHeight:WINDOW.height/4
                        }

                    }}
                    errorText={(isError) ? error : ''}
                    inputAutoCorrect={false}
                    placeholderTextColor={StyleConfig.navyMediumLight}
                    enablePoweredByContainer={false}
                    //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    //currentLocationLabel="Current location"
                    inputLabel={inputLabel}
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    //GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    //rankby: 'distance',
                    //types: 'food'
                    //}}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    predefinedPlaces={userProperties}

                    debounce={0} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                />
        );
    }
}

export default SearchAddress;
