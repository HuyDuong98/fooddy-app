import { connect } from 'react-redux';
import Comment from '../../../pages/ProductDetail/components/Comment';

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
    }
}

const mapActionToProps = dispatch => ({
})

export default connect(mapStateToProps, mapActionToProps)(Comment)