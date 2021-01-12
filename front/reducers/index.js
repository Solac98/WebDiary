import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import calendar from './calendar';
import bucket from './bucket';
import diary from './diary';

const rootReducer = combineReducers({
    index: (state ={}, action) => {
        switch(action.type){
            case HYDRATE :
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    calendar,
    bucket,
    diary,
    calendar,
});

export default rootReducer;
