/**
 * @providesModule ReduxField
 */

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Item, Input, Label, Text, Col } from 'native-base';
import { PLACEHOLDER_COLOR } from 'global';
import { Field } from 'redux-form';
import LayoutStyle from 'LayoutStyle';
import StyleConfig from 'StyleConfig';

class ReduxField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height:33,
        }
    }

    _doFormat = (mask,reference) => {

        const { onChangeText } = this.props;
        let newReference = mask;
        let ignoreCount = 0;
        for (let n=0; n<reference.length; n++) {

            if (reference.charAt(n) != mask.charAt(n)) {
                newReference = newReference.replace('X',reference.charAt(n));
                mask.charAt(n) != 'X' && ignoreCount++;
            }

        }
        newReference = newReference.substr(0,reference.length + ignoreCount);
        onChangeText(newReference);
    }

    _handleHeight = (text) => {
        const { height } = this.state;
        text.length != 0 && text.length % 50 == 0 && this.setState({height: (text.length / 50) * 33});
    }


    _renderComponent = ({ input, inputFormat, multiline, keyboardType, onChangeText, info, infoStyle, infoIcon, onInfoPress, showSideError, sideErrorInputStyle, changeSuccessColor, placeholder, labelIcon, label, secureTextEntry, errorInputStyle, rightIcon, labelInputStyle, labelInfo, _onFocus, _onBlur,
                            maxLength, labelInfoStyle, autoCapitalize, placeholderTextColor, autoCorrect, style, placeholderStyle, disabled, meta: { touched, error, warning } }) => {

        const { height } = this.state;
        const styleForHeight = multiline === true ? {height} : {};
        const hasError = (typeof error !== 'undefined' ? true : false);
        const itemStyle = (hasError && touched)
            ? LayoutStyle.itemInputError
            : (changeSuccessColor && touched)
                ? LayoutStyle.itemInputSuccess
                : LayoutStyle.itemInput;

        const labelInput = (!hasError && touched && changeSuccessColor) ? LayoutStyle.labelInputSuccess : LayoutStyle.labelInput;
        return (
            <Col>
                <Item style={itemStyle} underline error={hasError && touched}>
                    <Input {...input}
                           multiline={multiline}
                           keyboardType={keyboardType}
                           placeholder={placeholder}
                           secureTextEntry={secureTextEntry}
                           placeholderTextColor={(placeholderTextColor) ? placeholderTextColor : StyleConfig.placeholderColor}
                           style={Object.assign([LayoutStyle.inputStyle,style, styleForHeight])}
                           placeholderStyle={[LayoutStyle.placeholder,placeholderStyle]}
                           autoCapitalize={autoCapitalize}
                           autoCorrect={autoCorrect}
                           maxLength={maxLength}
                           disabled={disabled}
                           onChangeText=
                           {(multiline)
                               ?
                                    (value) => {this._handleHeight(value)}
                               :
                                    (typeof inputFormat != 'undefined') ? this._doFormat.bind(this,inputFormat) : onChangeText
                           }
                           {...(_onFocus) ? {onFocus: () => {_onFocus()}} : {}}
                           {...(_onBlur) ?  {onBlur: () => {_onBlur()}} : {}}

                    />
                    {rightIcon}
                </Item>
                {
                    (showSideError)
                        ? (hasError &&  touched)
                        ?   <View style={LayoutStyle.sideErrorView}>
                                <Label style={Object.assign([LayoutStyle.errorInput,errorInputStyle])}>{label}</Label>
                                <Label style={Object.assign([LayoutStyle.sideErrorInput,sideErrorInputStyle])}>{error}</Label>
                            </View>
                        :   <View style={LayoutStyle.sideInputView}>
                                {labelIcon}
                                <View style={LayoutStyle.sideInputSubView}>
                                    <Label style={Object.assign([labelInput,labelInputStyle])}>{label}</Label>

                                    <Label style={Object.assign([LayoutStyle.labelInfo,labelInfoStyle])}>
                                        {labelInfo}
                                    </Label>
                                </View>
                                {(info) && <Label style={[LayoutStyle.sideInputInfo, infoStyle]}>{info}</Label>}
                            </View>
                        : (hasError &&  touched)
                        ? <View style={LayoutStyle.sideErrorView}>
                            <Label style={Object.assign([LayoutStyle.errorInput,errorInputStyle])}>{error}</Label>
                            {(info) && <TouchableOpacity onPress={(onInfoPress) ? onInfoPress : {}} style={{flexDirection:'row'}}>
                                <Label style={[LayoutStyle.sideInputInfo, infoStyle]}>{info}</Label>
                                {infoIcon}
                            </TouchableOpacity>}
                        </View>
                        : <View style={LayoutStyle.sideInputView}>
                            {labelIcon}
                            <View style={LayoutStyle.sideInputSubView}>
                                <Label style={Object.assign([labelInput])}>
                                    <Label style={Object.assign([labelInput,labelInputStyle])}>{label}</Label>

                                    <Label style={Object.assign([LayoutStyle.labelInfo,labelInfoStyle])}>
                                        {labelInfo}
                                    </Label>
                                </Label>
                            </View>
                            {(info) && <TouchableOpacity onPress={(onInfoPress) ? onInfoPress : {}} style={{flexDirection:'row'}}>
                                <Label style={[LayoutStyle.sideInputInfo, infoStyle]}>{info}</Label>
                                {infoIcon}
                            </TouchableOpacity>}
                        </View>
                }
            </Col>
        )
    }


    render() {
        return (
            <Field
                {...this.props}
                component={this._renderComponent}
            />
        );
    }

}

export default ReduxField;
