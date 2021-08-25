import { connect } from 'react-redux';
import Home from '../pages/Home';
import { setProducts, fetchProducts } from '../redux/products';
import { addProductToCart, removeProductToCart } from '../redux/cart';

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        cart: state.cart.items
    }
}

const mapActionToProps = dispatch => ({
    setProducts: (items) => dispatch(setProducts(items)),
    fetchProducts: () => dispatch(fetchProducts()),
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    removeProductToCart: (product) => dispatch(removeProductToCart(product)),
})

export default connect(mapStateToProps, mapActionToProps)(Home)