let initState = {
    items: []
};

const ADD_FAVORITE = 'ADD_FAVORITE'
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const addProductFavorite = (product) => ({
    type: ADD_FAVORITE,
    product
})

export const removeProductFavorite = (product) => ({
    type: REMOVE_FAVORITE,
    product
})

const reducer = (state = initState, action) => {
    const { product } = action
    switch (action.type) {
        case ADD_FAVORITE:
            let index = -1
            index = findProductInFavorite(state, product.id)
            if (index === -1) {
                return {
                    ...state,
                    items: [...state.items, product]
                }
            }
            return state
        case REMOVE_FAVORITE:
            console.log(state.items)
            return {
                ...state,
                items: state.items.filter(e => e.id !== product.id)
            }
        default:
            return state
    }
}


let findProductInFavorite = (favorite, productID) => {
    let index = -1
    if (favorite.items.length > 0) {
        for (let i = 0; i < favorite.items.length; i++) {
            if (favorite.items[i].id === productID) {
                index = i
                break
            }
        }
    }
    return index
}

export default reducer