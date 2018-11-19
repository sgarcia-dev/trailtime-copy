import { CREATE_TRAIL, UPDATE_TRAIL, DELETE_TRAIL } from './trailConstants';
//import { createReducer } from '../components/app/common/utils/createReducer';

//const initialState = {
//    items: []
//};

const initialState = {
    list: [{
        id: '1',
        trailName: 'Last Dollar Road',
        trailRating: 'Easy',
        trailLocation: 'Colorado',
        trailDescription: 'Last Dollar Road is a 13.1 mile trail that ascends from Telluride, CO to Ridgeway. The 2-3 hour trail features beautiful wild flowers, jagged mountain peaks, aspens, a grassy field, and blue skies. It is good for all skill levels. The trail is best used from June until November.',
        images: [
            '../../public/images/12694690_10153928768077292_5453131960020696297_o.jpg',
            '../../public/images/12928355_10154091416557292_4916283250721400428_n.jpg',
            '../../public/images/12694690_10153928768077292_5453131960020696297_o.jpg'],
        creator: 'Bob',
        events: [{
            date: 'Aug 1',
            attendees: ['Bob', 'Mary', 'Dave']
        }]
    }, {
        id: '2',
        trailName: 'Schnebly Hill',
        trailRating: 'Easy',
        trailLocation: 'Arizona',
        trailDescription: 'Easy. Signs recommend only trucks or off-highway vehicles, but cars (not low-slung) can make it in good weather. Although the road is wide and well-maintained, expect a bumpy ride. Much of the lower portion is a shelf road. This road is closed during the winter.t',
        images: [
            '../../public/images/12694690_10153928768077292_5453131960020696297_o.jpg',
            '../../public/images/12928355_10154091416557292_4916283250721400428_n.jpg',
            '../../public/images/12694690_10153928768077292_5453131960020696297_o.jpg'],
        creator: 'Bob',
        events: [{
            date: 'Aug 1',
            attendees: ['Bob', 'Mary', 'Dave']
        }]
    }, {
        id: '3',
        trailName: 'Rubicon',
        trailRating: 'Hard',
        trailLocation: 'California',
        trailDescription: 'Rubicon 4x4 Trail is a 18.7 mile heavily trafficked point-to-point trail located near Pollock Pines, California that features a lake. The trail is rated as difficult and primarily used for nature trips, scenic driving, and off road driving.',
        images: [
            '../../public/images/12931070_10154091417512292_7503899613667880395_n.jpg',
            '../../public/images/12931165_10154091418157292_2112247807417151241_n.jpg',
            '../../public/images/12938146_10154091416682292_3158088340060708964_n.jpg'],
        creator: 'Bob',
        events: [{
            date: 'Aug 1',
            attendees: ['Bob', 'Mary', 'Dave']
        }]
    }],
    details: {
        id: '1',
        trailName: 'Last Dollar Road',
        trailRating: 'Easy',
        trailLocation: 'Colorado',
        trailDescription: 'Last Dollar Road is a 13.1 mile trail that ascends from Telluride, CO to Ridgeway. The 2-3 hour trail features beautiful wild flowers, jagged mountain peaks, aspens, a grassy field, and blue skies. It is good for all skill levels. The trail is best used from June until November.',
        images: [
            '../../public/images/12694690_10153928768077292_5453131960020696297_o.jpg',
            '../../public/images/12928355_10154091416557292_4916283250721400428_n.jpg',
            '../../public/images/12694690_10153928768077292_5453131960020696297_o.jpg'],
        creator: 'Bob',
        events: [{
            date: 'Aug 1',
            attendees: ['Bob', 'Mary', 'Dave']
        }]
    }
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
            list: [...state.trail, {
                id: action.trailId,
                trailName: action.trailName,
                trailRating: action.trailRating,
                trailLocation: action.trailLocation
                //images: [{}]
                //creator: 
                //events: [{}]
            }]
        });
    }

    else if (action.type === UPDATE_TRAIL) {
        console.log('UPDATE action', action)
        return Object.assign({}, state, {
            list: [state.trail.map(trail =>
                trail.id === action.trail.id ? action.trail : trail
            )]
        });
    }

    else if (action.type === DELETE_TRAIL) {
        console.log('delete action', action)
        return Object.assign({}, state, {
            list: [state.trail.filter(trail => trail.id !== action.trail.id)]
        });
    }
    return state;
};
