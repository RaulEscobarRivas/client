import { combineReducers } from 'redux';
import position from './position_reducer';
import arquero from './arquero_selected_reducer';

const teamReducer = combineReducers({
    position,
    arquero
});

export default teamReducer;
