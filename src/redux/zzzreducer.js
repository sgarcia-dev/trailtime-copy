const initialState = {
    trail: {
        list: [
            {
                trailName: 'trail1',
                trailRating: 'easy',
                trailLocation: 'Colorado'
            }
        ],
        detail: {}
    },
    auth: {
        id: null,
        jwt: null,
        name: null
    }
};

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
    return state;
};


export default reducer;