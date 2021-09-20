import { connect } from 'react-redux';
import MyWishlist from '../pages/Profile/components/MyWishlist';
import { addProductToCart, removeProductToCart} from '../redux/reducer/cart';

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite.items,
    }
}

const mapActionToProps = dispatch => ({
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    removeProductToCart: (product) => dispatch(removeProductToCart(product))
})

export default connect(mapStateToProps, mapActionToProps)(MyWishlist)