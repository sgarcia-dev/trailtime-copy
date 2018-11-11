import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducer from './reducer';
import reducer from './trailReducer';

const rootReducer = combineReducers({
    trails: reducer,
    form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk)
));

export default store;