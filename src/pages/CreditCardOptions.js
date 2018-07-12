import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import CreditCardOptionsStyle from 'CreditCardOptionsStyle';
import LayoutStyle from 'LayoutStyle';
import withCard from 'withCard';
import CreditCard from 'CreditCard';
import CheckboxButton from 'CheckboxButton';

class CreditCardOptions extends Component {

    render(){
        const { selectedCard } = this.props;

        return(
            <Content style={LayoutStyle.rootContainer}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row style={CreditCardOptionsStyle.gridRow}>
                        <Col style={CreditCardOptionsStyle.gridCol}>
                            <Row style={CreditCardOptionsStyle.creditCardLabelRow}>
                                <Col style={CreditCardOptionsStyle.creditCardLabelCol}>
                                    <Label style={CreditCardOptionsStyle.creditCardLabel}>CARD DETAILS</Label>
                                </Col>
                            </Row>
                            <Row style={CreditCardOptionsStyle.creditCardRow}>
                                    <CreditCard size={1} showCardData={selectedCard}/>
                            </Row>
                            <Row
                                style={[LayoutStyle.makeDefaultBtnRow, {opacity:0.5}]}>
                                <Col size={0.3} style={LayoutStyle.makeDefaultBtnCol1}>
                                    <CheckboxButton size={1} setDefaultCard={selectedCard.default}
                                                    disabled={true} />
                                </Col>
                                <Col style={LayoutStyle.makeDefaultBtnCol2}>
                                    <Label style={LayoutStyle.makeDefaultBtnLabel}>Make this card your
                                        default payment method</Label>
                                </Col>
                            </Row>
                            <Row style={CreditCardOptionsStyle.replaceCardBtnRow}>
                                <Col style={CreditCardOptionsStyle.cardBtnCol}>
                                    <TouchableOpacity
                                        onPress={()=>{Actions.replaceCreditCard()}}
                                        style={[LayoutStyle.buttonH1, CreditCardOptionsStyle.replaceCardBtn]}>
                                        <Label
                                            style={[LayoutStyle.buttonH1Text, CreditCardOptionsStyle.cardBtnTxt]}>
                                            REPLACE CARD
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={CreditCardOptionsStyle.removeCardBtnRow}>
                                <Col style={CreditCardOptionsStyle.cardBtnCol}>
                                    <TouchableOpacity
                                        onPress={()=>{Actions.removeCreditCard()}}
                                        style={[LayoutStyle.buttonH1, CreditCardOptionsStyle.removeCardBtn]}>
                                        <Label
                                            style={[LayoutStyle.buttonH1Text, CreditCardOptionsStyle.cardBtnTxt]}>
                                            REMOVE CARD
                                        </Label>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={CreditCardOptionsStyle.cancelBtnRow}>
                                <Col style={CreditCardOptionsStyle.cancelBtnCol}>
                                    <TouchableOpacity onPress={() => {Actions.viewProfile()}}>
                                        <Label style={[LayoutStyle.buttonH1Text, CreditCardOptionsStyle.cancelBtnTxt]}>
                                            CANCEL
                                        </Label>
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

export default withCard(CreditCardOptions);
