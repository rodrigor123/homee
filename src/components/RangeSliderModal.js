/**
 * @providesModule RangeSliderModal
 */

import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Content, Text, Row, Col, Grid, Label, Button} from 'native-base';
import Modal from 'react-native-modal';
import RangeSliderModalStyle from 'RangeSliderModalStyle';
import RangeSlider from 'RangeSlider';
import LayoutStyle from 'LayoutStyle';

class RangeSliderModal extends Component {
    constructor(props) {
        super(props);
    }

    _onSubmit(modalOpen, formData) {
        const {onSubmit} = this.props;
        onSubmit(formData, modalOpen);
    }

    render() {
        const {isOpen, onClose, btnTitle} = this.props;
        return (
            <Modal
                backdropColor="white"
                animationType={"slide"}
                transparent={true}
                isVisible={isOpen}
                style={RangeSliderModalStyle.modal}
            >
                <View style={RangeSliderModalStyle.container}>
                    <RangeSlider {...this.props}/>
                    <Row>
                        <TouchableOpacity onPress={this._onSubmit.bind(this, true)}
                                          style={[LayoutStyle.buttonH1, RangeSliderModalStyle.saveButton]}>
                            <Text
                                style={[LayoutStyle.buttonH1Text, RangeSliderModalStyle.saveBtnText]}>{btnTitle}</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </Modal>
        );
    }
}

export default RangeSliderModal;
