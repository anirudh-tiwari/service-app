import { createStore, combineReducers } from 'redux';
import menuReducer from './features/menu';
import cartReducer from './features/cart';
import whishlistReducer from './features/whishlist';

const rootReducer = combineReducers({
	menu: menuReducer,
	cart: cartReducer,
	whishlist: whishlistReducer,
});

const store = createStore(
	rootReducer
);


export default store;
