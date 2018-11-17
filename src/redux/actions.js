import { CREATE_TRAIL, UPDATE_TRAIL, DELETE_TRAIL } from './trailConstants';
////////////////////

////////////////////


export const createTrail = (trail) => {
    return {
        type: CREATE_TRAIL,
        payload: {
            trail
            //trailName,
            //trailRating,
            //trailLocation,
            //trailIndex
            //trail//pass payload whatever you want and pass to reducer
        }
    }
}

export const updateTrail = (trail) => {
    return {
        type: UPDATE_TRAIL,
        payload: {
            trail
        }
    }
}

export const deleteTrail = (trailId) => {
    return {
        type: DELETE_TRAIL,
        payload: {
            trailId
        }
    }
}
