import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import productReducer from "./products";
import cardReducer from "./cart";
import categoriesReducer from "./categories";


const reducer = combineReducers({
    products: productReducer,
    cart: cardReducer,
    categories: categoriesReducer
})

// Redux toolkit
const store = configureStore({
    reducer
})

export default store