import { all, fork, takeLatest, call, put } from "redux-saga/effects"
import { ADD_BUCKET_FAILURE, ADD_BUCKET_SUCCESS, ADD_BUCKET_REQUEST, REMOVE_BUCKET_REQUEST, REMOVE_BUCKET_SUCCESS, REMOVE_BUCKET_FAILURE, LOAD_BUCKET_REQUEST, LOAD_BUCKET_SUCCESS, LOAD_BUCKET_FAILURE } from "../reducers/bucket";
import axios from 'axios';

function addBucketAPI(data) {
    return axios.post('/bucket', data);
}

function* addBucket(action) {
    try {   
        const result = yield call(addBucketAPI, action.data);
        yield put({
            type: ADD_BUCKET_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: ADD_BUCKET_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchAddBucket(){
    yield takeLatest(ADD_BUCKET_REQUEST, addBucket);
}

function removebucketAPI(data) {
    return axios.delete(`/bucket/${data}`);
}

function* removeBucket(action) {
    try {
        const result = yield call(removebucketAPI, action.data);
        yield put({
            type: REMOVE_BUCKET_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: REMOVE_BUCKET_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchRemoveBucket(){
    yield takeLatest(REMOVE_BUCKET_REQUEST, removeBucket);
}

function loadBucketAPI(){
    return axios.get("/bucket");
}

function* loadBucket() {
    try {
        const result = yield call(loadBucketAPI);
        yield put({
            type: LOAD_BUCKET_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        yield put({
            type: LOAD_BUCKET_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchLoadBucket() {
    yield takeLatest(LOAD_BUCKET_REQUEST, loadBucket);
}
export default function* bucketSaga() {
    yield all([
        fork(watchAddBucket),
        fork(watchLoadBucket),
        fork(watchRemoveBucket),
    ]);
}