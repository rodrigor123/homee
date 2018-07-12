import React, { Component } from 'react';
import { PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Grid, Row, Col, Text } from 'native-base';
import LayoutStyle from 'LayoutStyle';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapHomeStyle from 'MapHomeStyle';
import withToast from 'withToast';
import AppImages from 'AppImages';
import API from 'AppUtils';

import withRegisterUser from 'withRegisterUser';

class MapHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                // latitude: 0.785834,
                // longitude: -0.406417,
                latitude: 37.509124,
                longitude: -82.62936,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            },
            providers:[]
        }
    }

    componentDidMount() {
        try {
            Platform.OS == 'android' ? this._locationPermission() : this._accessCurrentLocation();
            this._getOnlineProviders();
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

    _locationPermission = async() => {
        try {
            const { toast } = this.props;
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
                    toast({text:'Please enable location'});
                }
            } catch (err) {
                toast({text:err});
            }
        } catch (error) {
            console.log(error);
        }
    }

    _accessCurrentLocation = () => {
        try {
            const { toast } = this.props;
            navigator.geolocation.getCurrentPosition(
                (initialPosition) => {
                    const { latitude, longitude } = initialPosition.coords;
                    const { region: { latitudeDelta, longitudeDelta }} = this.state;
                    this.setState({initialPosition,region:{latitude, longitude, latitudeDelta, longitudeDelta}});
                    this.forceUpdate();
                },
                ({message}) => toast({text:message}),
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

    _getOnlineProviders = () => {
        const {region} = this.state;
        API.searchProviders({'lat':region.latitude,'lng':region.longitude,'distance':100,unit:'mi'})
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const {results} = response;
                    this.setState({providers:results});
                }
            });
    }

    render(){
        const { region, providers } = this.state;
        return(
            <Content style={LayoutStyle.rootContainer} scrollEnabled={false}>
                <Grid >
                    <Row>
                        <Col style={MapHomeStyle.gridCol}>
                            <Row>
                                <Col style={MapHomeStyle.mapView}>
                                    <MapView
                                        style={MapHomeStyle.mapView}
                                        initialRegion={region}
                                        provider={PROVIDER_GOOGLE}
                                        showsUserLocation={ true }
                                    >
                                        {  providers.map((provider, index) => (
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

                                    <Row style={MapHomeStyle.loginBtnRow}>
                                        <Col style={MapHomeStyle.loginBtnCol}>
                                            <TouchableOpacity style={[LayoutStyle.buttonH1, MapHomeStyle.loginBtn]}
                                                    onPress={() => Actions.login()}>
                                                <Text style={[LayoutStyle.buttonH1Text, MapHomeStyle.loginBtnTxt]}>LOGIN</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                    <Row style={MapHomeStyle.signupBtnRow}>
                                        <Col style={MapHomeStyle.signupBtnCol}>
                                            <TouchableOpacity style={[LayoutStyle.buttonH1, MapHomeStyle.signupBtn]}
                                                    onPress={() => Actions.socialRegister()}>
                                                <Text style={[LayoutStyle.buttonH1Text, MapHomeStyle.signupBtnTxt]}>SIGN UP</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }

}

export default withRegisterUser(withToast(MapHome));
