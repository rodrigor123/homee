import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Content, Grid, Row, Col, Label, Button, Thumbnail, Text} from 'native-base';
import withToast from 'withToast';
import { Actions } from 'react-native-router-flux';
import withLoader from 'withLoader';
import withUser from 'withUser';
import withRegisterUser from 'withRegisterUser';
import LayoutStyle from 'LayoutStyle';
import AppImages from 'AppImages';
import API from 'AppUtils';
import { CONSUMER, storeUser, IMAGECROP } from 'global';
import ReviewProfileStyle from 'ReviewProfileStyle';
import StyleConfig from 'StyleConfig';
import ImagePicker from 'react-native-image-crop-picker';
import ImagePickerModal from '../components/ImagePickerModal';

class ReviewProfile extends Component {

    constructor(props) {
        super(props);
    }

    _doRegister = () => {
        let { registerUser, setUser, loader, toast } = this.props;
        registerUser['application'] = CONSUMER;
        loader(true);
        API.register(registerUser).then(userResponse => {
            const {error,message} = userResponse;
            if (error) {
                loader(false);
                toast({text:message});
            } else {
                setUser(userResponse);
                storeUser(userResponse);
                API.updateProfileAvatar({image:registerUser.image}).then(avatarResponse => {
                    if (registerUser.referralCode != '') {
                        API.createReferral({code:registerUser.referralCode}).then(referralResponse => {
                            loader(false);
                            toast({text:'Signup success'});
                            Actions.home();
                        });
                    } else {
                        loader(false);
                        toast({text:'Signup success'});
                        Actions.home();
                    }
                });
            }
        });
    }

    _toggleModal = () => {
        $this = this;
        ImagePickerModal()
        .then(({uri, filename})=>{
            let { setRegisterUser, registerUser } = this.props;
            registerUser['image'] = {uri, filename, name: filename};
            setRegisterUser(registerUser);
            $this.forceUpdate();
        });
    }

    render () {
        const { registerUser } = this.props;
        const { image, first_name, last_name, email, mobile, zipcode } = registerUser;
        return (
            <Content style={LayoutStyle.rootContainer}>
                <Grid style={LayoutStyle.mainGrid}>
                    <Row style={ReviewProfileStyle.gridRow}>
                        <Col style={ReviewProfileStyle.girdCol}>
                            <Row style={ReviewProfileStyle.reviewLabelRow}>
                                <Col style={ReviewProfileStyle.reviewLabelCol}>
                                    <Label style={ReviewProfileStyle.reviewLabel}>REVIEW PROFILE</Label>
                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.reviewProfileRow}>
                                <Col style={ReviewProfileStyle.reviewProfileCol}>
                                    {
                                        (image.uri != '')
                                        ? <Thumbnail source={{uri:image.uri}} style={ReviewProfileStyle.reviewProfile}/>
                                        : <Thumbnail source={AppImages.defaultProfileImg} style={ReviewProfileStyle.reviewProfile}/>
                                    }

                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.changeProfileBtnRow}>
                                <Col style={ReviewProfileStyle.changeProfileBtnCol}>
                                    <TouchableOpacity style={ReviewProfileStyle.changeProfileBtn} onPress={() => this._toggleModal()}>
                                        <Row>
                                            <Col style={ReviewProfileStyle.profileBtnIconCol}>
                                                <Image source={AppImages.cameraIcon} style={ReviewProfileStyle.changeProfileBtnIcon}/>
                                            </Col>
                                            <Col style={ReviewProfileStyle.profileBtnTxtCol}>
                                                <Label style={ReviewProfileStyle.changeProfileBtnLabel}>EDIT PHOTO</Label>
                                            </Col>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.reviewProfileEmailRow}>
                                <Col style={ReviewProfileStyle.reviewProfileEmailCol}>
                                    <Label style={ReviewProfileStyle.reviewProfileEmailLabel}>{first_name} {last_name}</Label>
                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.reviewProfileOtherDetaillRow}>
                                <Col style={ReviewProfileStyle.reviewProfileOtherDetaillCol}>
                                    <Label style={ReviewProfileStyle.reviewProfileOtherDetaillLabel}>
                                        <Image source={AppImages.phoneIcon} style={ReviewProfileStyle.reviewProfileOtherDetaillImg}/>
                                        {mobile}
                                    </Label>
                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.reviewProfileOtherDetaillRow}>
                                <Col style={ReviewProfileStyle.reviewProfileOtherDetaillCol}>
                                    <Label style={ReviewProfileStyle.reviewProfileOtherDetaillLabel}>
                                        <Image source={AppImages.mailIcon} style={ReviewProfileStyle.reviewProfileOtherDetaillImg}/>
                                        {email}
                                    </Label>
                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.reviewProfileOtherDetaillRow}>
                                <Col style={ReviewProfileStyle.reviewProfileOtherDetaillCol}>
                                    <Label style={ReviewProfileStyle.reviewProfileOtherDetaillLabel}>
                                        <Image source={AppImages.zipIcon} style={ReviewProfileStyle.reviewProfileOtherDetaillImg}/>
                                        {zipcode}
                                    </Label>
                                </Col>
                            </Row>
                            <Row style={ReviewProfileStyle.reviewProfileBtnRow}>
                                <Col style={ReviewProfileStyle.reviewProfileBtnCol}>
                                    <TouchableOpacity onPress={this._doRegister.bind(this)} style={[ReviewProfileStyle.reviewProfileBtn, StyleConfig.shadow]}>
                                        <Text style={ReviewProfileStyle.reviewProfileBtnLabel}>DONE</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

export default withRegisterUser(withUser(withToast(withLoader(ReviewProfile))));
