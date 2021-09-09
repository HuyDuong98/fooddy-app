import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginPage } from '../redux/reducer/authen';

const mapStateToProps = (state) => {
    return {
        message: state.auth.message,
    }
}

const mapActionToProps = dispatch => ({
    loginPage: (items) => dispatch(loginPage(items))
})

export default connect(mapStateToProps, mapActionToProps)(Login)