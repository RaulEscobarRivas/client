import {
    POSITION_SELECTED
} from '../../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case POSITION_SELECTED:
            return {...state, selectedPosition: action.position};
        default:
            return {...state, selectedPosition: ''};
    }

    return state;
}