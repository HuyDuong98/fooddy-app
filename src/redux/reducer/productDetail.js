import axios from 'axios';

const initState = {}

const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'

const setProductDetail = (product) => ({
    type: GET_PRODUCT_DETAIL,
    payload: product,
})

export const fetchProductDetail = (productId) => async (dispatch) => {
    const res = await axios.get('http://localhost:8080/api/products')
    const product = res.data.filter(product => product.id === productId)
    dispatch(setProductDetail(product));
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            const product = action.payload[0]
            return product
        default:
            return state
    }
}

export default reducer