/**
 * @providesModule withRegisterUser
 */

import { connect } from "react-redux";
import { registerUserSet } from "ReduxActions";

const mapDispatchToProps = dispatch => ({
    setRegisterUser: obj => {
        dispatch(registerUserSet(obj));
    }
});

const mapStateToProps = state => ({
    registerUser: state.registerUser ? state.registerUser : null
});

export default connect(mapStateToProps, mapDispatchToProps);
