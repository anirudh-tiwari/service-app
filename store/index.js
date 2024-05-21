import { createStore, combineReducers } from 'redux';
import contactReducer from './features/contact';

const rootReducer = combineReducers({
	contact: contactReducer,
});

const store = createStore(
	rootReducer
);


export default store;
