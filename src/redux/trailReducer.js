import { CREATE_TRAIL, UPDATE_TRAIL, DELETE_TRAIL } from './trailConstants';
//import { createReducer } from '../components/app/common/utils/createReducer';

//const initialState = {
//    items: []
//};

const initialState = {
    trails: [{
        id: '1',
        trailName: 'Last Dollar Road',
        trailRating: 'easy',
        trailLocation: 'Colorado'
    }, {
        id: '2',
        trailName: 'Schnebly Hill',
        trailRating: 'easy',
        trailLocation: 'Arizona'
    }, {
        id: '3',
        trailName: 'Rubicon',
        trailRating: 'hard',
        trailLocation: 'Nevada'
    }]
};
/*
    auth: {
    id: null,
    jwt: null,
    name: null
}*/
//////////////////////////
export default function reducer(state = initialState, action) {
    console.log('ACTION', action);
    if (action.type === CREATE_TRAIL) {
        return Object.assign({}, state, {
            trails: [...state.trails, {
                id: action.trailId,
                trailName: action.trailName,
                trailRating: action.trailRating,
                trailLocation: action.trailLocation
            }]
        });
    }

    else if (action.type === UPDATE_TRAIL) {
        console.log('UPDATE action', action)
        return Object.assign({}, state, {
            trails: [state.trails.map(trail =>
                trail.id === action.trail.id ? action.trail : trail
            )]
        });
    }

    else if (action.type === DELETE_TRAIL) {
        console.log('delete action', action)
        return Object.assign({}, state, {
            trails: [state.trails.filter(trail => trail.id !== action.trail.id)]
        });
    }
    return state;
};
