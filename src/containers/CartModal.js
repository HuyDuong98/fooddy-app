import { connect } from 'react-redux';
import CartModal from '../components/CartModal';
import { addProductToCart, removeAllProductToCart, removeProductToCart} from '../redux/reducer/cart';

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items
    }
}

const mapActionToProps = dispatch =>({
    removeAllProductToCart:(product) => dispatch(removeAllProductToCart(product)),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    removeProductToCart: (product) => dispatch(removeProductToCart(product))
})

export default connect(mapStateToProps,mapActionToProps)(CartModal)