import React, { Component } from 'react';
import { Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import withToast from 'withToast';
import withLoader from 'withLoader';
import withUser from 'withUser';
import { storeUser, emailRegex, numberRegex, MANUAL } from 'global';
import withRegisterUser from 'withRegisterUser';
import RegisterFieldForm from '../components/RegisterFieldForm';

class Register extends Component {

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

    _onSubmit = ({referralCode, email, password, reTypePassword, first_name, last_name, mobile, zipcode}) => {
        const { setRegisterUser, registerUser } = this.props;
        let regData = Object.assign({referralCode, email, password, reTypePassword, first_name, last_name, mobile, zipcode, type:MANUAL, image:(registerUser == null) ? {uri:''} : registerUser.image});
        setRegisterUser(regData);
        Actions.reviewProfile();
    }

    render () {
        const { registerUser } = this.state;
        const registerFieldForm = {
            initialValues: registerUser
        }
        return (
            <Content>
                <RegisterFieldForm {...this.props} {...registerFieldForm} onSubmit={this._onSubmit.bind(this)} />
            </Content>
        );
    }
}

export default withUser(withToast(withLoader(withRegisterUser(Register))));
