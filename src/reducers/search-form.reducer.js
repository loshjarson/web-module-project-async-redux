import { UPDATE_INTEREST } from "../actions";

const initialState = {
    interest: ''
}

export const SearchFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INTEREST:
            return {...state, interest: action.text}
        default:
            return state;
    }
}