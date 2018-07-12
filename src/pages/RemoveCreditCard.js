import React, { Component } from 'react';
import { Content, Grid, Row, Col, Label } from 'native-base';
import { Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RemoveCreditCardStyle from 'RemoveCreditCardStyle';
import LayoutStyle from 'LayoutStyle';
import API from 'AppUtils';
import withLoader from 'withLoader';
import withCard from 'withCard';
import withToast from 'withToast';
import AppImages from 'AppImages';

class RemoveCreditCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            btnDisable:false
        }
    }

    _responseOfApi = (message) => {
        const { loader, toast } = this.props;
        loader(false);
        this.setState({
            btnDisable: false
        });
        toast({text:message, type:'danger', navBar:true});
    }

    _setDefaultCard = (data) => {
        const { loader, setSelectedCard } = this.props;
        setTimeout(() => { loader(true);}, 1);
        API.setDefaultPayments(data)
            .then((response) => {
                setSelectedCard(null);
                this._responseOfApi('Card removed');
                Actions.viewProfile();
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    _getFirstCardFromList = () => {
        const { loader } = this.props;
        setTimeout(() => { loader(true);}, 1);
        API.getPayments()
            .then((response) => {
                const { error } = response;
                if(!error) {
                    const { payments } = response;
                    if(payments.length) {
                       this._setDefaultCard({'payment_id' : payments[0].id});
                    }
                }
                loader(false);
            })
            .catch(() => {
                loader(false);
            });
    }

    _removeCreditCard = () => {
        const { loader, selectedCard, setSelectedCard } = this.props;
        setTimeout(() => { loader(true);}, 1);
        this.setState({
            btnDisable:true
        });
        API.removePaymentsById(selectedCard)
            .then((response) => {
                const { error, message } = response;
                if(!error) {
                    if(selectedCard.default){
                        this._getFirstCardFromList();
                    } else {
                        this._responseOfApi('Card removed');
                        setSelectedCard(null);
                        Actions.viewProfile();
                    }
                } else {
                    this._responseOfApi(message)
                }

            })
            .catch(() => {
                loader(false);
            });
    }

    render(){
        const { btnDisable } = this.state;
        return(
            <Content style={RemoveCreditCardStyle.content} >
                <Grid style={LayoutStyle.mainGrid}>
                    <Row>
                        <Col>
                            <Row style={RemoveCreditCardStyle.removeImageRow}>
                                <Col style={RemoveCreditCardStyle.removeImageCol}>
                                    <Image source={AppImages.removeCard} style={RemoveCreditCardStyle.removeImage}/>
                                </Col>
                            </Row>
                            <Row style={RemoveCreditCardStyle.titleLabelRow}>
                                <Col style={RemoveCreditCardStyle.titleLabelCol}>
                                    <Label style={RemoveCreditCardStyle.titleLabel}>Are you sure?</Label>
                                </Col>
                            </Row>

                            <Row style={RemoveCreditCardStyle.descMainRow}>
                                <Col>
                                    <Row style={RemoveCreditCardStyle.descLabelRow}>
                                        <Col>
                                            <Label style={RemoveCreditCardStyle.descLabel}>
                                                Removal will erase all information and connection to this credit card.
                                                The card will have to be re-entered if you would like to use it again.
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={RemoveCreditCardStyle.removeBtnRow}>
                                <Col style={RemoveCreditCardStyle.removeBtnCol}>
                                    <TouchableOpacity onPress={()=>{this._removeCreditCard()}}
                                                      disabled={btnDisable}
                                                      style={[LayoutStyle.buttonH1,
                                                          (btnDisable) ? RemoveCreditCardStyle.removeBtnDisabled : RemoveCreditCardStyle.removeBtn]}>
                                        <Text style={[LayoutStyle.buttonH1Text, RemoveCreditCardStyle.removeBtnTxt]}>CONTINUE REMOVAL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={RemoveCreditCardStyle.cancelBtnRow}>
                                <Col style={RemoveCreditCardStyle.cancelBtnCol}>
                                    <TouchableOpacity
                                        onPress={()=>{ Actions.creditCardOptions() }}
                                        style={RemoveCreditCardStyle.cancelBtn}>
                                        <Text style={RemoveCreditCardStyle.cancelBtnTxt}>CANCEL</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        )
    }

}

export default withToast(withCard(withLoader(RemoveCreditCard)));
