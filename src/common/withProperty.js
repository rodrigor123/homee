/**
 * @providesModule withProperty
 */

import { connect } from "react-redux";
import { viewPropertySet, addPropertyManagingSet, propertySettingsSet } from "ReduxActions";

const mapDispatchToProps = dispatch => ({
    setViewProperty: obj => {
        dispatch(viewPropertySet(obj));
    },
    setAddManagingProperty: obj => {
        dispatch(addPropertyManagingSet(obj));
    },
    setPropertySettings: obj => {
        dispatch(propertySettingsSet(obj))
    }
});

const mapStateToProps = state => ({
    viewProperty: state.viewProperty ? state.viewProperty : null,
    addPropertyManaging: state.addPropertyManaging ? state.addPropertyManaging : null,
    propertySettings: state.propertySettings ? state.propertySettings : null,
});

export default connect(mapStateToProps, mapDispatchToProps);
