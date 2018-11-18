//import { CREATE_TRAIL, UPDATE_TRAIL, DELETE_TRAIL } from './trailConstants';
////////////////////

////////////////////
export const CREATE_TRAIL = 'ADD_ITEM';
export const createTrail = trail => ({
    type: CREATE_TRAIL,
    trail
});
/*
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
}*/


export const UPDATE_TRAIL = 'UPDATE_TRAIL';
export const updateTrail = trail => ({
    type: UPDATE_TRAIL,
    trail
});
/*
export const updateTrail = (trail) => {
    return {
        type: UPDATE_TRAIL,
        payload: {
            trail
        }
    }
}*/


export const DELETE_TRAIL = 'DELETE_TRAIL';
export const deleteTrail = trail => ({
    type: DELETE_TRAIL,
    trail
});

/*
export const deleteTrail = (trailId) => {
    return {
        type: DELETE_TRAIL,
        payload: {
            trailId
        }
    }
}
*/