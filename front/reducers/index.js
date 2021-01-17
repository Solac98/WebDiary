import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import calendar from './calendar';
import bucket from './bucket';
import diary from './diary';

const rootReducer = (state, action) => {
    switch(action.type) {
        case HYDRATE: {
            console.log('HYDRATE', action);
            return action.payload;
        }
        default: {
            const combineReducer = combineReducers({
                user,
                calendar,
                bucket,
                diary,
            });
            return combineReducer(state, action);
        }
    }
}

export default rootReducer;
