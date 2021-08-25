import axios from "axios"

export const UPDATE_INTEREST = "Update Interest";
export const GET_SIMILAR_INTERESTS = "Get SimilarInterests";
export const GOT_SIMILAR_INTERESTS = "Got SimilarInterests";

export const getSimilarInterests = interest => dispatch => {
    let altered = interest.split(' ').join('+');
    axios.get(`https://fierce-woodland-98215.herokuapp.com/https://tastedive.com/api/similar?q=${altered}`).then(result => {
        const similarInterests = result.data.Similar.Results;
        
        dispatch(gotSimilarInterests(similarInterests)) 
    })
}

export const gotSimilarInterests = (similarInterests) => {
    
    return {type: GOT_SIMILAR_INTERESTS, similarInterests}
}

export const updateInterest = text => {
    return {type: UPDATE_INTEREST, text}
}
