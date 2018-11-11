import * as actions from '../../../redux/actions'
const initialState = {
    trails: [{
        trailName: 'trail1',
        trailRating: 'easy',
        trailLocation: 'Colorado'
    }, {
        trailName: 'trail2',
        trailRating: 'moderate',
        trailLocation: 'Arizona'
    }, {
        trailName: 'trail3',
        trailRating: 'hard',
        trailLocation: 'Nevada'
    }],
    auth: {
        id: null,
        jwt: null,
        name: null
    }
};
/*
export const createTrail = (state, payload) => {
    return [...state, Object.assign({}, payload.trail)]
}
export const updateTrail = (state, payload) => {
    return [
        ...state.filter(trail => trail.id !== payload.event.id),
        Object.assign({}, payload.trail)
    ]
}//...state to get current array of state, filter gives a new copy of array when returned so you get array of everything except that id
export const deleteTrail = (state, payload) => {
    return [
        ...state.filter(trail => trail.id !== payload.trailId)
    ]//filter out id of the trail you're deleting and return an array of the trails without it
}
*/

const reducer = (state = initialState, action) => {

    if (action.type === 'TEST_ACTION') {
        const { newTrail } = action;
        const newTrailList = [...state.trail.list, newTrail];
        return Object.assign({}, state, {
            trail: {
                list: newTrailList
            }
        })
    }

    else if (action.type === actions.CREATE_TRAIL) {
        return Object.assign({}, state, {
            trails: [...state.trails, {
                trailName: action.trailName,
                trailRating: action.trailRating,
                trailLocation: action.trailLocation
            }]
        });
        // const createTrail = (state, payload) => {
        //     return [...state, Object.assign({}, payload.trail)]
        // }
    }

    else if (action.type === 'UPDATE_TRAIL') {
        const updateTrail = (state, payload) => {
            return [
                ...state.filter(trail => trail.id !== payload.event.id),
                Object.assign({}, payload.trail)
            ]
        }//...state to get current array of state, filter gives a new copy of array when returned so you get array of everything except that id
    } else if (action.type === 'DELETE_TRAIL') {
        const deleteTrail = (state, payload) => {
            return [
                ...state.filter(trail => trail.id !== payload.trailId)
            ]//filter out id of the trail you're deleting and return an array of the trails without it
        }
    }
    return state;
};

export default reducer;