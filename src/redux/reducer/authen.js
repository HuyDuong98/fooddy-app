import axios from 'axios';

const initState = {
    items: {
        status: false,
        user: null,
        token: "",
    },
    message: null
}

const LOGIN_PAGE = 'LOGIN_PAGE'
const LOGOUT_PAGE = 'LOGOUT_PAGE'
const MESSAGE = 'MESSAGE'
const AUTHEN = 'token'

export const setLogin = (items) => ({
    type: LOGIN_PAGE,
    payload: items
})

export const setMessage = (message) => ({
    type: MESSAGE,
    payload: message
})

export const loginPage = (data) => async (dispatch) => {
    await axios.post('http://localhost:8080/api/login', data)
        .then(respone => {
            dispatch(setLogin(respone.data));
        })
        .catch(error => {
            dispatch(setMessage("Tài khoản hoặc mật khẩu không chính xác"))
        });
}

export const logoutPage = () => ({
    type: LOGOUT_PAGE,
})

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_PAGE:
            localStorage.setItem(AUTHEN, action.payload.token)
            return {
                ...state,
                items: action.payload
            }
        case LOGOUT_PAGE:
            localStorage.removeItem(AUTHEN);
            return {
                ...state,
                items: {
                    status: false,
                    user: null,
                    token: "",
                },
                message:null
            }
        case MESSAGE:
            localStorage.removeItem(AUTHEN);
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default reducer