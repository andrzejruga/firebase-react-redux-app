import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">AR</NavLink></li>
        </ul>
    )
}
// we don't call it like props.signOut() because this would automaticly run the function
// when the component loads. We just want to associate this signOut method with click event on anchor tag

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()) // now we can access this on the props of SignedInLinks component
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);