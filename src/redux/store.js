import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import productReducer from "./reducer/products";
import cardReducer from "./reducer/cart";
import categoriesReducer from "./reducer/categories";
import authReducer from './reducer/authen';
import favoriteReducer from './reducer/favorite';
import productDetailReducer from './reducer/productDetail'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
    products: productReducer,
    cart: cardReducer,
    categories: categoriesReducer,
    auth: authReducer,
    favorite: favoriteReducer,
    productDetail: productDetailReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auth', 'favorite'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

// Redux toolkit
const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)


export default store