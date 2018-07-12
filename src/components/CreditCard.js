/**
 * @providesModule CreditCard
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Label } from 'native-base';
import { View, Image } from 'react-native';
import CreditCardSmallStyle from 'CreditCardSmallStyle';
import CreditCardLargeStyle from 'CreditCardLargeStyle';
import StyleConfig from 'StyleConfig';
import CheckboxButton from 'CheckboxButton';

class CreditCard extends Component {

    constructor(props){
        super(props);
        const { size } = this.props;
        this.state = {
            creditCardStyle:(size) ? CreditCardLargeStyle : CreditCardSmallStyle
        }
    }

    render(){
        const { creditCardStyle } = this.state;
        const { size, showCardData:{ brand, last4, expMonth, expYear, name }, showCardData, selectedCard } = this.props;
        return(
            <Grid style={[creditCardStyle.verifiedCardGrid, StyleConfig.shadow, {backgroundColor:StyleConfig.cardType[brand].color}, selectedCard]}>
                <Row>
                    <Col style={creditCardStyle.verifiedCardCol}>
                        <Row>
                            <Col style={creditCardStyle.verifiedCardImageCol1}>
                                <Image source={StyleConfig.cardType[brand].image} style={creditCardStyle.cardImage} />
                            </Col>
                            {
                                (showCardData.default)
                                ?
                                    <Col style={creditCardStyle.verifiedCardImageCol2}>
                                        <CheckboxButton size={size} setDefaultCard={true} disabled={true} _toggleCheck={null} />
                                        <Label style={creditCardStyle.defaultTxt}>DEFAULT</Label>
                                    </Col>
                                :
                                    null
                            }
                        </Row>
                        <Row>
                            <Col style={creditCardStyle.verifiedCardNumberCol}>
                                <Label style={creditCardStyle.verifiedCardNumber}>**** **** **** {last4}</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={creditCardStyle.verifiedCardNameCol}>
                                <Label style={creditCardStyle.verifiedCardName}>{name}</Label>
                            </Col>
                            <Col style={creditCardStyle.verifiedCardDateCol}>
                                <Row>
                                    <Col style={creditCardStyle.verifiedCardGoodTxt}>
                                        <Label style={creditCardStyle.verifiedCardDate}>GOOD THRU</Label>
                                    </Col>
                                </Row>
                                <Label style={creditCardStyle.verifiedCardDate}>{expMonth} / {expYear.toString().substr(-2)}</Label>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <View style={creditCardStyle.verifiedCardOverlay}>
                    <Image source={StyleConfig.cardType[brand].overlayImage} style={creditCardStyle.verifiedCardOverlayImage} />
                </View>
            </Grid>
        )
    }
    
}

export default CreditCard;
