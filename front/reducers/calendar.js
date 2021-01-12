import produce from '../util/produce';

//calender 더미 데이터

export const initialState = {
    calendar: [],
    addCalendarLoading: false,
    addCalendarDone: false,
    addCalendarError: null,

    loadCalendarLoading: false,
    loadCalendarDone: false,
    loadCalendarError: null,

    removeCalendarLoading: false,
    removeCalendarDone: false,
    removeCalendarError: null,
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
        case ADD_CALENDAR_REQUEST:{
            draft.addCalendarDone = false;
            draft.addCalendarLoading = true;
            draft.addCalendarError = null;
            break;
        }
        case ADD_CALENDAR_SUCCESS:{
            draft.calendar.unshift(action.data);
            draft.addCalendarDone = true;
            draft.addCalendarLoading = false;
            break;
        }
        case ADD_CALENDAR_FAILURE:{
            draft.addCalendarLoading = false;
            draft.addCalendarError = action.error;
            break;
        }
        case LOAD_CALENDAR_REQUEST:{
            draft.loadCalendarDone = false;
            draft.loadCalendarLoading = true;
            draft.loadCalendarError = null;
            break;
        }
        case LOAD_CALENDAR_SUCCESS:{
            draft.calendar = action.data;
            draft.loadCalendarDone = true;
            draft.loadCalendarLoading = false;
            break;
        }
        case LOAD_CALENDAR_FAILURE:{
            draft.loadCalendarLoading = false;
            draft.loadCalendarError = action.error;
            break;
        }
        case REMOVE_CALENDAR_REQUEST:{
            draft.removeCalendarDone = false;
            draft.removeCalendarLoading = true;
            draft.removeCalendarError = null;
            break;
        }
        case REMOVE_CALENDAR_SUCCESS:{
            draft.calendar = draft.calendar.filter((v) => v.id !== action.data.id);
            draft.removeCalendarDone = true;
            draft.removeCalendarLoading = false;
            break;
        }
        case REMOVE_CALENDAR_FAILURE:{
            draft.removeCalendarLoading = false;
            draft.removeCalendarError = action.error;
            break;
        }
        case LOG_OUT_REQUEST:{
            console.log("LOG_OUT_REQUEST");
            //draft.calenda = null;
            break;
        }
    }
})

export default reducer;