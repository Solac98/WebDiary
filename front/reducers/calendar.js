import produce from '../util/produce';

//user 더미 데이터
const dummyCalendar = [{ id: 1, date: '2021-01-08', type: 'success', content: 'This is warning event.' },
{ id: 2, date: '2021-01-08', type: 'success', content: 'This is usual event.' },
{ id: 3, date: '2021-01-10', type: 'success', content: 'This is warning event.' },
{ id: 4, date: '2021-01-10', type: 'success', content: 'This is usual event.' },
{ id: 5, date: '2021-01-10', type: 'success', content: 'This is error event.' },
{ id: 6, date: '2021-02-10', type: 'success', content: '호호호.' },];

export const initialState = {
    mainData: [{ id: 1, date: '2021-01-08', type: 'success', content: 'This is warning event.' },
    { id: 2, date: '2021-01-08', type: 'success', content: 'This is usual event.' },
    { id: 3, date: '2021-01-10', type: 'success', content: 'This is warning event.' },
    { id: 4, date: '2021-01-10', type: 'success', content: 'This is usual event.' },
    { id: 5, date: '2021-01-10', type: 'success', content: 'This is error event.' },
    { id: 6, date: '2021-02-10', type: 'success', content: '호호호.' },],
};

export const LOAD_CALENDAR_REQUEST = 'LOAD_CALENDAR_REQUEST'; // 액션의 이름
export const LOAD_CALENDAR_SUCCESS = 'LOAD_CALENDAR_SUCCESS'; // 액션의 이름
export const LOAD_CALENDAR_FAILURE = 'LOAD_CALENDAR_FAILURE'; // 액션의 이름

export const ADD_CALENDAR_REQUEST = 'ADD_CALENDAR_REQUEST'; // 액션의 이름
export const ADD_CALENDAR_SUCCESS = 'ADD_CALENDAR_SUCCESS'; // 액션의 이름
export const ADD_CALENDAR_FAILURE = 'ADD_CALENDAR_FAILURE'; // 액션의 이름

export const REMOVE_CALENDAR_REQUEST = 'REMOVE_CALENDAR_REQUEST'; // 액션의 이름
export const REMOVE_CALENDAR_SUCCESS = 'REMOVE_CALENDAR_SUCCESS'; // 액션의 이름
export const REMOVE_CALENDAR_FAILURE = 'REMOVE_CALENDAR_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름
//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case LOAD_CALENDAR_REQUEST:{
            console.log("LOAD_CALENDAR_REQUEST / Load - Calendar");
            draft.mainData = draft.mainData;
            break;
        }
        case ADD_CALENDAR_REQUEST:{
            console.log("ADD_CALENDAR_REQUEST / Add - Calendar");
            draft.mainData.push(action.data);
            break;
        }
        case REMOVE_CALENDAR_REQUEST:{
            console.log("REMOVE_CALENDAR_REQUEST / Remove - Calendar");
            draft.mainData = draft.mainData.filter((v) => v.id !== action.data.content.id);
            break;
        }
        case LOG_OUT_REQUEST:{
            console.log("LOG_OUT_REQUEST");
            draft.mainData = null;
            break;
        }
    }
})

export default reducer;