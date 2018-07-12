/**
 * @providesModule ReduxStore
 */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { toast, currentUser, loader, registerUser, grid, viewProperty, addPropertyManaging, propertySettings, selectedCard, viewResident } from "./reducers";
import { reducer as formReducer } from 'redux-form';

const store = createStore(
    combineReducers({
        toast,
        currentUser,
        loader,
        registerUser,
        grid,
        viewProperty,
        addPropertyManaging,
        propertySettings,
        selectedCard,
        viewResident,
        form: formReducer
    }),
    compose(
        applyMiddleware()
    )
);

export default store;
