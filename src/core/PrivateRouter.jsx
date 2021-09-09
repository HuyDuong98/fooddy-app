import { Redirect, Route } from "react-router";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        auth: state.auth.items
    }
}

function PrivateRouter(props) {
    let {auth} = props
    if(auth.token){
        return <Route {...props} />
    }
    return <Redirect to='/' />
}

export default connect(mapStateToProps)(PrivateRouter)