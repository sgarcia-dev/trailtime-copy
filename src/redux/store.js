import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducer from './reducer';
import reducer from '../components/trails/traillist/trailReducer';

const rootReducer = combineReducers({
    reducer,
    form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
));

export default store;