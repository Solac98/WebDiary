import { all, delay, fork, put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_FAILURE, LOG_OUT_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../reducers/user';
import { LOAD_BUCKET_REQUEST } from '../reducers/bucket';


function logInAPI(data) {
    return axios.post('/user/login', data);
}

function* logIn(action){
    try{
        const result = yield call(logInAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
        //Bucket Request
        yield put({
            type: LOAD_BUCKET_REQUEST,
        });
    } catch(err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}
function logOutAPI(){
    return axios.post('/user/logout');
}

function* logOut(){
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post('/user/signup', data);
}

function* signUp(action){
    try {
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.response.data,
        });
    }
}

function upDateAPI(data) {
    return axios.put('/user/update', data);
}

function* upDate(action) {
    try {
        const result = yield call(upDateAPI, action.data);
        yield put({
            type: UPDATE_USER_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: UPDATE_USER_FAILURE,
            error: error.response.data,
        });
    }
}

// LogIn
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}
// LogOut
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
//Sign Up
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
//Update
function* watchUpdate() {
    yield takeLatest(UPDATE_USER_REQUEST, upDate);
}


export default function* usersSaga() {
    yield all ([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchUpdate),
    ]);
}