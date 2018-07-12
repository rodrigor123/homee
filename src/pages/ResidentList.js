import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Content, Grid, Row, Col, Label, Text, Thumbnail, Button } from 'native-base';
import ResidentListStyle from 'ResidentListStyle';
import LayoutStyle from 'LayoutStyle';
import Swiper from 'Swiper';
import ResidentCard from 'ResidentCard';
import StyleConfig from 'StyleConfig';
import API from 'AppUtils';
import withLoader from 'withLoader';
import withProperty from 'withProperty';
import withResident from 'withResident';
import { Actions } from 'react-native-router-flux';
import RedioButton from 'RedioButton';

class ResidentList extends Component {

    constructor(props){
        super(props);

        this.state = {
            residents:[],
            removeGroupBtn:false
        }
    }

    componentWillMount() {
        const { loader, viewProperty:{ id } } = this.props;
        setTimeout(()=> {loader(true);}, 1);
        API.getResidentByPropertyId({'property_id':id})
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const { residents } = response;
                    if (residents != undefined) {
                        this.setState({
                            residents
                        });
                    }
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    _removeResidents = (resident) => {
        const { setViewResident } = this.props;
        const { residents } = this.state;
        let tempData = [];
        if(!resident) {
            residents.map((value, key) => {
                if(value.selected){
                    tempData.push(value);
                }
            });
            this._validateRemoveEvent(tempData);
        } else {
            tempData = [resident];
            this._validateRemoveEvent(tempData);
        }

    }

    _validateRemoveEvent = (data) => {
        const { setViewResident } = this.props;
        if (data.length) {
            setViewResident(data);
            Actions.removeResident();
        }
    }

    _editMultipleOption = () => {
        this.setState({
            removeGroupBtn: true
        });
    }

    _toggleCheck = (index) => {
        let tempRedioData = this.state.residents;
        tempRedioData.map((value, key) => {
            if(index == key) {
                tempRedioData[key].selected = !tempRedioData[key].selected;
            }
        });
        this.setState({
            residents: tempRedioData
        });
    }

    render(){
        const { residents, removeGroupBtn } = this.state;
        const { viewProperty:{ address } } = this.props;
        return(
            <Content style={ResidentListStyle.content}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={ResidentListStyle.residentTitleTxtRow}>
                                <Col style={ResidentListStyle.residentTitleTxtCol}>
                                    <Label style={ResidentListStyle.residentTitleTxt}>RESIDENT LIST</Label>
                                </Col>
                            </Row>
                            <Row style={ResidentListStyle.residentSubTitleTxtRow}>
                                <Col style={ResidentListStyle.residentSubTitleTxtCol}>
                                    <Label style={ResidentListStyle.residentSubTitleTxt}>{address}</Label>
                                </Col>
                            </Row>
                            <Row style={ResidentListStyle.titleLabelRow}>
                                <Col style={ResidentListStyle.titleLabelCol}>
                                    <Label style={ResidentListStyle.titleLabel}>WAITING FOR APPROVAL</Label>
                                </Col>
                            </Row>
                            {
                                (residents.length)
                                ?
                                    <Row style={ResidentListStyle.residentListRow}>
                                        <Col>
                                            {
                                                residents.map((value, key) => {
                                                    if(!value.status) {
                                                        return <Swiper
                                                            style={[StyleConfig.shadow, ResidentListStyle.swiper]}
                                                            key={value.id}
                                                            body={<ResidentCard residentData={value} shadow={0} sideOption={true} />}
                                                            right={
                                                                <Button danger onPress={() => { this._removeResidents(value) }}>
                                                                    <Text style={ResidentListStyle.removeBtnTxt}>REMOVE</Text>
                                                                </Button>
                                                            }
                                                        />
                                                    }
                                                })
                                            }
                                        </Col>
                                    </Row>
                                :
                                    null
                            }
                            <Row style={ResidentListStyle.titleLabelRow}>
                                <Col style={ResidentListStyle.titleLabelCol}>
                                    <Label style={ResidentListStyle.titleLabel}>APPROVED RESIDENTS</Label>
                                </Col>
                                {
                                    (residents.length)
                                    ?
                                        <Col style={ResidentListStyle.titleLabelCol2}>
                                            {
                                                (removeGroupBtn)
                                                    ?
                                                    <TouchableOpacity onPress={() => { this._removeResidents() }}
                                                                      style={[LayoutStyle.buttonH1,ResidentListStyle.removeGroupBtn]}>
                                                        <Text style={[LayoutStyle.buttonH1Text, ResidentListStyle.removeGroupBtnTxt]}>REMOVE</Text>
                                                    </TouchableOpacity>
                                                    :
                                                    <TouchableOpacity onPress={() => {this._editMultipleOption() }}
                                                                      style={[LayoutStyle.buttonH1,ResidentListStyle.editBtn]}>
                                                        <Text style={[LayoutStyle.buttonH1Text, ResidentListStyle.editBtnTxt]}>EDIT</Text>
                                                    </TouchableOpacity>
                                            }
                                        </Col>
                                    :
                                        null
                                }

                            </Row>
                            {
                                (residents.length)
                                ?
                                    <Row style={ResidentListStyle.residentListRow}>
                                        <Col>
                                            {
                                                residents.map((value, key) => {
                                                    if(value.status) {
                                                        return (
                                                            <Row style={(removeGroupBtn) ? ResidentListStyle.swiperRow2 : ResidentListStyle.swiperRow1}>
                                                                {
                                                                    (removeGroupBtn)
                                                                    ?
                                                                        <Col size={0.1} style={ResidentListStyle.swiperCol1}>
                                                                            <RedioButton type="circle" selectedIcon={ResidentListStyle.removeMultiRoundSelectedIcon}
                                                                                         btnStyle={ResidentListStyle.removeMultiRoundSelectedIconBtn}
                                                                                         selectedBtn={ResidentListStyle.removeMultiRoundSelectedBtn}
                                                                                         toggleRedio={value.selected}
                                                                                         _toggleRedio={() => {this._toggleCheck(key)}}
                                                                            />
                                                                        </Col>
                                                                    :
                                                                        null
                                                                }
                                                                <Col style={ResidentListStyle.swiperCol2}>
                                                                    <Swiper
                                                                        style={[StyleConfig.shadow, ResidentListStyle.swiper]}
                                                                        key={value.id}
                                                                        body={<ResidentCard _onPress={(removeGroupBtn) ? () => {this._toggleCheck(key)} : undefined} residentData={value} shadow={0} sideOption={true} />}
                                                                        right={
                                                                            <Button danger onPress={() => { this._removeResidents(value) }}>
                                                                                <Text style={ResidentListStyle.removeBtnTxt}>REMOVE</Text>
                                                                            </Button>
                                                                        }
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        )
                                                    }
                                                })
                                            }
                                        </Col>
                                    </Row>
                                :
                                    null
                            }
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }
}

export default withResident(withProperty(withLoader(ResidentList)));
