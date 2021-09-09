import { connect } from 'react-redux';
import CartProduct from '../pages/Home/components/CardProduct';
import { addProductFavorite, removeProductFavorite } from '../redux/reducer/favorite';

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite.items,
        cart: state.cart.items,
    }
}

const mapActionToProps = dispatch => ({
    addProductFavorite: (product) => dispatch(addProductFavorite(product)),
    removeProductFavorite: (product) => dispatch(removeProductFavorite(product)),
})

export default connect(mapStateToProps, mapActionToProps)(CartProduct)