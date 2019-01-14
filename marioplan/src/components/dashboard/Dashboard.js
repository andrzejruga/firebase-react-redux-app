import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'; // HOC
import { firestoreConnect } from 'react-redux-firebase'; // HOC
import { compose } from 'redux'; // we need it to compose 2 HOCs
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

// here we're mapping our state from the store to the props in this component
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // projects: state.project.projects // project - property from rootReducer, projects from projectReducer
        projects: state.firestore.ordered.projects, // path taken from object loged in console - now we take it directly from firebase
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);