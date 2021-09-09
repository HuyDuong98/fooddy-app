import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCategories } from '../redux/reducer/categories';
import { logoutPage } from '../redux/reducer/authen';

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
        categories: state.categories.items,
        auth: state.auth.items
    }
}

const mapActionToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    logoutPage: () => dispatch(logoutPage())
})

export default connect(mapStateToProps, mapActionToProps)(Header)