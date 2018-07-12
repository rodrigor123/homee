import React, { Component } from 'react';
import { Image, TouchableOpacity, ImageBackground, View } from 'react-native';
import { Content, Text, Grid, Row, Col, Label, Card } from 'native-base';
import ViewPropertyDetailsStyle from 'ViewPropertyDetailsStyle';
import { API_BASE_URL, MANAGING } from 'global';
import LayoutStyle from 'LayoutStyle';
import withProperty from 'withProperty';
import { Actions } from 'react-native-router-flux';
import AppImages from 'AppImages';
import IconEntypo from 'react-native-vector-icons/Entypo';
import ViewManagedDefaultSettings from 'ViewManagedDefaultSettings';
import PropertyProfileCard from 'PropertyProfileCard';
import withLoader from 'withLoader';
import ResidentCard from 'ResidentCard';
import StyleConfig from 'StyleConfig';
import API from 'AppUtils';

class ViewPropertyDetails extends Component{

    constructor(props){
        super(props);

        this.state = {
            owner:null
        }
    }

    componentWillMount(){
        const { viewProperty:{ property } }= this.props;
        if(property){
            this._ownerDetailsByResidentId();
        }

    }

    _ownerDetailsByResidentId = ()  => {
        const { loader, viewProperty } = this.props;
        loader(true);
        API.getResident(viewProperty)
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const { owner } = response;
                    this.setState({
                        owner
                    });
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }


    render(){
        const { viewProperty, viewProperty:{ property, type, notes } } = this.props;
        const { owner } = this.state;
        let viewData = (property) ? property : viewProperty;
        return(
            <Content style={ViewPropertyDetailsStyle.mainContainer}>
                <Grid style={ViewPropertyDetailsStyle.grid1}>
                    <Row style={ViewPropertyDetailsStyle.grid1Row}>
                        <Col style={ViewPropertyDetailsStyle.grid1Col}>
                            <Row>
                                <Col style={ViewPropertyDetailsStyle.propertyImageCol}>
                                    <PropertyProfileCard editBtn={1} propertyData={viewData} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>

                {
                    (owner != null)
                    ?
                        <Grid style={ViewPropertyDetailsStyle.residentCardGrid}>
                            <Row>
                                <Col>
                                    <Row style={ViewPropertyDetailsStyle.titleLabelRow}>
                                        <Col style={ViewPropertyDetailsStyle.titleLabelCol}>
                                            <Label style={ViewPropertyDetailsStyle.titleLabel}>PROPERTY MANAGER</Label>
                                        </Col>
                                    </Row>
                                    <Row style={ViewPropertyDetailsStyle.residentCardRow}>
                                        <Col>
                                            <ResidentCard
                                                component={
                                                    <Row >
                                                        <Col style={ViewPropertyDetailsStyle.propertySubCol}>
                                                            <Image style={ViewPropertyDetailsStyle.propertyOwerIcon}
                                                                   source={AppImages.messageCircleIcon} />
                                                        </Col>
                                                        <Col style={ViewPropertyDetailsStyle.propertySubCol}>
                                                            <Image style={ViewPropertyDetailsStyle.propertyOwerIcon}
                                                                   source={AppImages.callCircleIcon} />
                                                        </Col>
                                                    </Row>
                                                }
                                                residentData={Object.assign(owner, {'user_id': owner.id})} shadow={0} sideOption={false} />
                                        </Col>
                                    </Row>
                                    <Row style={ViewPropertyDetailsStyle.labelRow}>
                                        <Col style={ViewPropertyDetailsStyle.labelCol}>
                                            <View style={[LayoutStyle.labelView, {width:StyleConfig.getWidthByColumn(3)}]}>
                                                <Label style={LayoutStyle.labelViewTxt}>PROPERTY DETAILS</Label>
                                            </View>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    :
                        null
                }

                {(type == MANAGING) ? <ViewManagedDefaultSettings proertyDetails={viewData} /> : null}

                <Grid style={ViewPropertyDetailsStyle.grid2}>
                    <Row style={ViewPropertyDetailsStyle.titleLabelRow}>
                        <Col style={ViewPropertyDetailsStyle.titleLabelCol}>
                            <Label style={ViewPropertyDetailsStyle.titleLabel}>FEATURES</Label>
                        </Col>
                    </Row>
                    <Row style={ViewPropertyDetailsStyle.titleLabelRow}>
                        <Col>
                            <Label style={ViewPropertyDetailsStyle.featuresDescription}>COMING SOON</Label>
                        </Col>
                    </Row>
                </Grid>
                <Grid style={ViewPropertyDetailsStyle.grid3}>
                    <Row style={ViewPropertyDetailsStyle.titleLabelRow}>
                        <Col style={ViewPropertyDetailsStyle.titleLabelCol}>
                            <Label style={ViewPropertyDetailsStyle.titleLabel}>NOTES</Label>
                        </Col>
                    </Row>
                    <Row style={ViewPropertyDetailsStyle.noteLabelRow}>
                        <Col>
                            <Label style={ViewPropertyDetailsStyle.noteDescription}>
                                { notes }
                            </Label>
                        </Col>
                    </Row>
                </Grid>
                <Grid style={ViewPropertyDetailsStyle.grid3}>
                    <Row style={ViewPropertyDetailsStyle.labelRow}>
                        <Col style={ViewPropertyDetailsStyle.labelCol}>
                            <View style={[LayoutStyle.labelView, ViewPropertyDetailsStyle.labelViewTxt2]}>
                                <Label style={LayoutStyle.labelViewTxt}>RECENT JOBS</Label>
                            </View>
                        </Col>
                    </Row>
                    <Row style={ViewPropertyDetailsStyle.titleLabelRow}>
                        <Col>
                            <Card style={ViewPropertyDetailsStyle.cardItem}>
                                <TouchableOpacity>
                                    <Row style={ViewPropertyDetailsStyle.cardBodyRow}>
                                        <Col style={ViewPropertyDetailsStyle.cardBodyCol}>
                                            <Row>
                                                <Col size={0.5}>
                                                    <TouchableOpacity style={[LayoutStyle.buttonH2, ViewPropertyDetailsStyle.blueImage]}>

                                                    </TouchableOpacity>
                                                </Col>
                                                <Col style={ViewPropertyDetailsStyle.priceCol}>
                                                    <Row>
                                                        <Col style={ViewPropertyDetailsStyle.cardTitleCol}>
                                                            <Row style={ViewPropertyDetailsStyle.cardTitleSubRow}>
                                                                <Col style={ViewPropertyDetailsStyle.cardTitleSubCol1}>
                                                                    <Label style={ViewPropertyDetailsStyle.cardTitle}>Jeff Gordon</Label>
                                                                </Col>
                                                                <Col style={ViewPropertyDetailsStyle.cardTitleSubCol2}>
                                                                    <Label style={ViewPropertyDetailsStyle.cardDate}>4/22/17</Label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Label style={ViewPropertyDetailsStyle.jobRate}>$455.62</Label>
                                                    </Row>
                                                </Col>
                                                <Col size={0.8} style={ViewPropertyDetailsStyle.actionCol}>
                                                    <Image source={AppImages.jobAction} style={ViewPropertyDetailsStyle.actionImage}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </TouchableOpacity>
                            </Card>
                            <Card style={ViewPropertyDetailsStyle.cardItem}>
                                <TouchableOpacity>
                                    <Row style={ViewPropertyDetailsStyle.cardBodyRow}>
                                        <Col style={ViewPropertyDetailsStyle.cardBodyCol}>
                                            <Row>
                                                <Col size={0.5}>
                                                    <TouchableOpacity style={[LayoutStyle.buttonH2, ViewPropertyDetailsStyle.blueImage]}>

                                                    </TouchableOpacity>
                                                </Col>
                                                <Col style={ViewPropertyDetailsStyle.priceCol}>
                                                    <Row>
                                                        <Col style={ViewPropertyDetailsStyle.cardTitleCol}>
                                                            <Row style={ViewPropertyDetailsStyle.cardTitleSubRow}>
                                                                <Col style={ViewPropertyDetailsStyle.cardTitleSubCol1}>
                                                                    <Label style={ViewPropertyDetailsStyle.cardTitle}>Jeff Gordon</Label>
                                                                </Col>
                                                                <Col style={ViewPropertyDetailsStyle.cardTitleSubCol2}>
                                                                    <Label style={ViewPropertyDetailsStyle.cardDate}>4/22/17</Label>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Label style={ViewPropertyDetailsStyle.jobRate}>$455.62</Label>
                                                    </Row>
                                                </Col>
                                                <Col size={0.8} style={ViewPropertyDetailsStyle.actionCol}>
                                                    <Image source={AppImages.jobAction} style={ViewPropertyDetailsStyle.actionImage}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </TouchableOpacity>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={ViewPropertyDetailsStyle.titleLabelRow}>
                        <Col style={ViewPropertyDetailsStyle.viewHistoryCol}>
                            <TouchableOpacity style={[LayoutStyle.buttonH2]} onPress={() => {Actions.jobHistory()}}>
                                <Label style={ViewPropertyDetailsStyle.viewHistory}>GO TO JOB HISTORY
                                    <IconEntypo size={15} style={ViewPropertyDetailsStyle.viewHistoryIcon} name="chevron-thin-right" />
                                </Label>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }
}

export default withLoader(withProperty(ViewPropertyDetails));