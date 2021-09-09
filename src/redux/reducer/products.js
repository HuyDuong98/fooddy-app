import axios from 'axios';

const initState = {
    items: []
};

const GET_PRODUCTS = 'GET_PRODUCTS'

export const setProducts = (items) => ({
    type: GET_PRODUCTS,
    payload: items
})

export const fetchProducts = () => async (dispatch) => {
    const res = await axios.get('http://localhost:8080/api/homepage');
    dispatch(setProducts(res.data[0]));
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducer