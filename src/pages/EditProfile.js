import React, { Component } from 'react';
import { TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { Content, Grid, Row, Col, Label, Thumbnail } from 'native-base';
import EditProfileStyle from 'EditProfileStyle';
import { IMAGE_BASE_URL } from 'global';
import withUser from 'withUser';
import withToast from 'withToast';
import withLoader from 'withLoader';
import EditProfileFieldForm from '../components/EditProfileFieldForm';
import API from 'AppUtils';
import { Actions } from 'react-native-router-flux';

class EditProfile extends  Component {

    constructor(props) {
        super(props);
    }

    _onSubmit = (formData, image) => {
        const { loader, toast, setUser, user } = this.props;
        const { password, reTypePassword, old_password } = formData;
        let editProfilePromiseRequest = [];
        setTimeout(() => { loader(true); }, 1);

        editProfilePromiseRequest.push(new Promise(async (resolve) => {
            API.updateUserProfile(formData)
                .then((response) => {
                    const { error, message } = response;
                    if (error) {
                        toast({text: message});
                    }else{
                        const { first_name, last_name, company, mobile, zipcode } = formData;
                        const userData = { first_name, last_name, company, mobile, zipcode };
                        setUser(Object.assign(user, userData));
                        resolve(message);
                    }
                });
        }));

        if (password) {
            editProfilePromiseRequest.push(new Promise(async (resolve) => {
                API.updateUserPassword({old_password, new_password: reTypePassword})
                    .then((response) => {
                        const { error, message } = response;
                        if (error) {
                            toast({text: message});
                        }else{
                            resolve(message);
                        }
                    });
            }));
        }

        if (image) {
            editProfilePromiseRequest.push(new Promise(async (resolve) => {
                API.updateProfileAvatar({image})
                    .then(response => {
                        const { error, message } = response;
                        if (error) {
                            toast({text: message});
                        }else{
                            setUser(Object.assign(user, {imageChanged: true}));
                            resolve(message);
                        }
                    });
            }));
        }

        Promise.all(editProfilePromiseRequest)
            .then((allResponse) => {
                setTimeout(() => {
                    loader(false);
                    Actions.viewProfile();
                    toast({text:'User profile updated successfully', type:'success', navBar:true});
                },100);

            });
    }

    render(){
        const { user } = this.props;
        const editProfileFieldForm = {
            initialValues: user
        }

        return(
            <Content style={EditProfileStyle.container}>
                <Grid style={EditProfileStyle.mainGrid}>
                    <Row>
                        <Col style={EditProfileStyle.gridTitleCol}>
                            <Text style={EditProfileStyle.gridTitle}>EDIT USER PROFILE</Text>
                        </Col>
                    </Row>
                    <Row style={EditProfileStyle.gridRow}>
                        <EditProfileFieldForm {...this.props} {...editProfileFieldForm} onSubmit={this._onSubmit.bind(this)} />
                    </Row>
                </Grid>
            </Content>
        )
    }
}

export default withUser(withToast(withLoader(EditProfile)));
