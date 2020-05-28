import React, { Component } from 'react';
import Head from '../dashboard/head/head';
import Body from '../dashboard/body/body';
import './dashboard.css';

class Dashboard extends Component {

    state = {
        userMenuOut: false,
    }

    menuOut = () => {
        this.setState({
            userMenuOut: !this.state.userMenuOut
        })
    }

    render() {
        return(
            <div id='dashboard'>
                <div id='inner-dashboard'>
                    <Head menuOut={ this.menuOut } userMenuOut={ this.state.userMenuOut } />
                    <Body />
                </div>
            </div>
        );
    }
}

export default Dashboard;