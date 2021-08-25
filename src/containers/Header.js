import { connect } from 'react-redux';
import Header from '../components/Header';
import {fetchCategories} from '../redux/categories'

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
        categories: state.categories.items
    }
}

const mapActionToProps = dispatch =>({
    fetchCategories:()=>dispatch(fetchCategories())
})

export default connect(mapStateToProps,mapActionToProps)(Header)