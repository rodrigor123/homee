import {
    NOTIFICATION_PUSH,
    NOTIFICATION_POP,
    CURRENT_USER_SET,
    LOADER_SET,
    REGISTER_USER_SET,
    GRID_SET,
    VIEW_PROPERTY_SET,
    ADD_PROPERTY_MANAGING_SET,
    PROPERTY_SETTINGS,
    CARD_SET,
    VIEW_RESIDENT_SET
} from "ReduxActions";

export const toast = (state = [], action) => {
    switch (action.type) {
        case NOTIFICATION_PUSH:
            return [...state, action.text];

        case NOTIFICATION_POP:
            return state.length > 0 ? state.slice(1) : state;

        default:
            return state;
    }
};

export const currentUser = (state = null, action) => {
    switch (action.type) {
        case CURRENT_USER_SET:
            return action.user;

        default:
            return state;
    }
};

export const registerUser = (state = null, action) => {
    switch (action.type) {
        case REGISTER_USER_SET:
            return action.state;

        default:
            return state;
    }
};

export const loader = (state = {}, action) => {
    switch (action.type) {
        case LOADER_SET:
            return action.state;

        default:
            return false;
    }
};

export const grid = (state = false, action) => {
    switch (action.type) {
        case GRID_SET:
            return action.state;

        default:
            return state;
    }
};

export const viewProperty = (state = null, action) => {
    switch (action.type) {
        case VIEW_PROPERTY_SET:
            return action.state;
        default:
            return state;
    }
};

export const addPropertyManaging = (state = null, action) => {
    switch (action.type) {
        case ADD_PROPERTY_MANAGING_SET:
            return action.state;
        default:
            return state;
    }
};

export const propertySettings = (state = null, action) => {
    switch (action.type) {
        case PROPERTY_SETTINGS:
            return action.state;
        default:
            return state;
    }
};

export const selectedCard = (state = null, action) => {
    switch (action.type) {
        case CARD_SET:
            return action.state;

        default:
            return state;
    }
};

export const viewResident = (state = null, action) => {
    switch (action.type) {
        case VIEW_RESIDENT_SET:
            return action.state;
        default:
            return state;
    }
};

