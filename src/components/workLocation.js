/**
 * @providesModule workLocation
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Text, Item, Label, Icon } from 'native-base';
import {  TouchableOpacity, View } from 'react-native';
import { API_BASE_URL, MANAGING } from 'global';
import HomeNotificationListStyle from 'HomeNotificationListStyle';
import LayoutStyle from 'LayoutStyle';
import SearchAddress from 'SearchAddress';
import SelectFilterDropDown from 'SelectFilterDropDown';

const listData = [
    {
        'first_name':'Bhavesh',
        'last_name':'Sharma',
        'mobile':'11111111111',
        'unit':'14A'
    },
    {
        'first_name':'Ravi',
        'last_name':'Patel',
        'mobile':'22222222',
        'unit':'13B'
    },
    {
        'first_name':'Tejas',
        'last_name':'Gami',
        'mobile':'3333333111',
        'unit':'15C'
    },
    {
        'first_name':'aaaa',
        'last_name':'bbb',
        'mobile':'45454545454545',
        'unit':'15C'
    },
    {
        'first_name':'Bhavesh',
        'last_name':'Sharma',
        'mobile':'11111111111',
        'unit':'14A'
    },
    {
        'first_name':'Ravi',
        'last_name':'Patel',
        'mobile':'22222222',
        'unit':'13B'
    },
    {
        'first_name':'Tejas',
        'last_name':'Gami',
        'mobile':'3333333111',
        'unit':'15C'
    },
    {
        'first_name':'aaaa',
        'last_name':'bbb',
        'mobile':'45454545454545',
        'unit':'15C'
    }
];
class WorkLocation extends Component {

    render(){
        const {
            selectedSection,
            section,
            expanded,
            showServices,
            addressData,
            updateAddress,
            updateAddressText,
            setPropertyLocation,
            userProperties,
            addressError,
            showService,
            region,
            circle,
            providerRates
        } = this.props;

        return(
            <Grid style={HomeNotificationListStyle.notificationMainGrid}>
                {
                    (expanded && selectedSection == 3)
                        ?
                        <Row>
                            <Col style={HomeNotificationListStyle.diameterCol}>
                                <Text style={HomeNotificationListStyle.diameter}>{(circle.radius/1609.34).toFixed(0)} miles</Text>
                                <Text style={HomeNotificationListStyle.diameterInfo}>(zoom on map to adjust range)</Text>
                            </Col>
                        </Row>
                        :
                        <View/>
                }
                <Row>
                    <Col>
                        <SearchAddress
                            inputLabel={'Location'}
                            addressData={addressData}
                            onSelect={updateAddress.bind(this)}
                            updateAddressText={updateAddressText.bind(this)}
                            isError={addressError}
                            setPropertyLocation={setPropertyLocation.bind(this)}
                            error="Field Required"
                            userProperties={userProperties}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SelectFilterDropDown
                            listData={listData}
                            filterWith={['mobile']}
                        />
                    </Col>
                </Row>
                {
                    (expanded && selectedSection==0)
                        ?
                        <Row style={[HomeNotificationListStyle.jobTypeRow]}>
                            <Col style={HomeNotificationListStyle.jobTypeCol}>
                                <TouchableOpacity onPress={() => {
                                    showService(1)
                                }}
                                                  style={[LayoutStyle.buttonH1, HomeNotificationListStyle.jobTypeButton, HomeNotificationListStyle.jobTypeButtonValid]}>
                                    <Text
                                        style={[LayoutStyle.buttonH1Text, HomeNotificationListStyle.jobTypeButtonText]}>JOB
                                        TYPE & DETAILS</Text>
                                    <Icon name='angle-right' style={HomeNotificationListStyle.jobTypeNextIcon}/>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        :
                        (expanded && selectedSection==3)?
                            <View>
                                <Row>
                                    <Col style={HomeNotificationListStyle.chargeInfoCol}>
                                        <Text style={HomeNotificationListStyle.chargeInfo}>Dispatch Charge:</Text>
                                        <Text style={HomeNotificationListStyle.chargeInfo}>Rate/minute:</Text>
                                    </Col>
                                    <Col style={HomeNotificationListStyle.chargePriceCol}>
                                        <Text style={HomeNotificationListStyle.chargePrice}>${providerRates.min_rate_base} - ${providerRates.max_rate_base}</Text>
                                        <Text style={HomeNotificationListStyle.chargePrice}>${providerRates.min_rate_hour} - ${providerRates.max_rate_hour}</Text>
                                    </Col>
                                </Row>
                                <Row style={[HomeNotificationListStyle.jobTypeRow]}>
                                    <TouchableOpacity  onPress={()=>{showService(4)}}
                                                       style={[
                                                           LayoutStyle.buttonH1, HomeNotificationListStyle.jobTypeButton,
                                                           HomeNotificationListStyle.jobTypeButtonValid
                                                       ]}>
                                        <Text style={[LayoutStyle.buttonH1Text,HomeNotificationListStyle.jobTypeButtonText]}>{(selectedSection==3)?'REQUEST A PRO':'REQUEST A PRO'}</Text>
                                        <Icon name='angle-right' style={HomeNotificationListStyle.jobTypeNextIcon}/>
                                    </TouchableOpacity>
                                </Row>
                                <Row style={HomeNotificationListStyle.cancelBtnRow}>
                                    <Col style={HomeNotificationListStyle.cancelBtnCol}>
                                        <TouchableOpacity onPress={()=>{showService(2)}}>
                                            <Label
                                                style={[LayoutStyle.buttonH1Text, HomeNotificationListStyle.cancelBtnTxt]}>
                                                CANCEL
                                            </Label>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                            </View>
                            :
                            <View/>
                }
            </Grid>
        )
    }
}

export default WorkLocation;
