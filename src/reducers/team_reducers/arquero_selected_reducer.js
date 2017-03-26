import {
    ARQUERO_SELECTED
} from '../../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case ARQUERO_SELECTED:
            return {...state, player: action.player, position: action.position, positionNumber: action.positionNumber};
        default:
            return state;
    }

    return state;
}