import Axios from 'axios';
export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const GET_MOVIE_COMINGSOON = 'GET_MOVIE_COMINGSOON';

// export const GET_MOVIE_ERRORS = 'GET_MOVIE_ERRORS'


export function getMovieRequest (data) {
    return {
        type: GET_MOVIE_REQUEST,
        playload: data,

    }
}

export function getMovieDetails(data) {
    return {
        type: GET_MOVIE_DETAILS,
        playload:data,
    }
}

export function getMovieComingSoon(data) {
    return {
        type: GET_MOVIE_COMINGSOON,
        playload:data,
    }
}


export const getMovieAction = ()  => {
    return async (dispatch) => {
        const response = await Axios
        .get('https://api.themoviedb.org/3/movie/now_playing?api_key=d6e8de19b637f5c3b1c721dd6cafa9c0');
        dispatch(getMovieRequest(response.data.results));
        console.log('hasil get movire', response);
    }
}

export const getDetailsMovieAction = (movie_id)  => {
    return async (dispatch) => {
        const response = await Axios
        .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d6e8de19b637f5c3b1c721dd6cafa9c0`);
        dispatch(getMovieDetails(response.data));
        console.log('hasil detail', response);
    }
}

export const getMovieActionComingSoon = ()  => {
    return async (dispatch) => {
        const response = await Axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=d6e8de19b637f5c3b1c721dd6cafa9c0');
        dispatch(getMovieRequest(response.data.results));
        console.log('hasil get movire', response);
    }
}