/**
 * @providesModule ViewManagedDefaultSettings
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Grid, Row, Col, Label, Text, View } from 'native-base';
import LayoutStyle from 'LayoutStyle';
import ViewManagedDefaultSettingsStyle from 'ViewManagedDefaultSettingsStyle';
import API from 'AppUtils';
import CreditCard from 'CreditCard';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { NOTIFICATION_GROUP, NOT_TO_EXCEED_LIMITS } from 'global';
import NumberCard from 'NumberCard';
import withProperty from "withProperty";
import withUser from 'withUser';
import SendPropertyCode from 'SendPropertyCode';
import withLoader from 'withLoader';
import { Actions } from 'react-native-router-flux';

class ViewManagedDefaultSettings extends Component {

    constructor (props) {
        super(props);
        this.state = {
            defaultSettings:{},
            cardDetails:null
        }
    }

    async componentWillMount () {
        const { loader } = this.props;
        setTimeout(()=> {loader(true)}, 1);
        await this._getPropertySettingsById();
    }

    _getPaymentsById = (data) => {
        const { loader } = this.props;
        setTimeout(()=> {loader(true)}, 1);
        API.getPaymentsById(data)
            .then((cardDetails) => {
               this.setState({
                   cardDetails: <CreditCard size={0} showCardData={cardDetails}/>
               });
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    _getPropertySettingsById = () => {
        const { viewProperty, loader } = this.props;
        setTimeout(()=> {loader(true)}, 1);
        API.getPropertySettingsById(viewProperty)
            .then((defaultSettings) => {
                const { notify_initiate } = defaultSettings;
                this.setState({
                    defaultSettings
                });
                loader(false);
                this._getPaymentsById(defaultSettings);
            }).catch(() => {
                loader(false);
            });
    }

    _sendPropertyCode = () => {
        const { proertyDetails:{ code }, viewProperty:{ address }, user:{ first_name, last_name } } = this.props;
        SendPropertyCode({code, address, first_name, last_name })
            .then((response) => {
            })
            .catch(() => {
            });
    }

    render() {
        const { proertyDetails:{ code, resident_count } } = this.props;
        const { defaultSettings, defaultSettings:{ rate_adjustment, limit_type, limit_labor, limit_materials, limit_total }, cardDetails } = this.state;
        const notToExceedLimits = (
            NOT_TO_EXCEED_LIMITS.map((value, key) => {
                if (value.limit_type == limit_type) {
                    if (value.subText.length > 1) {
                        return (
                            <Grid key={'Grid'+key}>
                                <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                                    <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                        <Label style={ViewManagedDefaultSettingsStyle.numberTitleLabel}>{value.subText[0]}</Label>
                                    </Col>
                                    <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                        <Label style={ViewManagedDefaultSettingsStyle.numberTitleLabel}>{value.subText[1]}</Label>
                                    </Col>
                                </Row>
                                <Row style={ViewManagedDefaultSettingsStyle.notToExceedRow}>
                                    <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                        <Label style={ViewManagedDefaultSettingsStyle.numberLabel}>{value.sign}{limit_labor}</Label>
                                    </Col>
                                    <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                        <Label style={ViewManagedDefaultSettingsStyle.numberLabel}>{value.sign}{limit_materials}</Label>
                                    </Col>
                                </Row>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid key={'Grid'+key}>
                                <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                                    <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                        <Label style={ViewManagedDefaultSettingsStyle.numberTitleLabel}>{value.subText[0]}</Label>
                                    </Col>
                                </Row>
                                {
                                    (limit_type)
                                    ?
                                        <Row style={ViewManagedDefaultSettingsStyle.notToExceedRow}>
                                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                                <Label style={ViewManagedDefaultSettingsStyle.numberLabel}>{value.sign}{limit_total}</Label>
                                            </Col>
                                        </Row>
                                    : null
                                }
                            </Grid>
                        )
                    }
                }
            })
        );
        return (
            <Grid>
                <Row style={ViewManagedDefaultSettingsStyle.mainRow1}>
                    <Col style={ViewManagedDefaultSettingsStyle.propertyCodeLabelCol}>
                        <Row style={ViewManagedDefaultSettingsStyle.propertyCodeLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.propertyCodeLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.propertyCodeLabel}>PROPERTY CODE</Label>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.propertyCodeRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.propertyCodeCol1}>
                                <Label style={ViewManagedDefaultSettingsStyle.propertyCode}>{code}</Label>
                            </Col>
                            <Col style={ViewManagedDefaultSettingsStyle.propertyCodeCol2}>
                                <TouchableOpacity onPress={()=>{this._sendPropertyCode()}} style={[LayoutStyle.buttonH1,ViewManagedDefaultSettingsStyle.sendBtn]}>
                                    <Text style={[LayoutStyle.buttonH1Text, ViewManagedDefaultSettingsStyle.sendBtnTxt]}>SEND</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={ViewManagedDefaultSettingsStyle.mainRow2}>
                    <Col>
                        <Row style={ViewManagedDefaultSettingsStyle.labelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ViewManagedDefaultSettingsStyle.labelViewTxt2]}>
                                    <Label style={LayoutStyle.labelViewTxt}>ACCOUNT INFORMATION</Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.titleLabel}>BILLING</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {cardDetails}
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.titleLabel}>NOT-TO-EXCEED LIMITS</Label>
                            </Col>
                        </Row>
                        {notToExceedLimits}
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.titleLabel}>NOTIFICATION SETTINGS</Label>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.checkIconRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.checkIconCol}>
                                {
                                    NOTIFICATION_GROUP.map((value, key)=> {
                                        if (defaultSettings[Object.keys(value)[0]]) {
                                            return (
                                                <Row key={"row"+key}>
                                                    <Col size={0.2} style={ViewManagedDefaultSettingsStyle.checkIconCol1}>
                                                        <IconEntypo name="check" style={ViewManagedDefaultSettingsStyle.checkIcon} />
                                                    </Col>
                                                    <Col style={ViewManagedDefaultSettingsStyle.checkIconCol2}>
                                                        <Label style={ViewManagedDefaultSettingsStyle.checkLabel}>{value.text}</Label>
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                    })
                                }
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.titleLabel}>MAINTENANCE FEE</Label>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.numberTitleLabel}>Additional Fee Applied</Label>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.numberLabel}>{rate_adjustment}% of Bill</Label>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.labelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ViewManagedDefaultSettingsStyle.labelViewTxt2]}>
                                    <Label style={LayoutStyle.labelViewTxt}>PROPERTY DETAILS</Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.titleLabelCol}>
                                <Label style={ViewManagedDefaultSettingsStyle.titleLabel}>NUMBER OF UNITS</Label>
                            </Col>
                        </Row>
                        <NumberCard number={resident_count} />
                        <Row style={ViewManagedDefaultSettingsStyle.titleLabelRow}>
                            <Col style={ViewManagedDefaultSettingsStyle.viewMoreCol}>
                                <TouchableOpacity style={[LayoutStyle.buttonH2]} onPress={()=>{Actions.residentList()}}>
                                    <Row style={ViewManagedDefaultSettingsStyle.viewMoreRow}>
                                        <Col style={ViewManagedDefaultSettingsStyle.viewMoreCol1}>
                                            <Label style={ViewManagedDefaultSettingsStyle.viewMoreTxt}>SEE RESIDENT LIST</Label>
                                        </Col>
                                        <Col size={0.05} style={ViewManagedDefaultSettingsStyle.viewMoreCol2}>
                                            <IconEntypo style={ViewManagedDefaultSettingsStyle.viewMoreIcon} name="chevron-right" />
                                        </Col>
                                    </Row>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default withLoader(withUser(withProperty(ViewManagedDefaultSettings)));
