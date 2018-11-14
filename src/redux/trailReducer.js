import { CREATE_TRAIL, UPDATE_TRAIL, DELETE_TRAIL } from './trailConstants';
import { createReducer } from '../components/app/common/utils/createReducer';

const initialState = [
    {
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
    }];
/*
    auth: {
    id: null,
    jwt: null,
    name: null
}*/

export const createTrail = (state, payload) => {
    return [...state, Object.assign({}, payload.trail)]
}

export const updateTrail = (state, payload) => {
    return [
        ...state.filter(trail => trail.id !== payload.trail.id),
        Object.assign({}, payload.trail)
    ]
}

export const deleteTrail = (state, payload) => {
    return [...state.filter(trail => trail.id !== payload.trailId)]
}

//export default createReducer(initialState, {
//[CREATE_TRAIL]: createTrail,
//   [UPDATE_TRAIL]: updateTrail,
//      [DELETE_TRAIL]: deleteTrail
//})

export default function reducer(state = initialState, action) {
    return state;
}