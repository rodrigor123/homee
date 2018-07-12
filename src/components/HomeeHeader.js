import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import { Header, Body, Left, Right, Label, Button, Radio, Row, Col } from 'native-base';
import HeaderStyle from 'HeaderStyle';
import AppImages from 'AppImages';
import { MANUAL } from 'global';
import withRegisterUser from 'withRegisterUser';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import StyleConfig from 'StyleConfig';

class HomeeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: {
                text:'',
                type:'success'
            }
        }
    }

    componentWillReceiveProps({toast}) {
        try {
            if (toast !== this.props.toast && toast.navBar) {
                const {type,text} = toast;
                this.setState({notification:{type,text}});

                setTimeout(() => {
                    this.setState({notification:{text:''}});
                },3000);
            }
        } catch (error) {
            console.log(error);
        }
    }


    _toggleDrawer = () => {
        if(Actions.currentScene == 'DrawerOpen') {
            Actions.drawerClose();
        } else {
            Actions.drawerOpen();
        }
    }

    render() {
        const { registerUser, back, menu } = this.props;
        const { notification:{type,text} } = this.state;
        let redirect;
        if(back) {
            redirect = back;
        } else {
            if(registerUser){
                const { type } = registerUser;
                redirect = (type == MANUAL) ? 'register' : 'socialRegisterForm';
            }
        }

        return (
            <View>
            <Header style={[HeaderStyle.header, StyleConfig.shadow]}>
                <Left style={HeaderStyle.headerLeft}>
                    {
                        (redirect)
                        ?
                            <TouchableOpacity onPress={() => Actions[redirect]()} style={HeaderStyle.backBtn}>
                                <FontAwesomeIcon name="angle-left" size={StyleConfig.headerIcon} color={StyleConfig.navyMediumLight} />
                            </TouchableOpacity>
                        :
                            null
                    }

                </Left>
                <Body style={HeaderStyle.headerBody}>
                    <Image source={AppImages.consumerLogo} style={HeaderStyle.logo} />
                </Body>
                <Right>
                    {
                        (menu)
                        ?
                            <TouchableOpacity onPress={() => this._toggleDrawer()} style={HeaderStyle.backBtn}>
                                <MaterialIconsIcon name="menu" size={StyleConfig.headerIcon} color={StyleConfig.navyMediumLight} />
                            </TouchableOpacity>
                        :
                            null
                    }

                </Right>
            </Header>
                <View style={[HeaderStyle.notificationView,{backgroundColor:(text!='')?StyleConfig.white:StyleConfig.navyMediumDark}]}>
                    {
                        (text != '')
                            ? <Text numberOfLines={1} style={[HeaderStyle.notificationText, HeaderStyle[type]]}>
                            {text}
                        </Text>
                            : <View style={HeaderStyle.notificationSubView} />
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    toast: state.toast ? state.toast[state.toast.length - 1] : null
});

export default connect(mapStateToProps)(withRegisterUser(HomeeHeader));
