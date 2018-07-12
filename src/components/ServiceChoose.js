/**
 * @providesModule ServiceChoose
 */


import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Row, Col, Text } from 'native-base';
import { SERVICES, HANDYMAN, PLUMBING, HEATING, ELECTRIC } from 'global';
import RegisterServiceStyle from 'RegisterServiceStyle';
import LayoutStyle from  'LayoutStyle';


class ServiceChoose extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { addedServices, onSelect, type } = this.props;
        return (
            <Row style={RegisterServiceStyle.servicesRow}>
                <Col style={RegisterServiceStyle.serviceImageCol} disable={true}>
                    <TouchableOpacity disabled={ (addedServices.indexOf(HANDYMAN) > -1) ? true : false}
                                      onPress={onSelect.bind(this, HANDYMAN)}>
                        <Image style={[LayoutStyle.serviceImage, (addedServices.indexOf(HANDYMAN) > -1) ? RegisterServiceStyle.disable : {}]}
                               source={
                                   (type == HANDYMAN || addedServices.indexOf(HANDYMAN) > -1)
                                       ? SERVICES[HANDYMAN]['images']['select']
                                       : (type != '')
                                       ? SERVICES[HANDYMAN]['images']['disable']
                                       : SERVICES[HANDYMAN]['images']['normal']}/>
                    </TouchableOpacity>
                    <Text style={[RegisterServiceStyle.serviceImageLabel,
                        (type != HANDYMAN && type != '') ? RegisterServiceStyle.disable : {}]}>{SERVICES[HANDYMAN]['title']}</Text>
                </Col>
                <Col style={RegisterServiceStyle.serviceImageCol}>
                    <TouchableOpacity disabled={ (addedServices.indexOf(PLUMBING) > -1) ? true : false}
                                      onPress={onSelect.bind(this,PLUMBING)}>
                        <Image style={[LayoutStyle.serviceImage, (addedServices.indexOf(PLUMBING) > -1) ? RegisterServiceStyle.disable : {}]}
                               source={
                                   (type == PLUMBING || addedServices.indexOf(PLUMBING) > -1)
                                       ? SERVICES[PLUMBING]['images']['select']
                                       : (type != '')
                                       ? SERVICES[PLUMBING]['images']['disable']
                                       : SERVICES[PLUMBING]['images']['normal']}/>
                    </TouchableOpacity>
                    <Text style={[RegisterServiceStyle.serviceImageLabel,
                        (type != PLUMBING && type != '') ? RegisterServiceStyle.disable : {}]}>{SERVICES[PLUMBING]['title']}</Text>
                </Col>
                <Col style={RegisterServiceStyle.serviceImageCol}>
                    <TouchableOpacity disabled={ (addedServices.indexOf(HEATING) > -1) ? true : false}
                                      onPress={onSelect.bind(this,HEATING)}>
                        <Image style={[LayoutStyle.serviceImage, (addedServices.indexOf(HEATING) > -1) ? RegisterServiceStyle.disable : {}]}
                               source={
                                   (type == HEATING || addedServices.indexOf(HEATING) > -1)
                                       ? SERVICES[HEATING]['images']['select']
                                       : (type != '')
                                       ? SERVICES[HEATING]['images']['disable']
                                       : SERVICES[HEATING]['images']['normal']}/>
                    </TouchableOpacity>
                    <Text style={[RegisterServiceStyle.serviceImageLabel,
                        (type != HEATING && type != '') ? RegisterServiceStyle.disable : {}]}>{SERVICES[HEATING]['title']}</Text>
                </Col>
                <Col style={RegisterServiceStyle.serviceImageCol}>
                    <TouchableOpacity disabled={ (addedServices.indexOf(ELECTRIC) > -1) ? true : false}
                                      onPress={onSelect.bind(this,ELECTRIC)}>
                        <Image style={[LayoutStyle.serviceImage, (addedServices.indexOf(ELECTRIC) > -1) ? RegisterServiceStyle.disable : {}]}
                               source={
                                   (type == ELECTRIC || addedServices.indexOf(ELECTRIC) > -1)
                                       ? SERVICES[ELECTRIC]['images']['select']
                                       : (type != '')
                                       ? SERVICES[ELECTRIC]['images']['disable']
                                       : SERVICES[ELECTRIC]['images']['normal']}/>
                    </TouchableOpacity>
                    <Text style={[RegisterServiceStyle.serviceImageLabel,
                        (type != ELECTRIC && type != '') ? RegisterServiceStyle.disable : {}]}>{SERVICES[ELECTRIC]['title']}</Text>
                </Col>
            </Row>
        );
    }
}

export default ServiceChoose;
