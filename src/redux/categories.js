import axios from 'axios';

const initState = {
    items: []
};

const GET_CATEGORIES = 'GET_CATEGORIES'

export const setCategories = (items) => ({
    type: GET_CATEGORIES,
    payload: items
})

export const fetchCategories = () => async (dispatch) => {
    const res = await axios.get('http://localhost:8080/api/products');
    dispatch(setCategories(res.data));
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducer