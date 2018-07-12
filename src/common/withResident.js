/**
 * @providesModule withResident
 */

import { connect } from "react-redux";
import { viewResidentSet } from "ReduxActions";

const mapDispatchToProps = dispatch => ({
    setViewResident: obj => {
        dispatch(viewResidentSet(obj));
    }
});

const mapStateToProps = state => ({
    viewResident: state.viewResident ? state.viewResident : null
});

export default connect(mapStateToProps, mapDispatchToProps);
