import { combineReducers } from 'redux';
import eventReducer from './events';

export const rootReducer = combineReducers({
    events: eventReducer,
});