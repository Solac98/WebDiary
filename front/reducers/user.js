import produce from '../util/produce';

//user 더미 데이터
const dummyUser = {
    id: 1,
    nickname: 'Solac',
  };

  export const initialState = {
      isLoggedIn: false,// Log or Not Log
      isLogLoading: false, // Login Lodaing
      isLogError: null, //LogIn Error
      isSignUpDone: false, // Sign Up Done
      isSignUpLoading: false,// Sign Up Loading
      isSignUpError: null,// Sign Up Error

      user: null,// User Info
  };

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 액션의 이름
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // 액션의 이름
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 액션의 이름
export const SIGN_UP_RESET = 'SIGN_UP_RESET'; // 액션의 이름

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        // Login
        case LOG_IN_REQUEST:{
            draft.isLogLoading = true; // LogIn Loading On
            break;
        }
        case LOG_IN_SUCCESS: {
            draft.isLogLoading = false; //LogIn Loading Off
            draft.isLoggedIn = true; //LogIn Done
            draft.user = action.data; // UserData Insert
            break;
        }
        case LOG_IN_FAILURE: {
            draft.isLogLoading = false; //LogIn Loading Off
            draft.isLogError = action.error;// Error Insert
            break;
        }
        // Logout
        case LOG_OUT_REQUEST:{
            draft.isLogLoading = true; // LogIn Loading On
            break;
        }
        case LOG_OUT_SUCCESS: {
            draft.isLogLoading = false; //LogIn Loading Off
            draft.isLoggedIn = false; //LogIn Done
            draft.user = null; // UserData Insert
            break;
        }
        case LOG_OUT_FAILURE: {
            draft.isLogLoading = false; //LogIn Loading Off
            draft.isLogError = action.data;// Error Insert
            break;
        }
        // Sign Up
        case SIGN_UP_REQUEST:{
            draft.isSignUpLoading = true; // SignUp Loading On
            draft.isSignUpError = null; // SignUp Error Null
            break;
        }
        case SIGN_UP_SUCCESS: {
            draft.isSignUpDone = true; // SignUp Done On
            draft.isSignUpLoading = false; //SignUp Loading Off
            break;
        }
        case SIGN_UP_FAILURE: {
            draft.isSignUpLoading = false; //SignUp Loading Off
            draft.isSignUpError = action.error;// Error Insert
            break;
        }
        case SIGN_UP_RESET: {
            draft.isSignUpDone = false; //SignUp Done Null
            break;
        }
    }
})

export default reducer;