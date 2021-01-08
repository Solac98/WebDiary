import produce from '../util/produce';

//bucket 더미 데이터


export const initialState = {
    bucket: [{
        id: 1,
        content: '다 이 어 트'
    }, {
        id: 2,
        content: '적금 일정금액 이상 하기'
    }, {
        id: 3,
        content: '실제 사용할 프로젝트 구상 및 구현하기'
    }],
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
        case LOAD_BUCKET_REQUEST:{
            draft.bucket = draft.bucket;
            break;
        }
        case ADD_BUCKET_REQUEST:{
            draft.bucket.push(action.data);
            break;
        }
        case REMOVE_BUCKET_REQUEST:{
            draft.bucket = draft.bucket.filter((v) => v.id !== action.data.id);
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