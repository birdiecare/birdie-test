import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchEventsSuccess } from '../actions/events';
import { INITIATE_FETCH } from '../constant';
import { Event, FetchRequest } from '@App/interface/event';
import apiCall from '@App/utils/apiCall';

export function* fetchEvents(params: FetchRequest) {
    try {
        const query = `event?page=${params.payload.page}&limit=${params.payload.limit}`;
        {/* @ts-ignore */ }
        const results = yield call(apiCall.get, query);
        const events: Event[] = results.data;
        yield put(fetchEventsSuccess(events));
    } catch (error) {
        yield put(fetchEventsSuccess([]));
    }
}

export function* watchFetchEvents() {
    yield takeLatest(INITIATE_FETCH, fetchEvents);
}

function* initSaga() {
    yield all([watchFetchEvents()]);
}

export default initSaga;