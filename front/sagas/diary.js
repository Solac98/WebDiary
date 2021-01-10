import axios from 'axios';
import { all, fork, put, takeLatest, throttle, call} from 'redux-saga/effects';
import { ADD_DIARY_REQUEST, ADD_DIARY_SUCCESS, ADD_DIARY_FAILURE, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, LOAD_DIARY_REQUEST, LOAD_DIARY_SUCCESS, LOAD_DIARY_FAILURE, DELETE_DIARY_REQUEST, DELETE_DIARY_SUCCESS, DELETE_DIARY_FAILURE } from '../reducers/diary';

function uplodaImagesAPI(data){
    return axios.post('/diary/images', data);
}

function* uplodaImages(action){
    try {
        const result = yield call(uplodaImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: error.response.data,
        });
    }
}

function addDiaryAPI(data){
    return axios.post('/diary', data);
}

function* addDiary(action){
    try {
        const result = yield call(addDiaryAPI, action.data);
        yield put({
            type: ADD_DIARY_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: ADD_DIARY_FAILURE,
            error: error.response.data,
        });
    }
}

function loadDiaryAPI(data){
    return axios.post('/diary/load', data);
}

function* loadDiary(action){
    try {
        const result = yield call(loadDiaryAPI, action.data);
        yield put({
            type: LOAD_DIARY_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LOAD_DIARY_FAILURE,
            error: error.response.data,
        });
    }
}

function deleteDiaryAPI(data){
    return axios.delete(`/diary/${data}`);
}

function* deleteDiary(action){
    try {
        const result = yield call(deleteDiaryAPI, action.data)
        yield put({
            type: DELETE_DIARY_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: DELETE_DIARY_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchUploadImages(){
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uplodaImages);
}

function* watchAddDiary() {
    yield takeLatest(ADD_DIARY_REQUEST, addDiary);
}

function* watchLoadDiary(){
    yield takeLatest(LOAD_DIARY_REQUEST, loadDiary);
}

function* watchDeleteDiary(){
    yield takeLatest(DELETE_DIARY_REQUEST, deleteDiary);
}

export default function* diarySaga() {
    yield all([
        fork(watchUploadImages),
        fork(watchAddDiary),
        fork(watchLoadDiary),
        fork(watchDeleteDiary),
    ]);
}