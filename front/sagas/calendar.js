import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { ADD_CALENDAR_FAILURE, ADD_CALENDAR_REQUEST, ADD_CALENDAR_SUCCESS, LOAD_CALENDAR_REQUEST, LOAD_CALENDAR_SUCCESS, REMOVE_CALENDAR_FAILURE, REMOVE_CALENDAR_REQUEST, REMOVE_CALENDAR_SUCCESS } from '../reducers/calendar';

function addCalendarAPI(data){
    return axios.post('/calendar', data);
}

function* addCalendar(action) {
    try {
        const result = yield call(addCalendarAPI, action.data);
        yield put({
            type: ADD_CALENDAR_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: ADD_CALENDAR_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchAddCalendar() {
    yield takeLatest(ADD_CALENDAR_REQUEST, addCalendar);
}

function loadCalendarAPI(data) {
    return axios.get('/calendar');
}

function* loadCalendar(action) {
    try {
        const result = yield call(loadCalendarAPI, action.data);
        yield put({
            type: LOAD_CALENDAR_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: ADD_CALENDAR_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchLoadCalendar() {
    yield takeLatest(LOAD_CALENDAR_REQUEST, loadCalendar);
}

function removeCalendarAPI(data) {
    return axios.delete(`/calendar/${data.id}`);
}

function* removeCalendar(action) {
    try {
        const result = yield call(removeCalendarAPI, action.data);
        yield put({
            type: REMOVE_CALENDAR_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: REMOVE_CALENDAR_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchRemoveCalendar() {
    yield takeLatest(REMOVE_CALENDAR_REQUEST, removeCalendar);
}

export default function* calendarSaga (){
    yield all([
        fork(watchAddCalendar),
        fork(watchLoadCalendar),
        fork(watchRemoveCalendar),
    ]);
}