/**
 * @providesModule ReduxActions
 */

export const NOTIFICATION_PUSH = 'notification/PUSH';
export const NOTIFICATION_POP = 'notification/POP';
export const CURRENT_USER_SET = 'currentUser/SET';
export const REGISTER_USER_SET = 'registerUser/SET';
export const LOADER_SET = 'loader/SET';
export const GRID_SET = 'grid/SET';
export const VIEW_PROPERTY_SET = 'viewProperty/SET';
export const ADD_PROPERTY_MANAGING_SET = 'addPropertyManaging/SET';
export const PROPERTY_SETTINGS = 'propertySettings/SET';
export const CARD_SET = 'selectedCard/SET';
export const VIEW_RESIDENT_SET = 'viewResident/SET';

// action creators

export const notificationPush = text => ({
    type: NOTIFICATION_PUSH,
    text
});

export const notificationPop = () => ({
    type: NOTIFICATION_POP
});

export const currentUserSet = user => ({
    type: CURRENT_USER_SET,
    user
});

export const loaderSet = state => ({
    type: LOADER_SET,
    state
});

export const registerUserSet = state => ({
    type: REGISTER_USER_SET,
    state
});

export const gridSet = state => ({
    type: GRID_SET,
    state
});

export const viewPropertySet = state => ({
    type: VIEW_PROPERTY_SET,
    state
});

export const addPropertyManagingSet = state => ({
    type: ADD_PROPERTY_MANAGING_SET,
    state
});

export const propertySettingsSet = state => ({
    type: PROPERTY_SETTINGS,
    state
});

export const selectedCardSet = state => ({
    type: CARD_SET,
    state
});

export const viewResidentSet = state => ({
    type: VIEW_RESIDENT_SET,
    state
});