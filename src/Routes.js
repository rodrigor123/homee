import React, { Component } from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import Login from './pages/Login';
import Register from './pages/Register';
import Splash from './pages/Splash';
import SocialRegister from './pages/SocialRegister';
import SocialRegisterForm from './pages/SocialRegisterForm';
import PasswordReset from './pages/PasswordReset';
import EmailRecover from './pages/EmailRecover';
import ReviewProfile from './pages/ReviewProfile';
import DeleteAccount from './pages/DeleteAccount';
import MapHome from './pages/MapHome';
import Home from './pages/Home';
import ViewProfile from './pages/ViewProfile';
import EditProfile from './pages/EditProfile';
import AddProperty from './pages/AddProperty';
import HomeeHeader from './components/HomeeHeader';
import OwnerResident from './pages/OwnerResident';
import ViewPropertyDetails from './pages/ViewPropertyDetails';
import RemoveOwnerResidentProperty from './pages/RemoveOwnerResidentProperty';
import AddCreditCard from './pages/AddCreditCard';
import CreditCardOptions from './pages/CreditCardOptions';
import RemoveCreditCard from './pages/RemoveCreditCard';
import ReplaceCreditCard from './pages/ReplaceCreditCard';
import ResidentPropertyApproval from './pages/ResidentPropertyApproval';
import ResidentAddPropertyApproved from './pages/ResidentAddPropertyApproved';
import JobHistory from './pages/JobHistory';
import Managing from './pages/Managing';
import Menu from 'Menu';
import StyleConfig from 'StyleConfig';
import ResidentList from './pages/ResidentList';
import RemoveResident from './pages/RemoveResident';
import ResidentRemoveProperty from './pages/ResidentRemoveProperty';
import JobRequest from './pages/JobRequest';

export default () => (
    <Router>
        <Scene key="root">
            <Scene type="replace" key="splash" component={Splash} hideNavBar={true} panHandlers={null} initial />
            <Scene type="replace" key="mapHome" component={MapHome} hideNavBar={true} panHandlers={null} />
            <Scene type="replace" key="login" component={Login} hideNavBar={true} panHandlers={null} />
            <Scene type="replace" key="register" component={Register} navBar={() => <HomeeHeader
                notification={false} back="socialRegister" />} panHandlers={null} />
            <Scene type="replace" key="socialRegister" component={SocialRegister} hideNavBar={true} panHandlers={null} />
            <Scene type="replace" key="socialRegisterForm" component={SocialRegisterForm} hideNavBar={true} panHandlers={null} />
            <Scene type="replace" key="passwordReset" component={PasswordReset} hideNavBar={true} panHandlers={null} />
            <Scene type="replace" key="emailRecover" component={EmailRecover} hideNavBar={true} panHandlers={null} />
            <Scene type="replace" key="reviewProfile" component={ReviewProfile} navBar={() => <HomeeHeader notification={false} />} panHandlers={null} />
            <Scene type="replace" key="main" panHandlers={null} navBar={() => (<HomeeHeader notification={true} menu={true} />)} >
                <Scene type="replace" key="drawer" panHandlers={null} drawer contentComponent={Menu}
                       drawerPosition="right"
                       drawerWidth={StyleConfig.drawerWidth}
                       hideNavBar={true}>
                    <Scene type="replace" key="home" component={Home} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="viewProfile" component={ViewProfile} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="editProfile" component={EditProfile} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="deleteAccount" component={DeleteAccount} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="addProperty" component={AddProperty} hideNavBar={true}  panHandlers={null} />
                    <Scene type="replace" key="ownerResident" component={OwnerResident} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="ResidentPropertyApproval" component={ResidentPropertyApproval} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="viewPropertyDetails" component={ViewPropertyDetails} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="removeOwnerResidentProperty" component={RemoveOwnerResidentProperty} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="addCreditCard" component={AddCreditCard} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="creditCardOptions" component={CreditCardOptions} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="removeCreditCard" component={RemoveCreditCard} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="replaceCreditCard" component={ReplaceCreditCard} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="residentAddPropertyApproved" component={ResidentAddPropertyApproved} hideNavBar={true}  />
                    <Scene type="replace" key="managing" component={Managing} hideNavBar={true} panHandlers={null}  />
                    <Scene type="replace" key="jobHistory" component={JobHistory} hideNavBar={true} panHandlers={null}  />
                    <Scene type="replace" key="residentList" component={ResidentList} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="removeResident" component={RemoveResident} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="residentRemoveProperty" component={ResidentRemoveProperty} hideNavBar={true} panHandlers={null} />
                    <Scene type="replace" key="jobRequest" component={JobRequest} hideNavBar={true} panHandlers={null} />
                </Scene>
            </Scene>
        </Scene>
    </Router>
);
