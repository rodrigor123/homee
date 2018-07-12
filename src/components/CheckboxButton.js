/**
 * @providesModule CheckboxButton
 */

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import CheckboxButtonSmallStyle from 'CheckboxButtonSmallStyle';
import CheckboxButtonLargeStyle from 'CheckboxButtonLargeStyle';
import IconEntypo from 'react-native-vector-icons/Entypo';

class CheckboxButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            checkboxBtnStyle:null
        }
    }

    componentWillMount(){
        const { size } = this.props;
        this.setState({
            checkboxBtnStyle: (size) ? CheckboxButtonLargeStyle : CheckboxButtonSmallStyle
        });
    }

    render(){
        const { setDefaultCard, disabled, _toggleCheck } = this.props;
        const { checkboxBtnStyle } = this.state;
        return(
            <TouchableOpacity
                onPress={() => {_toggleCheck()}}
                disabled={disabled}
                style={[checkboxBtnStyle.makeDefaultBtn,
                    (setDefaultCard) ? {} : checkboxBtnStyle.makeDefaultUncheck]}>
                <IconEntypo name="check" style={[checkboxBtnStyle.makeDefaultBtnIcon,
                    (setDefaultCard) ? checkboxBtnStyle.makeDefaultBtnIconCheck : checkboxBtnStyle.makeDefaultBtnIconUncheck]}/>
            </TouchableOpacity>
        )
    }

}

export default CheckboxButton;
