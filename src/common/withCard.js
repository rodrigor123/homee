/**
 * @providesModule withCard
 */

import { connect } from "react-redux";
import { selectedCardSet } from "ReduxActions";

const mapDispatchToProps = dispatch => ({
    setSelectedCard: obj => {
        dispatch(selectedCardSet(obj));
    }
});

const mapStateToProps = state => ({
    selectedCard: state.selectedCard ? state.selectedCard : null
});

export default connect(mapStateToProps, mapDispatchToProps);
