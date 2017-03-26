import { combineReducers } from 'redux';
import position from './position_reducer';

const teamReducer = combineReducers({
    position
});

export default teamReducer;
