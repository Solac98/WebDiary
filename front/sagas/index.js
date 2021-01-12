import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import userSaga from './user';
import diarySaga from './diary';
import calendarSaga from './calendar';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;//브라우저에서 포트가 다른 백엔드 서버로 쿠키를 넘기기 위함.

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(diarySaga),
        fork(calendarSaga),
    ]);
}
