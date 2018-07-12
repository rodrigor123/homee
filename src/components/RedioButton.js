/**
 * @providesModule RedioButton
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Content, Grid, Row, Col, Label, Text } from 'native-base';
import RedioButtonStyle from 'RedioButtonStyle';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class RedioButton extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { _toggleRedio, toggleRedio, text, check, type, btnStyle, selectedBtn, selectedIcon } = this.props;
        let subComponent;
        switch(type){
            case 'circle':
                subComponent = (
                    <IconFontAwesome name="circle" style={[RedioButtonStyle.makeBtnIcon,
                        (toggleRedio) ? ( (selectedIcon) ?  selectedIcon : RedioButtonStyle.makeBtnIconCheck ) : RedioButtonStyle.makeBtnIconUncheck]}/>
                )
                break;
            case 'check':
                subComponent = (
                    <IconEntypo name="check" style={[RedioButtonStyle.makeBtnIcon,
                        (toggleRedio) ? RedioButtonStyle.makeBtnIconCheck : RedioButtonStyle.makeBtnIconUncheck]}/>
                )
                break;
            default :
                subComponent = (
                    <TouchableOpacity
                        disabled={true}
                        style={[RedioButtonStyle.redioBtnLabel,
                            (toggleRedio) ? RedioButtonStyle.redioBtnSelected : RedioButtonStyle.redioBtnDeselected]}
                    />
                )
                break;
        }
        return (
            <Grid>
                <Row style={RedioButtonStyle.redioBtnRow}>
                    <Col size={0.3} style={RedioButtonStyle.redioBtnCol1}>
                        <TouchableOpacity
                            onPress={() => {_toggleRedio()}}
                            style={((toggleRedio) ? (selectedBtn) ? selectedBtn : RedioButtonStyle.redioBtn : (btnStyle) ? btnStyle : RedioButtonStyle.redioBtn )}>
                            {subComponent}
                        </TouchableOpacity>
                    </Col>
                    {
                        (text)
                        ?
                            <Col style={RedioButtonStyle.redioBtnCol2}>
                                <Label
                                    style={[RedioButtonStyle.redioBtnLabelTxt,
                                        (toggleRedio) ? RedioButtonStyle.redioBtnLabelTxtSelected : RedioButtonStyle.redioBtnLabelTxtDeselected]}>
                                    {text}
                                </Label>
                            </Col>
                        :
                            null
                    }
                </Row>
            </Grid>
        )
    }
}

export default RedioButton;
