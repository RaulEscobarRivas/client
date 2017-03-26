import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import team from './team_reducer';

const rootReducer = combineReducers({
    form,
    auth,
    team
});

const getSelectedPosition = state => state.team.position.selectedPosition;

export default rootReducer;

export {
    getSelectedPosition
}