import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Alert } from 'react-native';
import { storeUser, emailRegex, numberRegex, IMAGECROP } from 'global';
import { Actions } from 'react-native-router-flux';
import { reduxForm } from 'redux-form';
import  AppImages from 'AppImages';
import  ReduxField from 'ReduxField';
import EditProfileStyle from 'EditProfileStyle';
import LayoutStyle from 'LayoutStyle';
import { Row, Col, Text, Thumbnail, Spinner, Grid } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getMonths, getDays, getYears, API_BASE_URL } from 'global';
import StyleConfig from 'StyleConfig';
import ImagePickerModal from '../components/ImagePickerModal';
import withLoader from "withLoader";

class EditProfileFieldForm extends Component {

    constructor(props) {
        super(props);

        const { id } = this.props.user;

        this.state = {
            oldPasswordHidden:true,
            passwordHidden: true,
            rePasswordHidden: true,
            image:{uri: API_BASE_URL+'/avatar/'+id},
            isImageChange:false
        }
    }

    _handleSubmit = (formData) => {
        const { onSubmit } = this.props;
        const { image, isImageChange } = this.state;
        let imageData = (isImageChange) ? image : false;
        onSubmit(formData, imageData);
    }

    _changeView = (key) => {
        const tempState = this.state;
        tempState[key] = !tempState[key];
        this.setState(tempState);
    }

    _toggleModal = () => {
        ImagePickerModal()
        .then(({uri, filename})=>{
            this.setState({
                image:{uri, filename, name: filename},
                isImageChange: true
            });
        });
    }

    render(){
        const { handleSubmit, invalid } = this.props;
        const { oldPasswordHidden, passwordHidden, rePasswordHidden, image} = this.state;

        return(
            <Col style={EditProfileStyle.girdCol}>
                <Row style={EditProfileStyle.profileForm}>
                    <Col style={EditProfileStyle.thumbnailCol}>
                        <Thumbnail source={image} style={EditProfileStyle.thumbnail}/>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => this._toggleModal()} style={[EditProfileStyle.imageBtn, StyleConfig.shadow]}>
                            <Row>
                                <Col style={EditProfileStyle.imageBtnCol1}>
                                    <Icon name='camera' size={StyleConfig.commonIcon} color={StyleConfig.blue} />
                                </Col>
                                <Col style={EditProfileStyle.imageBtnCol2}>
                                    <Text style={EditProfileStyle.imageBtnText}>CHANGE PHOTO</Text>
                                </Col>
                            </Row>
                        </TouchableOpacity>
                    </Col>
                    <Col style={EditProfileStyle.profileFormRowInfo}>
                        <Text style={[LayoutStyle.headerLabel,EditProfileStyle.labelLogin]}>LOG IN</Text>
                        <ReduxField
                            disabled={true}
                            name="email"
                            placeholder="Type here"
                            label=" Email"
                            style={EditProfileStyle.profileFormInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoFocus={true}
                            showSideError={true}
                            labelIcon={
                                <Image source={AppImages.mailIcon} style={EditProfileStyle.formFieldIcon}/>
                            } />
                        <ReduxField
                            name="old_password"
                            placeholder="Type here"
                            label="Old Password"
                            style={EditProfileStyle.profileFormInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            showSideError={true}
                            secureTextEntry={oldPasswordHidden}
                            rightIcon={
                                <TouchableOpacity onPress={()=> this._changeView('oldPasswordHidden')} style={EditProfileStyle.inputHiddenBtn}>
                                    <Image source={(oldPasswordHidden) ? AppImages.inputHiddenBlue : AppImages.inputVisibleBlue} style={EditProfileStyle.eyeIcon} />
                                </TouchableOpacity>
                            }
                            autoFocus={true} />
                        <ReduxField
                            name="password"
                            placeholder="Type here"
                            label="Password"
                            style={EditProfileStyle.profileFormInput}
                            autoCapitalize="none"
                            info="8 characters minimum"
                            infoStyle={EditProfileStyle.infoStyle}
                            autoCorrect={false}
                            showSideError={true}
                            secureTextEntry={passwordHidden}
                            sideErrorInputStyle={EditProfileStyle.infoStyle}
                            rightIcon={
                                <TouchableOpacity onPress={()=> this._changeView('passwordHidden')} style={EditProfileStyle.inputHiddenBtn}>
                                    <Image source={(passwordHidden) ? AppImages.inputHiddenBlue : AppImages.inputVisibleBlue} style={EditProfileStyle.eyeIcon} />
                                </TouchableOpacity>
                            }
                            autoFocus={true} />
                        <ReduxField
                            name="reTypePassword"
                            placeholder="Type here"
                            label="Re-Type Password"
                            style={EditProfileStyle.profileFormInput}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={rePasswordHidden}
                            changeSuccessColor={true}
                            showSideError={true}
                            infoStyle={EditProfileStyle.infoStyle}
                            rightIcon={
                                <TouchableOpacity onPress={()=> this._changeView('rePasswordHidden')} style={EditProfileStyle.inputHiddenBtn}>
                                    <Image source={(rePasswordHidden) ? AppImages.inputHiddenBlue : AppImages.inputVisibleBlue} style={EditProfileStyle.eyeIcon} />
                                </TouchableOpacity>
                            }
                            autoFocus={true} />

                        <Col style={EditProfileStyle.profileCol}>
                            <Text style={[LayoutStyle.headerLabel,EditProfileStyle.labelProfile]}>PROFILE DETAILS</Text>
                            <ReduxField
                                name="first_name"
                                placeholder="Type here"
                                label="First Name"
                                style={EditProfileStyle.profileFormInput}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                showSideError={true} />
                            <ReduxField
                                name="last_name"
                                placeholder="Type here"
                                label="Last Name"
                                style={EditProfileStyle.profileFormInput}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                showSideError={true} />
                            <ReduxField
                                name="mobile"
                                placeholder="Type here"
                                label=" Phone"
                                style={EditProfileStyle.profileFormInput}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                showSideError={true}
                                maxLength={10}
                                labelIcon={
                                    <Image source={AppImages.phoneIcon} style={EditProfileStyle.formFieldIcon}/>
                                } />
                            <ReduxField
                                name="zipcode"
                                placeholder="Type here"
                                label=" Zip Code"
                                style={EditProfileStyle.profileFormInput}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoFocus={true}
                                showSideError={true}
                                maxLength={5}
                                labelIcon={
                                    <Image source={AppImages.zipIcon} style={EditProfileStyle.formFieldIcon}/>
                                } />
                        </Col>
                    </Col>
                    <Row style={EditProfileStyle.submitButtonRow}>
                        <Col>
                            <TouchableOpacity onPress={handleSubmit(this._handleSubmit)}
                                              disabled={(invalid) ? true : false}
                                              style={[EditProfileStyle.submitButton,(invalid) ? EditProfileStyle.serviceButtonInvalid : EditProfileStyle.serviceButtonValid]}>
                                <Text style={EditProfileStyle.serviceButtonText}>UPDATE ACCOUNT</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={EditProfileStyle.deleteBtnCol}>
                            <TouchableOpacity onPress={()=>{ Actions.deleteAccount() }}
                                              style={[EditProfileStyle.submitButton, EditProfileStyle.deleteBtn]}>
                                <Text style={EditProfileStyle.serviceButtonText}>DELETE ACCOUNT</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={EditProfileStyle.cancelCol}>
                            <TouchableOpacity onPress={() => Actions.viewProfile()}>
                                <Text style={EditProfileStyle.cancelText}>CANCEL</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Row>
            </Col>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.password = (values.password != undefined)
        ? (values.password.length < 8)
            ? '8 characters minimum'
            : undefined
        : undefined
    errors.reTypePassword = (values.reTypePassword != values.password)
        ? 'Does not match'
        : undefined;
    errors.first_name = !values.first_name
        ? 'Required'
        : undefined;

    errors.last_name = !values.last_name
        ? 'Required'
        : undefined;

    errors.mobile = !values.mobile
        ? 'Required'
        : (!numberRegex.test(values.mobile))
            ? 'Invalid'
            : undefined;

    errors.zipcode = !values.zipcode
        ? 'Required'
        : (!numberRegex.test(values.zipcode))
            ? 'Invalid'
            : undefined;

    return errors;
};

const initialValues = {
    email:'',
    password:'',
    reTypePassword:'',
    first_name:'',
    last_name:'',
    mobile:'',
    zipcode:'',
};

const withForm = reduxForm({
    form: 'editProfileForm',
    validate,
    initialValues
});

export default withLoader(withForm(EditProfileFieldForm));
