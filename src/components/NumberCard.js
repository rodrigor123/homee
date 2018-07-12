/**
 * @providesModule NumberCard
 */

import React, { Component } from 'react';
import { Row, Text, Card } from 'native-base';
import { pad } from 'global';
import NumberCardStyle from 'NumberCardStyle';

class NumberCard extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        let { number } = this.props;
        number = pad(number,4).split('');
        return (
            <Row style={NumberCardStyle.numberCardRow}>
                {
                    number.map((digit,dKey) => (
                        <Card key={dKey} style={NumberCardStyle.numberCard}>
                            <Text style={NumberCardStyle.numberText}>
                                {digit}
                            </Text>
                        </Card>
                    ))
                }
            </Row>
        );
    }
}

export default NumberCard;
