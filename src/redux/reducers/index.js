import {combineReducers} from 'redux';
import movie from './movie.reducers';

const rootReducers = combineReducers({movie});

export default rootReducers;