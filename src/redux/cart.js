//import axios from 'axios';
import { createReducer } from '@reduxjs/toolkit'

const initState = {
    items: []
};

const ADD_CART = 'ADD_CART'
const REMOVE_ALL_PRODUCT = 'REMOVE_ALL_PRODUCT'
const REMOVE_CART = "REMOVE_CART"

export const setAddProductToCart = (product, quantity) => ({
    type: ADD_CART,
    product,
    quantity
})

export const addProductToCart = (product) => (dispatch) => {
    const quantity = 1
    dispatch(setAddProductToCart(product, quantity));
}

export const setRemoveProductToCart = (product, quantity) => ({
    type: REMOVE_CART,
    product,
    quantity
})

export const removeProductToCart = (product) => (dispatch) => {
    const quantity = 1
    dispatch(setRemoveProductToCart(product, quantity));
}

export const removeAllProductToCart = (product) => ({
    type: REMOVE_ALL_PRODUCT,
    product,
})


const reducer = createReducer(initState, {
    ADD_CART: (state, action) => {
        const { product, quantity } = action
        let index = -1
        index = findProductInCart(state, product)
        if (index !== -1) {
            state.items[index].quantity += quantity
        } else {
            state.items.push({
                product,
                quantity
            })
        }
        return state
    },
    REMOVE_CART: (state, action) => {
        const { product, quantity } = action
        let index = -1
        index = findProductInCart(state, product)
        if (index !== -1) {
            state.items[index].quantity -= quantity
        }
        return state
    },
    REMOVE_ALL_PRODUCT: (state, action) => {
        console.log("state", state.items)
        return {
            ...state,
            items: state.items.filter((item) => item.product.id !== action.product.id)
        }
    },
})


export let findProductInCart = (cart, product) => {
    let index = -1
    if (cart.items.length > 0) {
        for (var i = 0; i < cart.items.length; i++) {
            if (cart.items[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}


export default reducer