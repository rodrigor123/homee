/**
 * @providesModule RangeSlider
 */

import React, {Component} from 'react';
import {Content, Text, Row, Col, Grid, Label, Button} from 'native-base';
import RangeSliderStyle from 'RangeSliderStyle';
import CustomMarker from './CustomMarker';
import StyleConfig from 'StyleConfig';
import MultiSlider from 'react-native-multi-slider';


class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiSliderValue: [0, 25],
        };
    }

    multiSliderValuesChange = (values) => {
        this.setState({
            multiSliderValue: values,
        });
    }

    render() {
        const { minRangeValue, maxRangeValue, step, sliderLength, btnTitle, title, introText, value, _onChange, signLeftBefore, signLeftAfter, signRightBefore, signRightAfter, textLeftAlign, textRightAlign} = this.props;
        let { multiSliderValue } = this.state;
        return (
            <Grid>
                <Row size={9} style={RangeSliderStyle.header}>
                    <Label style={RangeSliderStyle.title}>{title}</Label>
                </Row>

                <Row size={5} style={[RangeSliderStyle.sliderLabelRange]}>
                    <Col style={[RangeSliderStyle.sliderLabelRangeCol]}>
                        <Text
                            style={[RangeSliderStyle.sliderLabelValue, {textAlign: (textRightAlign) ? textRightAlign : 'right'}]}>
                            {signRightBefore}{multiSliderValue[0]}{signRightAfter}
                        </Text>
                    </Col>
                    <Col style={[RangeSliderStyle.sliderLabelValueCol]}>
                        <Text
                            style={[RangeSliderStyle.sliderLabelValue, {textAlign: (textLeftAlign) ? textLeftAlign : 'left'}]}>
                            {signLeftBefore}{multiSliderValue[1]}{signLeftAfter}
                        </Text>
                    </Col>
                </Row>
                <Row size={9}>
                    <MultiSlider
                        selectedStyle={{
                            backgroundColor: StyleConfig.blue,
                        }}
                        unselectedStyle={{
                            backgroundColor: StyleConfig.navyDark,
                        }}
                        containerStyle={{
                            height: 40,
                        }}
                        trackStyle={RangeSliderStyle.sliderTrack}
                        touchDimensions={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            slipDisplacement: 40,
                        }}
                        customMarker={CustomMarker}
                        values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
                        onValuesChange={this.multiSliderValuesChange}
                        min={minRangeValue}
                        max={maxRangeValue}
                        step={step}
                        allowOverlap
                        snapped
                        sliderLength={sliderLength}
                        style={RangeSliderStyle.slider}
                        onValueChange={(value) => {
                            _onChange(name, value)
                        }}
                    />
                </Row>
                <Row size={9} style={RangeSliderStyle.sliderInfoLabel}>
                    <Col style={[RangeSliderStyle.sliderMinNumberCol]}>
                        <Label style={RangeSliderStyle.sliderMinNumber}>{minRangeValue}</Label>
                    </Col>
                    <Col style={[RangeSliderStyle.sliderMaxNumberCol]}>
                        <Label style={RangeSliderStyle.sliderMaxNumber}>{maxRangeValue}</Label>
                    </Col>
                </Row>

                <Row size={9} style={RangeSliderStyle.introTextRow}>
                    <Col>
                        <Text style={RangeSliderStyle.introText}>
                            {introText}
                        </Text>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default RangeSlider;
