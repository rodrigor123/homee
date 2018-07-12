/**
 * @providesModule SliderBar
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Text, Label } from 'native-base';
import AppImages from 'AppImages';
import Slider from 'react-native-slider';
import SliderBarStyle from 'SliderBarStyle';
import StyleConfig from 'StyleConfig';
import { deviceType } from 'global';

class SliderBar extends Component {

    render(){
        const { maximumValue, minimumValue, textAlign, name, step, sign, start, end, signBefore, signAfter, value, _onChange } = this.props;

        return(
            <Grid>
                <Row style={SliderBarStyle.sliderBarRow}>
                    <Col style={SliderBarStyle.sliderBarCol}>
                        <Row>
                            <Text style={[SliderBarStyle.sliderLabelValue,{textAlign:(textAlign) ? textAlign : 'left'}]}>
                                {signBefore}{value}{signAfter}
                            </Text>
                        </Row>
                        <Row style={SliderBarStyle.sliderRow}>
                            <Slider
                                maximumValue={maximumValue}
                                minimumValue={minimumValue}
                                step={step}
                                disabled={false}
                                trackStyle={SliderBarStyle.sliderTrack}
                                minimumTrackTintColor={StyleConfig.blue}
                                style={SliderBarStyle.slider}
                                thumbStyle={SliderBarStyle.sliderThumb}
                                maximumTrackTintColor={StyleConfig.navyDark}
                                value={value}
                                thumbImage={(deviceType == 'phone') ? AppImages.sliderThumb : AppImages.sliderThumbTab}
                                onValueChange={(value)=>{_onChange(name, value)}}
                            />
                        </Row>
                        <Grid style={SliderBarStyle.sliderInfoLabelGrid}>
                            <Row style={SliderBarStyle.sliderInfoLabel}>
                                <Label style={SliderBarStyle.sliderMinNumber}>{start}</Label>
                                <Label style={SliderBarStyle.sliderMaxNumber}>{end}</Label>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default SliderBar;
