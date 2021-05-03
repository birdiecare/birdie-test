import { FetchEvents, FetchRequest } from '@App/interface/event';
import { INITIATE_FETCH, FETCH_ALL_EVENTS } from '../constant';
import { Event } from '@App/interface/event';
import { Paginate } from '@App/interface/paginate';

export function fetchEventsRequest(payload: Paginate): FetchRequest {
  return {
    payload,
    type: INITIATE_FETCH,
  };
}

export function fetchEventsSuccess(payload: Event[]): FetchEvents {
  return {
    type: FETCH_ALL_EVENTS,
    payload,
  };
}