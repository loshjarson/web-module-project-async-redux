import axios from "axios"

export const UPDATE_INTEREST = "Update Interest";
export const GET_SIMILAR_INTERESTS = "Get SimilarInterests";
export const GOT_SIMILAR_INTERESTS = "Got SimilarInterests";

export const getSimilarInterests = interest => dispatch => {
    let altered = interest.split(' ').join('+');
    axios.get(`https://tastedive.com/api/similar?q=${altered}`).then(result => {
        console.log(result);
        const similarInterests = result.data;
        dispatch(gotSimilarInterests(similarInterests)) 
    })
}

export const gotSimilarInterests = (name) => {
    console.log(name);
    return {type: GOT_SIMILAR_INTERESTS, name}
}

export const updateInterest = text => {
    return {type: UPDATE_INTEREST, text}
}
