import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import position from './position_reducer';

const rootReducer = combineReducers({
    form,
    auth,
    team: position
});

export default rootReducer;
