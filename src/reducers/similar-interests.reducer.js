import { GOT_SIMILAR_INTERESTS } from "../actions";

const initialState = {
    similarInterests: [],
    hasResults: false
}

export const SimilarInterestsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_SIMILAR_INTERESTS:
            console.log(action);
            return {...state, hasResults: true, similar: action.similar}
        default:
            return state;
    }
}

