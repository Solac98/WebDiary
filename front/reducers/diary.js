import produce from '../util/produce';

//bucket 더미 데이터

export const initialState = {
    post: {
        Images: [],
    },
    imagePaths: [],
    removeImage: [],

    updateDiaryLoading: false,
    updateDiaryDone: false,
    updateDiaryError: null,

    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,

    addDiaryLoading: false,
    addDiaryDone: false,
    addDiaryError: null,

    loadDiaryLoading: false,
    loadDiaryDone: false,
    loadDiaryError: null,

    deleteDiaryLoading: false,
    deleteDiaryDone: false,
    deleteDiaryError: null,
};

export const UPDATE_DIARY_REQUEST = 'UPDATE_DIARY_REQUEST'; // 액션의 이름
export const UPDATE_DIARY_SUCCESS = 'UPDATE_DIARY_SUCCESS'; // 액션의 이름
export const UPDATE_DIARY_FAILURE = 'UPDATE_DIARY_FAILURE'; // 액션의 이름

export const UPDATE_REMOVE_IMAGE = "UPDATE_REMOVE_IMAGE";

export const DELETE_DIARY_REQUEST = 'DELETE_DIARY_REQUEST'; // 액션의 이름
export const DELETE_DIARY_SUCCESS = 'DELETE_DIARY_SUCCESS'; // 액션의 이름
export const DELETE_DIARY_FAILURE = 'DELETE_DIARY_FAILURE';
export const DELETE_DIARY_RESET = 'DELETE_DIARY_RESET';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST'; // 액션의 이름
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS'; // 액션의 이름
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE'; // 액션의 이름

export const LOAD_DIARY_REQUEST = 'LOAD_DIARY_REQUEST'; // 액션의 이름
export const LOAD_DIARY_SUCCESS = 'LOAD_DIARY_SUCCESS'; // 액션의 이름
export const LOAD_DIARY_FAILURE = 'LOAD_DIARY_FAILURE'; // 액션의 이름

export const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST'; // 액션의 이름
export const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS'; // 액션의 이름
export const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름

export const REMOVE_IMAGE = 'REMOVE_IMAGE';


//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case UPDATE_DIARY_REQUEST:{
            draft.updateDiaryLoading = true;
            draft.updateDiaryDone = false;
            draft.updateDiaryError = null;            
            break;
        }
        case UPDATE_DIARY_SUCCESS:{
            draft.updateDiaryLoading = false;
            draft.updateDiaryDone = true;
            draft.post = action.data;
            draft.removeImage = [];
            draft.imagePaths = [];
            break;
        }
        case UPDATE_DIARY_FAILURE:{
            draft.updateDiaryLoading = false;
            draft.updateDiaryError = action.error;
            break;
        }
        case DELETE_DIARY_RESET: {
            draft.deleteDiaryDone = false;
        }
        case DELETE_DIARY_REQUEST: {
            draft.deleteDiaryLoading = true;
            draft.deleteDiaryDone = false;
            draft.deleteDiaryError = null;
            break;
        }
        case DELETE_DIARY_SUCCESS: {
            draft.post = {
                Images: [],
            };
            draft.imagePaths = [];
            draft.deleteDiaryLoading = false;
            draft.deleteDiaryDone = true;
            break;
        }
        case DELETE_DIARY_FAILURE: {
            draft.deleteDiaryLoading = false;
            draft.deleteDiaryError = action.error;
            break;
        }
        case REMOVE_IMAGE:
            draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
            break;
        case LOG_OUT_SUCCESS://Logout - Reset DiaryData
            draft.post = {
                Images: [],
            };
            draft.imagePaths = [];
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
        case UPDATE_REMOVE_IMAGE: {
            draft.removeImage.push(action.data);
        }
    }
})

export default reducer;