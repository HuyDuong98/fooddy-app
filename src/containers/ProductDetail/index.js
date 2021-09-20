import { connect } from 'react-redux';
import ProductDetail from '../../pages/ProductDetail';
import { fetchProductDetail } from '../../redux/reducer/productDetail';

const mapStateToProps = (state) => {
    return {
        product: state.productDetail,
    }
}

const mapActionToProps = dispatch => ({
    fetchProductDetail: (productId) => dispatch(fetchProductDetail(productId)),
})

export default connect(mapStateToProps, mapActionToProps)(ProductDetail)