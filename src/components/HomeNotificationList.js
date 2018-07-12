/**
 * @providesModule HomeNotificationList
 */

import React, { Component } from 'react';
import { Image, Animated, TouchableOpacity, View } from 'react-native';
import { Grid, Row, Col, Text, Item, Label, Input, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppImages from 'AppImages';
import { Actions } from 'react-native-router-flux';
import HomeNotificationListStyle from 'HomeNotificationListStyle';
import StyleConfig from 'StyleConfig';
import LayoutStyle from 'LayoutStyle';
import { GOOGLE_API_KEY, API_BASE_URL, HOUSE_RESIDENT, MANAGING } from 'global';
import ServiceChoose from 'ServiceChoose';
import OwnerResidentStyle from 'OwnerResidentStyle';
import withLoader from 'withLoader';
import withToast from 'withToast';
import { WINDOW } from 'global';
import API from 'AppUtils';
import RangeSliderModal from '../components/RangeSliderModal';
import WorkLocation from 'workLocation';
import ReduxField from 'ReduxField';
import { reduxForm, change } from 'redux-form';
import ImagePickerModal from '../components/ImagePickerModal';

class HomeNotificationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animation : new Animated.Value(),
            expanded:true,
            addressError:false,
            addressData:'',
            addressLat:'',
            addressLng:'',
            deletedServices:[],
            addedServices:[],
            isLicenceOpen : false,
            currentServiceIndex: 0,
            currentService: {
                type:'',
                experience: 0,
            },
            isAdjustExperienceOpen: false,
            deleteIndex:0,
            userProperties:[],
            section:[
                // 'WORK LOCATION',
                // 'SELECT SERVICE',
                // 'JOB DETAILS',
                // 'SEARCH RANGE'
            ],
        }
    }

    componentDidMount(){
        this._getUserProperties();
    }

    _toggleSlider = () => {
        let initialValue    = this.state.expanded? this.state.maxHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }
    _onSelectService = (type) => {
        const {currentService} = this.state;
        currentService['type'] = type;
        this.setState({currentService});

    }

    _setMaxHeight(event){
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }
    _updateAddress = (data, details) => {
        const {updateLocationAddress,setPropertyLocation} = this.props;
        const { description } = data;
        const { geometry } = details;
        if(description) {
            let lat = (geometry && geometry.location.lat)? geometry.location.lat : '';
            let lng = (geometry && geometry.location.lng)? geometry.location.lng : '';
            updateLocationAddress(description, lat, lng);
            if(lat && lng)
                setPropertyLocation(lat, lng);
        }
    }

    _jobsAndPhotos = () => {
       // this.setState({selectedSection:2});
    }

    _onAdjustExperienceModal = (deleteIndex) => {
        const { isAdjustExperienceOpen } = this.state;
        this.setState({isAdjustExperienceOpen: !isAdjustExperienceOpen, deleteIndex});
    }

    _onAdjustExperienceSubmit = () => {
        this.setState({isAdjustExperienceOpen:false});
    }
    _onChangeRate = (name, value) => {
        console.warn('value',name, value);
    }

    _getUserProperties = () => {
        let userProperties=[];
        API.listProperties()
            .then((response) => {
                const { error, message } = response;
                if(!error) {
                    const {properties} = response;
                    properties.map((value, key)=>{
                        userProperties.push({ description: value.name+' '+value.address, geometry: { location: { lat: Number(value.lat), lng: Number(value.lng) } }});
                    })
                }
                API.getAllResident()
                    .then((response) => {
                        const { error, message } = response;
                        if(!error) {
                            const {residents} = response;
                            residents.map((value, key)=>{
                                userProperties.push({ description: value.property.name+' '+value.property.address, geometry: { location: { lat: Number(value.property.lat), lng: Number(value.property.lng) } }});
                            })
                        }
                        this.setState({
                            userProperties: userProperties,
                        });
                    });
            });
    }
    _getTitle = (titleIndex) =>{
        const { section } = this.props;
        return (
            <Row style={HomeNotificationListStyle.titleRow}>
                <Col style={HomeNotificationListStyle.titleCol}>
                    <Text style={[LayoutStyle.headerLabel,HomeNotificationListStyle.titleText]}>
                        { section[titleIndex] }
                    </Text>
                </Col>
                <Col style={HomeNotificationListStyle.titleIconCol}>
                    <Image source={AppImages.locationList} style={HomeNotificationListStyle.titleIcon}/>
                </Col>
            </Row>
        )
    }

    render() {
        const {region, setCurrentLocation, setPropertyLocation, showService, selectedSection, circle, section, updateLocationAddress, providerRates, images, toggleModal} = this.props;
        const { animation,
            expanded,
            addressError,
            currentService,
            currentService:{type,experience,licenses},
            addedServices,
            isAdjustExperienceOpen,
            userProperties,
            minHeight,
            maxHeight,
        } = this.state;

        return (
            <View>
                    {
                        ((selectedSection == 2))?(null):
                            <View>
                                <TouchableOpacity onPress={ ()=>{ setCurrentLocation() }}>
                                    <Image source={AppImages.location} style={[HomeNotificationListStyle.locationImg,{bottom:maxHeight+45}]}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={AppImages.favouriteLocation} style={[HomeNotificationListStyle.favLocationImg,{bottom:maxHeight+5}]}><Text style={HomeNotificationListStyle.favLocationCount}>{(userProperties.length>0)?userProperties.length:''}</Text></Image>
                                </TouchableOpacity>
                            </View>
                    }
            <Animated.View onLayout={this._setMaxHeight.bind(this)} style={[HomeNotificationListStyle.sliderGrid, {height: (expanded) ? 'auto':animation}]}>
                <Row style={HomeNotificationListStyle.toggleRow} onLayout={this._setMinHeight.bind(this)}>
                    <View style={HomeNotificationListStyle.iconView}>
                        <Icon onPress={this._toggleSlider.bind(this)}
                              style={HomeNotificationListStyle.toggleIcon}
                              name={(expanded) ? `angle-down` : `angle-up`} />
                        {
                            ((selectedSection == 2))?((images.length > 0)?(
                                    <Row style={HomeNotificationListStyle.addBtnRow}>
                                        <Col style={HomeNotificationListStyle.addBtnCol}>
                                            <TouchableOpacity onPress={toggleModal}style={[LayoutStyle.buttonH1, HomeNotificationListStyle.addBtn]}>
                                                <Row style={HomeNotificationListStyle.addBtnPlusRow}>
                                                    <Col>
                                                        <Text style={HomeNotificationListStyle.addBtnTxt}>ADD PHOTOS</Text>
                                                    </Col>
                                                </Row>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col style={HomeNotificationListStyle.removeBtnCol}>
                                            <TouchableOpacity style={[LayoutStyle.buttonH1, HomeNotificationListStyle.removeBtn]}>
                                                <Row style={HomeNotificationListStyle.removeBtnPlusRow}>
                                                    <Col>
                                                        <Text style={HomeNotificationListStyle.removeBtnTxt}>REMOVE PHOTOS</Text>
                                                    </Col>
                                                </Row>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>

                            ):null):null
                        }
                        {this._getTitle(selectedSection)}
                    </View>
                </Row>
                <Row>
                    {
                        (selectedSection == 0) ?
                            <WorkLocation {...this.props}
                                          addressData={region.locationAddress}
                                          userProperties={userProperties}
                                          expanded={expanded}
                                          addressError={addressError}
                                          updateAddress={this._updateAddress.bind(this)}
                                          updateAddressText={updateLocationAddress.bind(this)}
                                          setPropertyLocation={setPropertyLocation.bind(this)}
                                          section={section}
                                          selectedSection={selectedSection}
                                          circle={circle}
                            />
                        :(selectedSection == 1) ?
                                <Grid style={HomeNotificationListStyle.servicesMainGrid}>
                                    <Row style={OwnerResidentStyle.serviceRow}>
                                        <Col>
                                            <ServiceChoose addedServices={addedServices} type={type} onSelect={this._onSelectService}/>
                                        </Col>
                                    </Row>

                                    <Row style={HomeNotificationListStyle.adjustExperienceBtnRow}>
                                        <Col style={HomeNotificationListStyle.adjustExperienceBtnCol}>
                                            <TouchableOpacity style={(currentService['type'])? HomeNotificationListStyle.adjustExperienceBtn:HomeNotificationListStyle.adjustExperienceBtnDisabled} onPress={() => this._onAdjustExperienceModal()}>
                                                <Text style={[(currentService['type'])?HomeNotificationListStyle.adjustExperienceBtnTxt:HomeNotificationListStyle.adjustExperienceBtnTxtDisabled]}>ADJUST EXPERIENCE</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>

                                    <Row style={[HomeNotificationListStyle.jobTypeRow]}>
                                        <TouchableOpacity onPress={()=>{showService(2),this._jobsAndPhotos()}} style={[LayoutStyle.buttonH1, HomeNotificationListStyle.jobTypeButton, (currentService['type'])? HomeNotificationListStyle.jobTypeButtonValid: HomeNotificationListStyle.jobTypeButtonInvalid]}>
                                            <Text style={[LayoutStyle.buttonH1Text,HomeNotificationListStyle.jobTypeButtonText]}>NOTES & PHOTOS</Text>
                                            <Icon name='angle-right' style={HomeNotificationListStyle.jobTypeNextIcon}/>
                                        </TouchableOpacity>
                                    </Row>

                                    <Row style={HomeNotificationListStyle.cancelBtnRow}>
                                        <Col style={HomeNotificationListStyle.cancelBtnCol}>
                                            <TouchableOpacity onPress={()=>{showService(0)}}>
                                                <Label
                                                    style={[LayoutStyle.buttonH1Text, HomeNotificationListStyle.cancelBtnTxt]}>
                                                    CANCEL
                                                </Label>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                    <RangeSliderModal isOpen={isAdjustExperienceOpen}
                                                      onClose={this._onAdjustExperienceModal.bind(this, 0)}
                                                      onSubmit={this._onAdjustExperienceSubmit.bind(this)}
                                                      minRangeValue={0}
                                                      maxRangeValue={25}
                                                      step={1}
                                                      sliderLength={280}
                                                      textAlign="right"
                                                      signLeftBefore=""
                                                      signLeftAfter="+"
                                                      signRightBefore=""
                                                      signRightAfter=""
                                                      textLeftAlign="left"
                                                      textRightAlign="right"
                                                      value={0}
                                                      _onChange={this._onChangeRate.bind(this)}
                                                      introText={'Experience level effects the rate of a provider. This can be useful when a job requires a certain level of skill.'}
                                                      btnTitle={'DONE'}
                                                      title={'YEAR OF EXPERIENCE'}
                                    />
                                </Grid>
                            :
                            (selectedSection == 2) ?
                                <Grid style={HomeNotificationListStyle.notificationMainGrid}>
                                    <Row style={HomeNotificationListStyle.jobDetailsRow}>
                                        <Text style={[HomeNotificationListStyle.jobDetailsText]}>
                                            Add notes so your pro can know the specifics the job.
                                        </Text>
                                    </Row>
                                    <Row style={HomeNotificationListStyle.formInputRow}>
                                        <Col>
                                            <ReduxField
                                                name="notes"
                                                label="Notes"
                                                placeholder="Type Note Hare..."
                                                style={[LayoutStyle.inputStyle,HomeNotificationListStyle.input]}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                autoFocus={true}
                                                info={"200 characters limit"}
                                                infoStyle={HomeNotificationListStyle.infoStyle}
                                                multiline={true}
                                                onInfoPress={null}

                                            />
                                        </Col>
                                    </Row>
                                    <Row style={[HomeNotificationListStyle.jobTypeRow]}>
                                        <TouchableOpacity  onPress={()=>{showService(3)}} style={[LayoutStyle.buttonH1, HomeNotificationListStyle.jobTypeButton, HomeNotificationListStyle.jobTypeButtonValid]}>
                                            <Text style={[LayoutStyle.buttonH1Text,HomeNotificationListStyle.jobTypeButtonText]}>SEARCH RANGE</Text>
                                            <Icon name='angle-right' style={HomeNotificationListStyle.jobTypeNextIcon}/>
                                        </TouchableOpacity>
                                    </Row>
                                    <Row style={HomeNotificationListStyle.cancelBtnRow}>
                                        <Col style={HomeNotificationListStyle.cancelBtnCol}>
                                            <TouchableOpacity onPress={()=>{showService(1)}}>
                                                <Label
                                                    style={[LayoutStyle.buttonH1Text, HomeNotificationListStyle.cancelBtnTxt]}>
                                                    CANCEL
                                                </Label>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                </Grid>
                                :(selectedSection == 3) ?
                                <WorkLocation {...this.props}
                                              addressData={region.locationAddress}
                                              userProperties={userProperties}
                                              expanded={expanded}
                                              addressError={addressError}
                                              updateAddress={this._updateAddress.bind(this)}
                                              updateAddressText={updateLocationAddress.bind(this)}
                                              setPropertyLocation={setPropertyLocation.bind(this)}
                                              providerRates={providerRates}
                                              section={section}
                                              selectedSection={selectedSection}
                                              circle={circle}
                                />
                                :
                                <View/>
                        }
                </Row>

            </Animated.View>
            </View>
        );
    }
}
const initialState = {
    notes:''
};

const withForm = reduxForm({
    form: 'basicIndividualRequest',
    initialValues: initialState
});

export default withLoader(withToast(withForm(HomeNotificationList)));

