/**
 * @providesModule JustAnFyi
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import AddCreditCardStyle from 'AddCreditCardStyle';
import LayoutStyle from 'LayoutStyle';

class JustAnFyi extends Component {

    render(){
        const { btnDisable, _continueAddCard, _cancelNotifyi } = this.props;
        return(
            <Col style={AddCreditCardStyle.gridCol}>
                <Row style={AddCreditCardStyle.justAnFyiLabelRow}>
                    <Col style={AddCreditCardStyle.justAnFyiLabelCol}>
                        <Label style={AddCreditCardStyle.justAnFyiLabel}>Just an FYI</Label>
                    </Col>
                </Row>
                <Row style={AddCreditCardStyle.justAnFyiDescLabelRow}>
                    <Col style={AddCreditCardStyle.justAnFyiDescLabelCol}>
                        <Label style={AddCreditCardStyle.justAnFyiDescLabel}>
                            Making this new card your default payment method will result in removing an existing card as the default method.
                        </Label>
                    </Col>
                </Row>
                <Grid>
                    <Row style={AddCreditCardStyle.continueBtnRow}>
                        <Col style={AddCreditCardStyle.continueBtnCol}>
                            <TouchableOpacity
                                disabled={btnDisable}
                                onPress={() => { _continueAddCard() }}
                                style={[LayoutStyle.buttonH1,
                                    (btnDisable) ? AddCreditCardStyle.continueBtnDisabled : AddCreditCardStyle.continueBtn]}>
                                <Label
                                    style={[LayoutStyle.buttonH1Text, AddCreditCardStyle.continueBtnTxt]}>
                                    CONTINUE ADDING CARD
                                </Label>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row style={AddCreditCardStyle.neverMindBtnRow}>
                        <Col style={AddCreditCardStyle.neverMindBtnCol}>
                            <TouchableOpacity onPress={() => { _cancelNotifyi() }}>
                                <Label
                                    style={[LayoutStyle.buttonH1Text, AddCreditCardStyle.neverMindBtnTxt]}>
                                    NEVERMIND
                                </Label>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </Col>
        )
    }

}

export default JustAnFyi;
