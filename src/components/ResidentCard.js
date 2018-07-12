/**
 * @providesModule ResidentCard
 */

import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Content, Grid, Row, Col, Label, Thumbnail, Button, Card } from 'native-base';
import AppImages from 'AppImages';
import ResidentCardStyle from 'ResidentCardStyle';
import { API_BASE_URL, _doFormat } from 'global';

class ResidentCard extends Component {

    render () {
        const { _onPress, shadow, sideOption, residentData: { user_id, first_name, last_name, mobile, unit, address }, component } = this.props;
        const ResidentDetails =
        (
            <TouchableOpacity disabled={(!_onPress) ? true : false} onPress={()=>{_onPress()}}>
                <Row>
                    <Col>
                        <Row style={ResidentCardStyle.residentProfileImageRow}>
                            <Col size={0.4} style={ResidentCardStyle.residentProfileImageCol}>
                                <Thumbnail small source={{uri: API_BASE_URL+'/avatar/'+user_id}}
                                           style={ResidentCardStyle.residentProfileImage}
                                />
                            </Col>
                            <Col style={ResidentCardStyle.residentProfileImageCol2}>
                                <Row style={ResidentCardStyle.residentProfileSubTxtRow}>
                                    <Col style={ResidentCardStyle.residentProfileSubTxtCol}>
                                        <Label style={ResidentCardStyle.residentProfileTxt}>{first_name} {last_name}</Label>
                                    </Col>
                                </Row>
                                {
                                    (mobile)
                                    ?
                                        <Row style={ResidentCardStyle.residentProfileSubTxtRow}>
                                            <Col style={ResidentCardStyle.residentProfileSubTxtCol}>
                                                <Label style={ResidentCardStyle.residentProfileTxt2}>{_doFormat('XXX-XXX-XXXX', mobile)}</Label>
                                            </Col>
                                        </Row>
                                    :
                                        null
                                }
                                {
                                    (address)
                                        ?
                                            <Row style={ResidentCardStyle.residentProfileSubTxtRow}>
                                                <Col style={ResidentCardStyle.residentProfileSubTxtCol}>
                                                    <Label style={ResidentCardStyle.residentProfileTxt2}>{address}</Label>
                                                </Col>
                                            </Row>
                                        :
                                            null
                                }
                            </Col>
                            <Col size={0.3} style={ResidentCardStyle.residentProfileImageCol2}>
                                <Label style={ResidentCardStyle.residentProfileTxt3}>{unit}</Label>
                            </Col>
                            {
                                (sideOption)
                                    ?
                                    <Col size={0.05} style={ResidentCardStyle.residentProfileImageCol3}>
                                        <Image style={ResidentCardStyle.menuDotsImage}
                                               source={AppImages.menuDots}/>
                                    </Col>
                                    :
                                    (component) ? component: null
                            }

                        </Row>
                    </Col>
                </Row>
            </TouchableOpacity>
        );
        return(
            <Content>
                {
                    (shadow)
                    ?
                        <Card style={ResidentCardStyle.card}>
                            {ResidentDetails}
                        </Card>
                    :
                        ResidentDetails
                }
            </Content>
        )
    }
}

export default ResidentCard;
