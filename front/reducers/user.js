import produce from '../util/produce';

//user 더미 데이터
const dummyUser = {
    id: 1,
    nickname: 'Solac',
  };

  export const initialState = {
    isLoggedIn: false,
    user: null,
  };

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름
//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case LOG_IN_REQUEST:{
            console.log("LOG_IN_REQUEST");
            draft.isLoggedIn = true;
            draft.user = dummyUser;
            break;
        }
        case LOG_OUT_REQUEST:{
            console.log("LOG_OUT_REQUEST");
            draft.isLoggedIn = false;
            draft.user = null;
            break;
        }
    }
})

export default reducer;