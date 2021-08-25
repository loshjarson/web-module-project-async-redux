import { applyMiddleware, combineReducers, createStore } from "redux";
import { SearchFormReducer } from "./search-form.reducer";
import { SimilarInterestsReducer } from "./similar-interests.reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    form: SearchFormReducer,
    results: SimilarInterestsReducer,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));