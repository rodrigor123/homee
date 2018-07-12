/**
 * @providesModule withGrid
 */

import { connect } from "react-redux";
import { gridSet } from "ReduxActions";

const mapDispatchToProps = dispatch => ({
    gridSet: state => {
        dispatch(gridSet(state));
    }
});

const mapStateToProps = state => ({
    grid: state.grid ? state.grid : false
});

export default connect(mapStateToProps,mapDispatchToProps);
