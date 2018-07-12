import React, { Component } from 'react';
import { Image, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { SERVICES, API_BASE_URL } from 'global';
import JobRequestStyle from 'JobRequestStyle';
import LayoutStyle from 'LayoutStyle';
import ResidentCard from 'ResidentCard';
import ImageViewer from 'ImageViewer';
import Swiper from 'react-native-swiper';
import StyleConfig from 'StyleConfig';
import withLoader from 'withLoader';
import RedioButton from 'RedioButton';
import API from 'AppUtils';
import withToast from 'withToast';
import ReduxField from 'ReduxField';
import { reduxForm } from 'redux-form';

const tempId = 'c18d9c25fabcf197a45f3bb0b76d4d59';
class JobRequest extends Component {

    constructor(props){
        super(props);

        this.state = {
            imageModal:false,
            residentCost:false,
            requestDetails:null,
            serviceType:SERVICES,
            slider:null,
            requestDeline:false,
            btnDisable:false
        }
    }

    _handleImageModal = (imageModal) => {
        this.setState({imageModal});
    }

    componentDidMount(){
        const { loader } = this.props;
        setTimeout(()=>{loader(true)}, 1);
        let setData = new Promise((resolve, reject) => {
            API.getConsumerRequestById({'id': tempId})
            .then((response) => {
                const { error } = response;
                if(!error) {
                    resolve(response);
                } else {
                    reject();
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
        });
        setData.then((requestDetails) => {
            const { consumer_request_images, id } = requestDetails;
            this.setState({
                requestDetails,
                slider:(
                    <Swiper key={'properties-image-'+new Date().toISOString()}
                            style={JobRequestStyle.swiper}
                            dotColor={StyleConfig.whiteFullLight}
                            activeDotColor={StyleConfig.whiteMediumLight}
                            showsButtons={false}>
                        {
                            consumer_request_images.map((image,iKey) => (
                                <TouchableWithoutFeedback onPress={this._handleImageModal.bind(this,true)} style={JobRequestStyle.sliderView} key={iKey}>
                                    <Image style={JobRequestStyle.sliderImage}
                                           source={{uri:API_BASE_URL+'/consumer_requests/'+ id +'/images/'+image.id}} />
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </Swiper>
                )
            });
        })
        .catch(() => {})
    }

    _residentCost = () => {
        this.setState({
            residentCost: !this.state.residentCost
        })
    }

    _responseOfApi = (message, type) => {
        const { loader, toast } = this.props;
        this.setState({
            btnDisable:false
        });
        loader(false);
        (message) ? toast({text:message, type, navBar:true}) : undefined;
        Actions.home();
    }

    _requestFeedback = (data) => {
        const { requestDetails:{ id } } = this.state;
        const { loader } = this.props;
        this.setState({
            btnDisable:true
        });
        setTimeout(()=>{loader(true)}, 1);
        API.setConsumerRequestById({id, 'bodyData':data})
            .then((response) => {
                const { error } = response;
                const { status } = data;
                if(!error) {
                    if(status == 90) {
                        this._responseOfApi('Request approved', 'success');
                    } else {
                        this._responseOfApi('Request declined', 'danger');
                    }

                } else {
                    this._responseOfApi(message, 'danger');
                }
            })
            .catch(() => {
                this._responseOfApi('Something went wrong', 'danger');
            });
    }

    _declineRequest = (requestDeline) => {
        this.props.change('notes', '');
        this.setState({
            requestDeline
        });
    }

    _sendDeclineRequest = (data) => {
        const { notes } = data;
        this._requestFeedback({notes, 'status':126});
    }

    render(){
        if(this.state.requestDetails === null){
            return false;
        }
        const { invalid, handleSubmit } = this.props;
        const { btnDisable, requestDeline, slider, imageModal, serviceType, residentCost, requestDetails:{ id:requesterId, consumer_request_images, address, service_type, consumer_request_note, tenant:{ id, first_name, last_name, mobile } } } = this.state;
        return(
            <Content style={JobRequestStyle.content}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={JobRequestStyle.serviceTypeIconRow}>
                                <Col size={0.15} style={JobRequestStyle.serviceTypeIconCol1}>
                                    <Image source={serviceType[service_type].images.select} style={JobRequestStyle.serviceTypeIcon} />
                                </Col>
                                <Col style={JobRequestStyle.serviceTypeIconCol2}>
                                    <Label style={JobRequestStyle.serviceTypeLabel}>{serviceType[service_type].title.toUpperCase()} REQUEST</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ResidentCard shadow={1} residentData={{'user_id': id, first_name, last_name, address}} />
                                </Col>
                            </Row>
                            {
                                (!requestDeline)
                                ?
                                    <Row>
                                        <Col>
                                            <Row style={JobRequestStyle.sliderRow}>
                                                <Col style={JobRequestStyle.sliderCol}>
                                                    {slider}
                                                </Col>
                                            </Row>
                                            <Row style={JobRequestStyle.consumerRequestDescRow}>
                                                <Col style={JobRequestStyle.consumerRequestDescCol}>
                                                    <Label style={JobRequestStyle.propDetailTxt}>
                                                        {consumer_request_note}
                                                    </Label>
                                                </Col>
                                            </Row>
                                            <Row style={JobRequestStyle.redioButtonRow}>
                                                <Col style={JobRequestStyle.redioButtonCol}>
                                                    <RedioButton text={'Resident is responsible for cost'}
                                                                 toggleRedio={residentCost}
                                                                 type="check"
                                                                 _toggleRedio={()=>{this._residentCost()}}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row style={JobRequestStyle.choiceBtnRow}>
                                                <Col style={[JobRequestStyle.choiceBtnCol1, {opacity:(residentCost) ? 0.5 : 1}]}>
                                                    <TouchableOpacity onPress={()=>{this._declineRequest(true)}}
                                                                      disabled={residentCost}
                                                                      style={[JobRequestStyle.choiceBtn, JobRequestStyle.declineBtn, StyleConfig.shadow]}>
                                                        <Text style={JobRequestStyle.choiceBtnTxt}>DECLINE</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                                <Col style={JobRequestStyle.choiceBtnCol2}>
                                                    <TouchableOpacity
                                                        onPress={()=>{this._requestFeedback({'status':90})}}
                                                        style={[JobRequestStyle.choiceBtn, JobRequestStyle.acceptBtn, StyleConfig.shadow,
                                                            (btnDisable) ? JobRequestStyle.acceptBtnDisable : JobRequestStyle.acceptBtn]}>
                                                        <Text style={JobRequestStyle.choiceBtnTxt}>APPROVE</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                            </Row>
                                            <Row style={JobRequestStyle.dismissBtnRow}>
                                            <Col style={JobRequestStyle.dismissBtnCol}>
                                                <TouchableOpacity onPress={() => { Actions.home(); }}
                                                                  style={JobRequestStyle.dismissBtn}>
                                                    <Text style={JobRequestStyle.dismissBtnTxt}>DISMISS</Text>
                                                </TouchableOpacity>
                                            </Col>
                                        </Row>
                                        </Col>
                                    </Row>
                                :
                                    <Grid>
                                        <Row style={JobRequestStyle.titleLabelRow}>
                                            <Col style={JobRequestStyle.titleLabelCol}>
                                                <Label style={JobRequestStyle.titleLabel}>LEAVE A MESSAGE TO RESIDENT</Label>
                                            </Col>
                                        </Row>
                                        <Row style={JobRequestStyle.consumerRequestDescRow}>
                                            <Col style={JobRequestStyle.consumerRequestDescCol}>
                                                <Label style={JobRequestStyle.propDetailTxt}>
                                                    If you decline the job, you need to send your
                                                    resident a reason as to why it is declined.
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={JobRequestStyle.formInputRow}>
                                            <Col>
                                                <ReduxField
                                                    name="notes"
                                                    label="Message to resident"
                                                    placeholder="Type Note Hare..."
                                                    style={[LayoutStyle.inputStyle,JobRequestStyle.input]}
                                                    autoCapitalize="none"
                                                    autoCorrect={false}
                                                    autoFocus={true}
                                                    info={"300 characters limit"}
                                                    infoStyle={JobRequestStyle.infoStyle}
                                                    multiline={true}
                                                    onInfoPress={null}
                                                    maxLength={300}
                                                />
                                            </Col>
                                        </Row>
                                        <Row style={JobRequestStyle.choiceBtnRow}>
                                            <Col style={[JobRequestStyle.choiceBtnCol1]}>
                                                <TouchableOpacity
                                                    disabled={btnDisable}
                                                    onPress={handleSubmit(this._sendDeclineRequest.bind(this))}
                                                    style={[JobRequestStyle.choiceBtn, StyleConfig.shadow,
                                                        ((btnDisable) ? btnDisable : invalid ) ? JobRequestStyle.sendBtnDisabled : JobRequestStyle.sendBtn]}>
                                                    <Text style={JobRequestStyle.choiceBtnTxt}>SEND & DECLINE</Text>
                                                </TouchableOpacity>
                                            </Col>
                                        </Row>
                                        <Row style={JobRequestStyle.dismissBtnRow}>
                                            <Col style={JobRequestStyle.dismissBtnCol}>
                                                <TouchableOpacity onPress={() => {this._declineRequest(false) }}
                                                                  style={JobRequestStyle.dismissBtn}>
                                                    <Text style={JobRequestStyle.dismissBtnTxt}>GO BACK</Text>
                                                </TouchableOpacity>
                                            </Col>
                                        </Row>
                                    </Grid>
                            }


                            <ImageViewer
                                 filedName={'id'}
                                 imageBaseUrl={API_BASE_URL+'/consumer_requests/'+ requesterId +'/images/'}
                                 images={consumer_request_images}
                                 isOpen={imageModal}
                                 onClose={this._handleImageModal.bind(this,false)}/>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }

}

const initialValues = {
    notes:''
};

const validate = values => {
    let errors = {};
    errors.notes = !values.notes
        ? 'Message to resident'
        : undefined;
    return errors;
};

const withForm = reduxForm({
    form: 'declineRequest',
    validate,
    initialValues
});


export default withToast(withLoader(withForm(JobRequest)));
