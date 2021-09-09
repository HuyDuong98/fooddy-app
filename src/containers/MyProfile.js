import { connect } from 'react-redux';
import MyProfile from '../pages/Profile/components/MyProfile';

const mapStateToProps = (state) => {
    return {
        auth: state.auth.items
    }
}

const mapActionToProps = dispatch => ({
})

export default connect(mapStateToProps, mapActionToProps)(MyProfile)