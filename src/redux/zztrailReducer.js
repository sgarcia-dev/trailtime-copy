import { CREATE_TRAIL, UPDATE_TRAIL, DELETE_TRAIL } from '../actions';
import { createReducer } from '../components/app/common/utils/createReducer';

const initialState = {
    trails: []
};

export const trailReducer = (state = initialState, action) => {
    if (action.type === CREATE_TRAIL) {
        return Object.assign({}, state, {
            trails: [...state.trails, action.trail]
        });
    }
    else if (action.type === UPDATE_TRAIL) {
        return Object.assign({}, state, {
            trails: state.items.map(trail =>
                trail.id === action.trail.id ? action.trail : trail
            )
        });
    }
    else if (action.type === DELETE_TRAIL) {
        return Object.assign({}, state, {
            trails: state.trails.filter(trail => trail.id !== action.trail.id)
        });
    }
    return state;
}