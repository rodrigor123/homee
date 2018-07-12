/**
 * @providesModule PropertySettings
 */

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import ManagingStyle from 'ManagingStyle';
import LayoutStyle from 'LayoutStyle';
import withLoader from 'withLoader';
import API from 'AppUtils';
import CreditCard from 'CreditCard';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RedioButton from 'RedioButton';
import StyleConfig from 'StyleConfig';
import { deviceType, NOTIFICATION_GROUP, NOT_TO_EXCEED_LIMITS } from 'global';
import SliderBar from 'SliderBar';
import withProperty from 'withProperty';

let submitData = {
    payment_id: 0,
    limit_type:0,
    limit_labor:0,
    limit_materials:0,
    limit_total:0,
    notify_request:0,
    notify_initiate:0,
    notify_complete:0
};
let callApi;
class PropertySettings extends Component {

    constructor(props){
        super(props);
        this.state = {
            noDefaultSettings: true,
            cardList:[],
            rate_adjustment:0,
            limit_labor:50,
            limit_materials:50,
            limit_total:50,
            notToExceedLimits:NOT_TO_EXCEED_LIMITS,
            notificationSettings:NOTIFICATION_GROUP
        }

        this._savePropertySettingsById = this._savePropertySettingsById.bind(this);
    }

    async componentWillMount(){
        await this._getPayments();
    }

    async _getSettingsData(){
        const { viewProperty } = this.props;
        if (viewProperty != null) {
            // When edit property
            await this._getPropertySettings();
        } else {
            // When create new property
            await this._getDefaultSettings();
        }
        callApi=true;
    }

    _getPropertySettings = () => {
        const { viewProperty } = this.props;
        API.getPropertySettingsById(viewProperty)
            .then((response) => {
                this._preFillSettings('_getPropertySettings', response);
            });
    }

    _getDefaultSettings = () => {
        API.getDefaultSettings()
            .then((response) => {
                this._preFillSettings('_getDefaultSettings', response);
            });
    }

    _preFillSettings = (type, response) => {
        const { setPropertySettings, loader } = this.props;
        const { payment_id, rate_adjustment, limit_type, limit_labor, limit_materials, limit_total, notify_request, notify_initiate, notify_complete } = response;
        setTimeout(()=>{loader(true)}, 1);
        this.setState({ rate_adjustment, limit_labor, limit_materials, limit_total, noDefaultSettings:false });
        this._toggleRedio(limit_type);
        (payment_id) ? this._selectCard(payment_id) : undefined;
        this._toggleCheck(-1);
        if (notify_request) { this._toggleCheck(0); }
        if (notify_initiate) { this._toggleCheck(1); }
        if (notify_complete) { this._toggleCheck(2); }
        if (type == '_getPropertySettings') {
            setTimeout(()=>{loader(false)}, 1);
            submitData = {payment_id, rate_adjustment, limit_type, limit_labor, limit_materials, limit_total, notify_request, notify_initiate, notify_complete, 'use_default':response.use_default};
            setPropertySettings({payment_id, rate_adjustment, limit_type, limit_labor, limit_materials, limit_total, notify_request, notify_initiate, notify_complete, 'use_default':response.use_default})
        } else {
            setTimeout(()=>{loader(false)}, 1);
            submitData = {payment_id, rate_adjustment, limit_type, limit_labor, limit_materials, limit_total, notify_request, notify_initiate, notify_complete};
            setPropertySettings({payment_id, rate_adjustment, limit_type, limit_labor, limit_materials, limit_total, notify_request, notify_initiate, notify_complete})
        }
    }

    _getPayments = () => {
        const { loader } = this.props;
        setTimeout(() => { loader(true);}, 1);
        let i=0, cardList=[];
        let responsePromise = new Promise((resolve) => {
            API.getPayments()
                .then((response) => {
                    const { error } = response;
                    if(!error) {
                        const { payments } = response;
                        payments.map((value, key)=>{
                            if(value.default) {
                                payments[key].selected = true;
                                submitData.payment_id = payments[key].id;
                            } else {
                                payments[key].selected = false;
                            }
                            if(i < payments.length) {
                                cardList.push([(payments[i] != undefined) ? payments[i] : null, (payments[i+1] != undefined) ? payments[i+1] : null])
                                if(payments.length == 1){
                                    resolve();
                                }
                            } else {
                                resolve();
                            }
                            i=i+2;
                        });

                    }
                    loader(false);
                });
        });
        responsePromise.then(() => {
            this.setState({
                cardList
            });
            this._getSettingsData();
        });
    }

    _toggleRedio = (index) => {
        let tempRedioData = this.state.notToExceedLimits;
        tempRedioData.find((value, key) => {
            if(index == key) {
                submitData.limit_type = tempRedioData[key].limit_type;
                tempRedioData[key].selected = true;
            } else {
                tempRedioData[key].selected = false;
            }
        });
        this.setState({
            notToExceedLimits: tempRedioData
        });
    }

    _toggleCheck = (index) => {
        let tempRedioData = this.state.notificationSettings;
        if (index == -1) {
            tempRedioData.map((value, key) => {
                tempRedioData[key].selected = false;
                tempRedioData[key][Object.keys(tempRedioData[key])[0]] = 0;
                submitData[Object.keys(tempRedioData[key])[0]] = tempRedioData[key][Object.keys(tempRedioData[key])[0]];
            });

        } else {
            tempRedioData.map((value, key) => {
                if(index == key) {
                    tempRedioData[key].selected = !tempRedioData[key].selected;
                    tempRedioData[key][Object.keys(tempRedioData[key])[0]] = (tempRedioData[key].selected) ? 1 : 0;
                    submitData[Object.keys(tempRedioData[key])[0]] = tempRedioData[key][Object.keys(tempRedioData[key])[0]];
                }
            });
        }
        this.setState({
            notificationSettings: tempRedioData
        });
    }

    _onChangeRate = (name, value) => {
        submitData[name] = value;
        this.setState({[name]:value});
    }

    _selectCard = (payment_id) => {
        let cardList = this.state.cardList;
        cardList.map((row, rowKey) => {
            row.map((value, colKey) => {
                if (cardList[rowKey][colKey] != null) {
                    if (value.id == payment_id) {
                        cardList[rowKey][colKey].selected = true;
                        submitData.payment_id = cardList[rowKey][colKey].id;
                    } else {
                        cardList[rowKey][colKey].selected = false;
                    }
                }
            });
        });
        this.setState({
            cardList
        });
    }

    _saveDefaultSetting = () => {
        const { loader, setPropertySettings, propertySettings } = this.props;
        const { noDefaultSettings } = this.state;
        setTimeout(() => { loader(true);}, 1);
        if (noDefaultSettings) { // Check for first property with default settings
            API.propertiesDefault(submitData)
                .then((response) => {
                    const {error} = response;
                    setTimeout(() => { loader(false);}, 1);
                    setPropertySettings(Object.assign(submitData, {'use_default':1}));
                    Actions.ownerResident();
                });
        } else {
            setTimeout(() => { loader(false);}, 1000);
            // Check for is any settings is changes then set 0 in use default and add in property settings else use default 1
            if(JSON.stringify(submitData) == JSON.stringify(propertySettings)) {
                //Same Settings
                setPropertySettings({'use_default':1 , ...submitData});
            } else {
                //Not Same Settings
                setPropertySettings({'use_default':0 , ...submitData});
            }
            Actions.ownerResident();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps._updateSettings && callApi){
            const { viewProperty, propertySettings } = this.props;
            if(JSON.stringify(submitData) != JSON.stringify(propertySettings)) {
                this._savePropertySettingsById({'data':submitData, ...{'use_default':0}, 'property_id':viewProperty.id});
            }
        }
    }

    _savePropertySettingsById = (data) => {
        API.savePropertySettingsById(data)
        .then((response) => {
            callApi=false;
            const { error } = response;
            if(!error){
            }
        });
    }

    render(){
        const { cardList, notToExceedLimits, notificationSettings, rate_adjustment, limit_labor, limit_materials, limit_total } = this.state;
        const { viewProperty } = this.props;
        const listOfSubComponent = [
            {
                component:null
            },
            {
                component:(
                    <Grid>
                        <Row style={ManagingStyle.notToRedioSliderSubRow2}>
                            <Col>
                                <Label style={ManagingStyle.notToRedioSliderLabel}>{notToExceedLimits[1].subText[0]}</Label>
                                <SliderBar name="limit_labor" start="$50" end="$2500" textAlign="center"
                                           maximumValue={2500} minimumValue={50} step={1}
                                           value={limit_labor} signBefore="$" _onChange={this._onChangeRate.bind(this)}
                                />
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.notToRedioSliderSubRow2}>
                            <Col>
                                <Label style={ManagingStyle.notToRedioSliderLabel}>{notToExceedLimits[1].subText[1]}</Label>
                                <SliderBar name="limit_materials" start="$50" end="$2500" textAlign="center"
                                           maximumValue={2500} minimumValue={50} step={1}
                                           value={limit_materials} signBefore="$" _onChange={this._onChangeRate.bind(this)}
                                />
                            </Col>
                        </Row>
                    </Grid>
                )
            },
            {
                component:(
                    <Grid>
                        <Row style={ManagingStyle.notToRedioSliderSubRow2}>
                            <Col>
                                <Label style={ManagingStyle.notToRedioSliderLabel}>{notToExceedLimits[2].subText[0]}</Label>
                                <SliderBar name="limit_total" start="$50" end="$5000" textAlign="center"
                                           maximumValue={2500} minimumValue={50} step={1}
                                           value={limit_total} signBefore="$" _onChange={this._onChangeRate.bind(this)}
                                />
                            </Col>
                        </Row>
                    </Grid>
                )
            }
        ];
        return(
            <Grid style={ManagingStyle.grid2}>
                {
                    (viewProperty != null)
                    ?
                        <Row style={[ManagingStyle.propertyCodeRow, StyleConfig.shadow]}>
                            <Col style={ManagingStyle.propertyCodeCol}>
                                <Label style={ManagingStyle.propertyCodeText1}>This is your property code.</Label>
                                <Label style={ManagingStyle.propertyCodeText2}>
                                    You'll be able to send it to your residents so
                                    they can order under your account once you
                                    associate a payment form to this property:
                                </Label>
                                <Label style={ManagingStyle.propertyCode}>{viewProperty.code}</Label>
                            </Col>
                        </Row>
                    :
                     null
                }

                <Row style={ManagingStyle.grid2Row}>
                    <Col style={ManagingStyle.grid2Col}>
                        <Row style={ManagingStyle.labelRow}>
                            <Col style={ManagingStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ManagingStyle.labelViewTxt2]}>
                                    <Label style={LayoutStyle.labelViewTxt}>ACCOUNT INFORMATION</Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.noteLabelRow}>
                            <Col style={ManagingStyle.noteLabelCol}>
                                <Label style={ManagingStyle.noteLabel}>
                                    Set automatic billing accounts and not-to-exceed limits on jobs.
                                </Label>
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.labelRow}>
                            <Col style={ManagingStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ManagingStyle.titleLabelTxt]}>
                                    <Label style={[LayoutStyle.labelViewTxt, ManagingStyle.titleLabelSubTxt]}>BILLING</Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.noteLabelRow}>
                            <Col style={ManagingStyle.noteLabelCol}>
                                <Label style={ManagingStyle.noteLabel}>
                                    Please select or add a form of payment.
                                </Label>
                            </Col>
                        </Row>
                        {
                            cardList.map((row, key) => {
                                return (
                                    <Row key={"cardRow" + key} style={LayoutStyle.cardListRow}>
                                        {
                                            row.map((value, valueKey) => {
                                                return (
                                                    (value != null)
                                                        ?
                                                        <Col key={"card1" + valueKey} style={LayoutStyle.cardListCol1}>
                                                            <TouchableOpacity onPress={() => {
                                                                this._selectCard(value.id)
                                                            }}>
                                                                <CreditCard
                                                                    selectedCard={(value.selected) ? LayoutStyle.cardListBtnSelected : {}}
                                                                    size={0} showCardData={value}/>
                                                            </TouchableOpacity>
                                                        </Col>
                                                        :
                                                        <Col key={"card1" + valueKey}></Col>
                                                )
                                            })
                                        }
                                    </Row>
                                )
                            })
                        }
                        <Row style={ManagingStyle.addBtnRow}>
                            <Col style={ManagingStyle.addBtnCol}>
                                <TouchableOpacity style={[LayoutStyle.buttonH1, ManagingStyle.addBtn]}
                                                  onPress={()=> { Actions.addCreditCard() }}>
                                    <Row style={ManagingStyle.addBtnPlusRow}>
                                        <Col size={0.1} style={ManagingStyle.addBtnPlusCol1}>
                                            <IconEntypo name="plus" style={ManagingStyle.addBtnPlus} />
                                        </Col>
                                        <Col style={ManagingStyle.addBtnPlusCol2}>
                                            <Text style={ManagingStyle.addBtnTxt}>ADD CREDIT CARD</Text>
                                        </Col>
                                    </Row>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.labelRow}>
                            <Col style={ManagingStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ManagingStyle.titleLabelTxt]}>
                                    <Label style={[LayoutStyle.labelViewTxt, ManagingStyle.titleLabelSubTxt]}>
                                        NOT-TO-EXCEED LIMITS
                                    </Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.noteLabelRow}>
                            <Col style={ManagingStyle.noteLabelCol}>
                                <Label style={ManagingStyle.noteLabel}>
                                    Set limits for cost of labor,
                                    materials, or total cost that jobs are not to exceed.
                                </Label>
                            </Col>
                        </Row>
                        <Grid style={ManagingStyle.notToRedioBtnGrid}>
                            {
                                notToExceedLimits.map((value, key) => {
                                    return (
                                        <Row key={"row"+key} style={ManagingStyle.notToRedioSliderRow}>
                                            <Col style={ManagingStyle.notToRedioSliderCol}>
                                                <Row style={ManagingStyle.notToRedioSliderSubRow1}>
                                                    <Col>
                                                        <RedioButton
                                                            text={value.text}
                                                            toggleRedio={value.selected}
                                                            _toggleRedio={() => {this._toggleRedio(key)}} />
                                                    </Col>
                                                </Row>
                                                {(value.selected)  ? listOfSubComponent[key].component : null}
                                            </Col>
                                        </Row>
                                    )
                                })
                            }

                        </Grid>
                        <Row style={ManagingStyle.labelRow}>
                            <Col style={ManagingStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ManagingStyle.labelViewTxt2]}>
                                    <Label style={LayoutStyle.labelViewTxt}>MAINTENANCE FEE</Label>
                                </View>
                            </Col>
                        </Row>
                        <SliderBar name="rate_adjustment" start="0%" end="100%"
                                   maximumValue={100} minimumValue={0} step={1}
                                   value={rate_adjustment} signAfter="%" _onChange={this._onChangeRate.bind(this)}
                        />
                        <Row style={ManagingStyle.noteLabelRow}>
                            <Col style={ManagingStyle.noteLabelCol}>
                                <Label style={ManagingStyle.noteLabel}>
                                    This is your management fee applied on top of labor, materials and dispatch charges.
                                </Label>
                            </Col>
                        </Row>

                        <Row style={ManagingStyle.labelRow}>
                            <Col style={ManagingStyle.labelCol}>
                                <View style={[LayoutStyle.labelView, ManagingStyle.labelViewTxt2]}>
                                    <Label style={LayoutStyle.labelViewTxt}>NOTIFICATION SETTINGS</Label>
                                </View>
                            </Col>
                        </Row>
                        <Row style={ManagingStyle.noteLabelRow}>
                            <Col style={ManagingStyle.noteLabelCol}>
                                <Label style={ManagingStyle.noteLabel}>
                                    Receive email alerts at various stages of a resident's service request process.
                                </Label>
                            </Col>
                        </Row>
                        {
                            notificationSettings.map((value, key) => {
                                return (
                                    <Row key={"redioRow"+key} style={ManagingStyle.notToRedioBtnRow}>
                                        <RedioButton
                                            type="check"
                                            text={value.text}
                                            toggleRedio={value.selected}
                                            _toggleRedio={() => {this._toggleCheck(key)}} />
                                    </Row>
                                )
                            })
                        }
                        {
                            (viewProperty == null)
                            ?
                                <Row>
                                    <Col>
                                        <Row style={ManagingStyle.saveBtnRow}>
                                            <Col style={ManagingStyle.saveBtnCol}>
                                                <TouchableOpacity
                                                    onPress={()=>{this._saveDefaultSetting()}}
                                                    style={[LayoutStyle.buttonH1, ManagingStyle.saveBtn]}>
                                                    <Row style={ManagingStyle.saveBtnSubRow}>
                                                        <Col style={ManagingStyle.saveBtnCol1}>
                                                            <Label style={[LayoutStyle.buttonH1Text, ManagingStyle.saveBtnTxt]}>
                                                                SAVE & CONTINUE
                                                            </Label>
                                                        </Col>
                                                        <Col size={0.15} style={ManagingStyle.saveBtnCol2}>
                                                            <FontAwesomeIcon size={StyleConfig.fontSizeH1} name="angle-right" style={ManagingStyle.saveBtnArrow} />
                                                        </Col>
                                                    </Row>
                                                </TouchableOpacity>
                                            </Col>
                                        </Row>
                                        <Row style={ManagingStyle.cancelBtnRow}>
                                            <Col style={ManagingStyle.cancelBtnCol}>
                                                <TouchableOpacity onPress={() => {Actions.addProperty()}}>
                                                    <Label
                                                        style={[LayoutStyle.buttonH1Text, ManagingStyle.cancelBtnTxt]}>
                                                        CANCEL
                                                    </Label>
                                                </TouchableOpacity>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            :
                                null
                        }

                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withProperty(withLoader(PropertySettings));

