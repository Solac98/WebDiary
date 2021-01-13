import produce from '../util/produce';

//bucket 더미 데이터


export const initialState = {
    bucket: [],

    addBucketLoading: false,
    addBucketDone: false,
    addBucketError: null,

    loadBucketLoading: false,
    loadBucketDone: false,
    loadBucketError: null,

    removeBucketLoading: false,
    removeBucketDone: false,
    removeBucketError: null,
};

export const LOAD_BUCKET_REQUEST = 'LOAD_BUCKET_REQUEST'; // 액션의 이름
export const LOAD_BUCKET_SUCCESS = 'LOAD_BUCKET_SUCCESS'; // 액션의 이름
export const LOAD_BUCKET_FAILURE = 'LOAD_BUCKET_FAILURE'; // 액션의 이름

export const ADD_BUCKET_REQUEST = 'ADD_BUCKET_REQUEST'; // 액션의 이름
export const ADD_BUCKET_SUCCESS = 'ADD_BUCKET_SUCCESS'; // 액션의 이름
export const ADD_BUCKET_FAILURE = 'ADD_BUCKET_FAILURE'; // 액션의 이름

export const REMOVE_BUCKET_REQUEST = 'REMOVE_BUCKET_REQUEST'; // 액션의 이름
export const REMOVE_BUCKET_SUCCESS = 'REMOVE_BUCKET_SUCCESS'; // 액션의 이름
export const REMOVE_BUCKET_FAILURE = 'REMOVE_BUCKET_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름
//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case LOAD_BUCKET_REQUEST: {
            draft.bucket = draft.bucket;
            break;
        }
        case LOAD_BUCKET_REQUEST: {
            draft.loadBucketDone = false;
            draft.loadBucketLoading = true;
            draft.loadBucketError = null;
            break;
        }
        case LOAD_BUCKET_SUCCESS: {
            draft.bucket = action.data;
            draft.loadBucketDone = true;
            draft.loadBucketLoading = false;
            break;
        }
        case LOAD_BUCKET_FAILURE: {
            draft.loadBucketLoading = false;
            draft.loadBucketError = action.error;
            break;
        }
        case ADD_BUCKET_REQUEST: {
            draft.addBucketDone = false;
            draft.addBucketLoading = true;
            draft.addBucketError = null;
            break;
        }
        case ADD_BUCKET_SUCCESS: {
            draft.bucket.push(action.data);
            draft.addBucketDone = true;
            draft.addBucketLoading = false;
            break;
        }
        case ADD_BUCKET_FAILURE: {
            draft.addBucketLoading = false;
            draft.addBucketError = action.error;
            break;
        }
        case REMOVE_BUCKET_REQUEST: {
            draft.removeBucketDone = false;
            draft.removeBucketLoading = true;
            draft.removeBucketError = null;
            break;
        }
        case REMOVE_BUCKET_SUCCESS: {
            draft.bucket = draft.bucket.filter((v) => v.id !== action.data.id);
            draft.removeBucketDone = true;
            draft.removeBucketLoading = false;
            break;
        }
        case REMOVE_BUCKET_FAILURE: {
            draft.removeBucketLoading = false;
            draft.removeBucketError = action.error;
            break;
        }
        case LOG_OUT_REQUEST:{
            console.log("LOG_OUT_REQUEST");
            //draft.bucket = null;
            break;
        }
    }
})

export default reducer;