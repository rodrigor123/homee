import React, {Component} from 'react';
import {PermissionsAndroid, TouchableOpacity, Platform, Image, ImageBackground, View, ListView } from 'react-native';
import {userLogout, WINDOW, GOOGLE_API_KEY, calculateDist} from 'global';
import {Content, Grid, Row, Col, Label, Text, List, ListItem, Thumbnail } from 'native-base';
import LayoutStyle from 'LayoutStyle';
import HomeStyle from 'HomeStyle';
import withToast from 'withToast';
import withLoader from 'withLoader';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import HomeNotificationList from 'HomeNotificationList';
import API from 'AppUtils';
import GoogleMapUtils from 'GoogleMapUtils';
import AppImages from 'AppImages';
import StyleConfig from 'StyleConfig';

class Home extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            showMap: true,
            region: {
                latitude: 37.509124,
                longitude: -82.62936,
                latitudeDelta: 0.0922*15,
                longitudeDelta: 0.0421*15,
                locationAddress:'',
            },
            circle:{
                border:5,
                fillColor:'rgba(135,206,250,0.5)',
                radius:1609.34*25
            },
            providers:[],
            providerRates: {
                min_rate_base: 0.00,
                max_rate_base: 0.00,
                min_rate_hour: 0.00,
                max_rate_hour: 0.00,
            },
            section:[
                'WORK LOCATION',
                'SELECT SERVICE',
                'JOB DETAILS',
                'SEARCH RANGE',
                'REQUESTING PRO'
            ],
            selectedSection: 0,
            images: [],
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        try {
            const {loader} = this.props;
            setTimeout(() => {
                loader(true)
            }, 1);
            setTimeout(() => {
                loader(false)
            }, 5000);
            Platform.OS == 'android' ? this._locationPermission() : this._accessCurrentLocation();
            this._getAddressFromLatLang(this.state.region.latitude, this.state.region.longitude);
            this._getOnlineProviders(this.state.region.latitude, this.state.region.longitude);
        } catch (error) {
            console.log(error);
        }
    }

    componentWillUnmount() {
        try {
            navigator.geolocation.clearWatch(this.watchID);
        } catch (error) {
            console.log(error);
        }
    }

    _locationPermission = async () => {
        try {
            const {toast} = this.props;
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Location Permission',
                        'message': 'Required Location Permission'
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    this._accessCurrentLocation();
                } else {
                    toast({text: 'Please enable location'});
                }
            } catch (err) {
                toast({text: err});
            }
        } catch (error) {
            console.log(error);
        }
    }

    _accessCurrentLocation = () => {
        try {
            const {toast} = this.props;
            navigator.geolocation.getCurrentPosition(
                (initialPosition) => {
                    const {latitude, longitude} = initialPosition.coords;
                    const {region: {latitudeDelta, longitudeDelta, locationAddress}} = this.state;
                    this.setState({
                        initialPosition,
                        region: {latitude, longitude, latitudeDelta, longitudeDelta, locationAddress}
                    });
                    this.forceUpdate();
                },
                ({message}) => toast({text: message}),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );
            this.watchID = navigator.geolocation.watchPosition((position) => {
                var lastPosition = JSON.stringify(position);
                this.setState({lastPosition});
            });
        } catch (error) {
            console.log(error);
        }
    }

    _getAddressFromLatLang(lat, lng) {
        const {region: {latitudeDelta, longitudeDelta}} = this.state;
        GoogleMapUtils.getAddressByLatLng({'address': lat + ',' + lng, 'key': GOOGLE_API_KEY})
            .then((response) => {
                try {
                    const {results} = response;
                    const {formatted_address} = results[0];
                    this.setState({
                        region: {
                            latitude: lat,
                            longitude: lng,
                            latitudeDelta,
                            longitudeDelta,
                            locationAddress: formatted_address
                        }
                    });
                } catch (error) {

                }
            });
    }

    _getOnlineProviders = (lat, lng) => {
        API.searchProviders({'lat':lat,'lng':lng,'distance':(this.state.circle.radius/1609.34),unit:'mi'})
            .then((response) => {
                const {error} = response;
                if (!error) {
                    const {results} = response;
                    let min_rate_base=0.00,max_rate_base=0.00,min_rate_hour=0.00,max_rate_hour=0.00;
                    results.map((value, key)=>{
                        if(min_rate_base == 0 || value.rate_base < min_rate_base){
                            min_rate_base = value.rate_base;
                            min_rate_hour = value.rate_hour;
                        }
                        if(max_rate_base==0 || value.rate_base > max_rate_base){
                            max_rate_base = value.rate_base;
                            max_rate_hour = value.rate_hour;
                        }
                    });
                    this.setState({
                        providers:results,
                        providerRates:{
                            min_rate_base:min_rate_base.toFixed(2),
                            max_rate_base:max_rate_base.toFixed(2),
                            min_rate_hour:(min_rate_hour/60).toFixed(2),
                            max_rate_hour:(max_rate_hour/60).toFixed(2)
                        }
                    });
                }
            });
    }

    _setCurrentLocation = () => {
        const {initialPosition: {coords}} = this.state;
        try {
            const {latitude, longitude} = coords;
            this.map.animateToCoordinate({
                latitude: latitude,
                longitude: longitude
            }, 100);
            this._getAddressFromLatLang(latitude, longitude);
            this._getOnlineProviders(latitude, longitude);
            this.forceUpdate();
        } catch (error) {
            console.log(error);
        }
    }

    _setPropertyLocation = (lat,lng) => {
        this.map.animateToCoordinate({latitude: lat,
            longitude: lng},100);
        this._getOnlineProviders(lat, lng);
    }

    _updateLocationAddress = (address, lat='', lng='') => {
        const { region:{latitude,longitude,latitudeDelta,longitudeDelta} } = this.state;
        this.setState({region:{latitude:(lat)?lat:latitude, longitude:(lng)?lng:longitude, latitudeDelta, longitudeDelta,locationAddress:address}});
        // this.forceUpdate();
    }

    _toggleModal = () => {
        let multiple = true
        ImagePickerModal(multiple)
            .then((images) => {
                this.setState({images: images});
                let newImages = images.map((value, index)=>{
                    return value['sourceURL']
                })
                this.setState({dataSource: this.state.dataSource.cloneWithRows(newImages)});
            });
    }

    _showService = (section) => {
        this.setState({selectedSection: section});
    }

    onRegionChange = (region) => {
        try {
            const {region: {latitude, longitude, latitudeDelta, longitudeDelta, locationAddress}, circle: {radius}, selectedSection} = this.state;
            let res = calculateDist(region.latitude, region.longitude, latitude, longitude)
            const {val} = res;
            if (selectedSection == 3) {
                if (region.latitudeDelta < latitudeDelta && region.longitudeDelta < longitudeDelta) {
                    // console.warn('zoom in')
                    this.setState({
                        circle: {
                            border: 5,
                            fillColor: 'rgba(135,206,250,0.5)',
                            radius: radius - val
                        },
                        region: {
                            latitude: region.latitude,
                            longitude: region.longitude,
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta,
                            locationAddress: locationAddress
                        }
                    });
                } else if (region.latitudeDelta > latitudeDelta && region.longitudeDelta > longitudeDelta) {
                    // console.warn('zoom out')
                    this.setState({
                        circle: {
                            border: 5,
                            fillColor: 'rgba(135,206,250,0.5)',
                            radius: radius + val
                        },
                        region: {
                            latitude: region.latitude,
                            longitude: region.longitude,
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta,
                            locationAddress: locationAddress
                        }
                    });
                } else {
                    // console.warn('drag')
                }
                this._getOnlineProviders(latitude, longitude);
            }
        }catch(error){
            console.log(error)
        }
        // this.forceUpdate();
    }

    render () {
        const { region, providers, circle, selectedSection, section, providerRates, images} = this.state;
        return (
            <Content style={LayoutStyle.rootContainer} scrollEnabled={false}>
                <View>
                    { selectedSection == 2 ?
                        <View style={HomeStyle.imageView}>
                            {
                                (images.length > 0) ? (
                                    <Grid>
                                        {
                                            images.map(({sourceURL}, key) => {
                                                return ((key % 3 == 0) ? (<Row key={key} style={HomeStyle.grid1Row}>
                                                        <Col style={HomeStyle.grid1Col}>
                                                            <Image source={{uri: sourceURL}}
                                                                   style={{
                                                                       flex: 1,
                                                                       position: 'absolute',
                                                                       width: 100,
                                                                       height: 100,
                                                                   }}/>
                                                        </Col>
                                                    </Row>
                                                ) : (
                                                    <Col key={key} style={HomeStyle.grid1Col}>
                                                        <Image source={{uri: sourceURL}}
                                                               style={{
                                                                   flex: 1,
                                                                   position: 'absolute',
                                                                   width: 100,
                                                                   height: 100,
                                                               }}/>
                                                    </Col>
                                                ))

                                            })
                                        }
                                    </Grid>
                                ) : (
                                    <ImageBackground source={AppImages.bgCameraIcon}
                                                     style={[HomeStyle.cameraBackgroundImage]}>
                                        <Grid style={HomeStyle.grid1}>
                                            <Row style={HomeStyle.grid1Row}>
                                                <Col style={HomeStyle.grid1Col}>
                                                    <TouchableOpacity style={HomeStyle.imageUpload}
                                                                      onPress={this._toggleModal.bind(this)}>
                                                        <Image source={AppImages.cameraMultiPhotosIcon}
                                                               style={[HomeStyle.cameraImage]}/>
                                                        <Text style={HomeStyle.cameraText}>Add Photos</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Row>
                                            <Row></Row>
                                            <Row></Row>
                                        </Grid>
                                    </ImageBackground>
                                )
                            }

                        </View>
                        : (selectedSection == 4) ? (

                            <View style={HomeStyle.mapView}>
                                <Grid style={HomeStyle.grid1}>
                                    <Row style={HomeStyle.grid1Row}>
                                        <Col style={HomeStyle.grid1Col}>
                                            <TouchableOpacity style={HomeStyle.imageUpload}
                                                              onPress={this._toggleModal.bind(this)}>
                                                <Image source={AppImages.cameraMultiPhotosIcon}
                                                       style={[HomeStyle.cameraImage]}/>
                                                <Text style={HomeStyle.cameraText}>Add Photos</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                    <Row style={HomeStyle.cancelBtnRow}>
                                        <Col style={HomeStyle.cancelBtnCol}>
                                            <TouchableOpacity onPress={this.setState({selectedSection: 3})}>
                                                <Label
                                                    style={[LayoutStyle.buttonH1Text, HomeStyle.cancelBtnTxt]}>
                                                    CANCEL
                                                </Label>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                </Grid>
                            </View>
                        ) : <View/>

                    }
                    {

                    <MapView
                            ref={map => { this.map = map }}
                            style={[HomeStyle.mapView,{height:(selectedSection==2 || selectedSection == 4)?0:WINDOW.height - StyleConfig.homeeHeaderHeight}]}
                            initialRegion={region}
                            provider={PROVIDER_GOOGLE}
                            onRegionChangeComplete={this.onRegionChange.bind(this)}
                            // showsUserLocation={ true }
                        >
                            <MapView.Marker
                                key={121556}
                                coordinate={{latitude:Number(region.latitude),longitude:Number(region.longitude)}}
                                image={AppImages.currentLocationMarker}
                                zIndex={9999}
                            />
                            {
                                selectedSection == 3 ?
                                    <MapView.Circle
                                        key={(region.latitude+region.longitude).toString()}
                                        center={{latitude: region.latitude, longitude: region.longitude}}
                                        radius={circle.radius}
                                        fillColor={circle.fillColor}
                                        strokeColor={StyleConfig.blue}
                                        strokeWidth={circle.border}
                                    />
                                    :<View/>
                            }
                            {
                                providers.map((provider, index) => (
                                    <MapView.Marker
                                        key={provider.service_id}
                                        coordinate={{latitude:Number(provider.lat),longitude:Number(provider.lng)}}
                                        image={(provider.type==1)?AppImages.electricalServiceMarker:
                                            (provider.type==2)?AppImages.hvacServiceMarker:
                                                (provider.type==3)?AppImages.plumbingServiceMarker:
                                                    (provider.type==4)?AppImages.handyManServiceMarker:null}
                                        zIndex={index}
                                    />
                                ))
                            }
                        </MapView>
                    }
                    <HomeNotificationList
                        providerRates={providerRates}
                        section={section}
                        selectedSection={selectedSection}
                        circle={circle}
                        showService={this._showService.bind(this)}
                        region={region}
                        images={images}
                        toggleModal={this._toggleModal.bind(this)}
                        updateLocationAddress={this._updateLocationAddress.bind(this)}
                        setCurrentLocation={this._setCurrentLocation.bind(this)}
                        setPropertyLocation={this._setPropertyLocation.bind(this)}/>
                </View>
            </Content>
        );
    }
}

export default withToast(withLoader(Home));
