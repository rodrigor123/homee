import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withRegisterUser from 'withRegisterUser';
import withUser from 'withUser';
import SocialFieldForm from '../components/SocialFieldForm';
import LayoutStyle from 'LayoutStyle';
import SocialRegisterFormStyle from 'SocialRegisterFormStyle';
import { FACEBOOK, GOOGLE } from 'global';
import { Content, Label, Thumbnail, Grid, Row, Col, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleConfig from 'StyleConfig';

class SocialRegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            registerUser: {}
        }
    }

    componentWillReceiveProps = (nextProps) => {
        const { registerUser } = nextProps;
        registerUser != null && this.setState({registerUser});
    }

    componentWillMount() {
        const { registerUser } = this.props;
        registerUser != null && this.setState({registerUser});
    }

    _onSubmit = ({referralCode, zipcode, mobile}) => {
        const { registerUser,setRegisterUser, loader } = this.props;
        loader(true);
        const regData = Object.assign(registerUser,{referralCode, zipcode, mobile, password: Math.random()});
        setRegisterUser(regData);
        loader(false);
        setTimeout(() => {Actions.reviewProfile()},100);
    }

    render () {
        const { registerUser:{first_name, last_name, image, referralCode, zipcode, mobile, type} } = this.state;
        const socialFieldForm = {
            initialValues: {
                referralCode,
                zipcode,
                mobile
            }
        }

        _backScreen = () =>{
            const { setRegisterUser } = this.props;
            setRegisterUser('');
            Actions.socialRegister();
        }

        return (
            <Content style={SocialRegisterFormStyle.content}>
                <Grid style={SocialRegisterFormStyle.grid}>
                    <Row style={[SocialRegisterFormStyle.userDetailsRow, (type == FACEBOOK) ? SocialRegisterFormStyle.facebookBackground : SocialRegisterFormStyle.googleBackground]}>
                        <Col>
                            <Row style={SocialRegisterFormStyle.backBtnRow}>
                                <Col style={SocialRegisterFormStyle.backBtnCol}>
                                    <TouchableOpacity onPress={() => _backScreen()} style={SocialRegisterFormStyle.backBtn}>
                                        <Icon name="angle-left" size={StyleConfig.headerIcon} color={StyleConfig.white} />
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={SocialRegisterFormStyle.imageRow}>
                                <Col style={SocialRegisterFormStyle.imageCol}>
                                    <Thumbnail style={SocialRegisterFormStyle.profileImage} source={{uri: image.uri}} />
                                </Col>
                            </Row>
                            <Row style={SocialRegisterFormStyle.nameRow}>
                                <Col style={SocialRegisterFormStyle.nameCol}>
                                    <Label style={SocialRegisterFormStyle.nameLabel}>{first_name} {last_name}</Label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <SocialFieldForm {...this.props} {...socialFieldForm} onSubmit={this._onSubmit.bind(this)}/>
                </Grid>
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(withRegisterUser(SocialRegisterForm))));
