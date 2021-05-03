import { Event } from '@App/interface/event';
import { combineReducers } from 'redux';
import eventReducer from './events';

export type RootState = Readonly<{
    events: Array<Event>,
}>;

export const rootReducer = combineReducers<RootState>({
    events: eventReducer,
});