import produce from '../util/produce';

//bucket 더미 데이터

export const initialState = {
    post: {
        Images: [],
    },
    imagePaths: [],
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,

    addDiaryLoading: false,
    addDiaryDone: false,
    addDiaryError: null,

    loadDiaryLoading: false,
    loadDiaryDone: false,
    loadDiaryError: null,
};

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST'; // 액션의 이름
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS'; // 액션의 이름
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE'; // 액션의 이름

export const LOAD_DIARY_REQUEST = 'LOAD_DIARY_REQUEST'; // 액션의 이름
export const LOAD_DIARY_SUCCESS = 'LOAD_DIARY_SUCCESS'; // 액션의 이름
export const LOAD_DIARY_FAILURE = 'LOAD_DIARY_FAILURE'; // 액션의 이름

export const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST'; // 액션의 이름
export const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS'; // 액션의 이름
export const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE'; // 액션의 이름

export const REMOVE_DIARY_REQUEST = 'REMOVE_DIARY_REQUEST'; // 액션의 이름
export const REMOVE_DIARY_SUCCESS = 'REMOVE_DIARY_SUCCESS'; // 액션의 이름
export const REMOVE_DIARY_FAILURE = 'REMOVE_DIARY_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름

export const REMOVE_IMAGE = 'REMOVE_IMAGE';


//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case REMOVE_IMAGE:
            draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
            break;
        case UPLOAD_IMAGES_REQUEST: {
            draft.uploadImagesLoading = true;
            draft.uploadImagesDone = false;
            draft.uploadImagesError = null;
            break;
        }
        case UPLOAD_IMAGES_SUCCESS: {
            draft.imagePaths = action.data;
            draft.uploadImagesLoading = false;
            draft.uploadImagesDone = true;
        break;
        }
        case UPLOAD_IMAGES_FAILURE: {
            draft.uploadImagesLoading = false;
            draft.uploadImagesError = action.error;
            break;
        }
        case LOAD_DIARY_REQUEST:{
            draft.loadDiaryLoading = true;
            draft.loadDiaryDone = false;
            draft.loadDiaryError = null;
            break;
        }
        case LOAD_DIARY_SUCCESS:{
            draft.loadDiaryLoading = false;
            draft.loadDiaryDone = true;
            draft.post = action.data;
            break;
        }
        case LOAD_DIARY_FAILURE:{
            draft.loadDiaryLoading = false;
            draft.loadDiaryError = action.error;
            break;
        }
        case ADD_DIARY_REQUEST:{
            draft.addDiaryLoading = true;
            draft.addDiaryDone = false;
            draft.addDiaryError = null;            
            break;
        }
        case ADD_DIARY_SUCCESS:{
            draft.addDiaryLoading = false;
            draft.addDiaryDone = true;
            draft.post = action.data;
            break;
        }
        case ADD_DIARY_FAILURE:{
            draft.addDiaryLoading = false;
            draft.addDiaryError = action.error;
            break;
        }
        case REMOVE_DIARY_REQUEST:{
            //현재는 더미데이터에서 삭제하지만 디비 작업시 디비에서 삭제
            draft.dummyData = dummyData.post.filter((v) => v.id !== action.data.id);
            break;
        }
    }
})

export default reducer;