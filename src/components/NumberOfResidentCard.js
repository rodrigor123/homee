/**
 * @providesModule NumberOfResidentCard
 */

import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Grid, Row, Text } from 'native-base';
import { pad } from 'global';
import LayoutStyle from 'LayoutStyle';
import NumberCard from 'NumberCard';
import NumberOfResidentCardStyle from 'NumberOfResidentCardStyle';

class NumberOfResidentCard extends Component {

    constructor(props) {
        super(props);
    }

    _onChangeNumberOfResident = (sign) => {
        const { onChange, residentCount } = this.props;
        eval(residentCount + sign + 1) > 0 && onChange(eval(residentCount + sign + 1));
    }

    render() {
        const { residentCount } = this.props;

        return (
            <Grid style={NumberOfResidentCardStyle.numbersGrid}>
                <Row>
                    <Text style={[LayoutStyle.headerLabelNoColor]}>
                        NUMBER OF RESIDENTS
                    </Text>
                </Row>

                <NumberCard number={residentCount}/>

                <Row style={NumberOfResidentCardStyle.numberButtonRow}>
                    <TouchableOpacity onPress={()=>{this._onChangeNumberOfResident('-')}}>
                        <Text style={NumberOfResidentCardStyle.numberButtonText}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this._onChangeNumberOfResident('+')}}>
                        <Text style={NumberOfResidentCardStyle.numberButtonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </Row>
            </Grid>
        );
    }
}

export default NumberOfResidentCard;
