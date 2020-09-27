import {GET_MOVIE_REQUEST, GET_MOVIE_DETAILS} from '../actions/movie.actions';

const initialState = {
    listMovie : [],
    detailMovie : {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return {
                ...state,
                data: action.playload,
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                data:action.playload,
            }
        default:
            return state;
    }
}