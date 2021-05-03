import { Action, Event } from '@App/interface/event';
import { FETCH_ALL_EVENTS } from '../constant';

const initialState: Array<Event> = [];

const eventReducer = (state: Array<Event> = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            return  action.payload;
        default:
            return state;
    }
}

export default eventReducer;