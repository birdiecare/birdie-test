import { FETCH_ALL_EVENTS, INITIATE_FETCH } from '@App/store/constant';
import { Paginate } from '@App/interface/paginate';

export interface Data {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: string;
  caregiver_id: string;
  care_recipient_id: string;
  mood?: string;
}

export interface Event {
   payload: Data
}

export interface Action {
    type: string;
    payload: Event;
}

export interface FetchEvents {
  type: typeof FETCH_ALL_EVENTS;
  payload: Event[];
}
export interface FetchRequest {
  type: typeof INITIATE_FETCH;
  payload: Paginate;
}