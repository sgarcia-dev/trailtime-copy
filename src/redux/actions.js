export const CREATE_TRAIL = "CREATE_TRAIL";
export const UPDATE_TRAIL = "UPDATE_TRAIL";
export const DELETE_TRAIL = "DELETE_TRAIL";

export const createTrail = (trailName, trailRating, trailLocation, trailIndex) => {
    return {
        type: CREATE_TRAIL,
        payload: {
            trailName,
            trailRating,
            trailLocation,
            trailIndex
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

export const deleteTrail = (trail) => {
    return {
        type: DELETE_TRAIL,
        payload: {
            //trailId
        }
    }
}