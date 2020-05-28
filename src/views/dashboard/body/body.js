import React, { Component } from 'react';
import Sidebar from './sidebar';
import MainBody from './main-body';
import './body.css';

class Body extends Component {

    state = {
        show: false
    }

    handleChange = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <main id='body'>
                <Sidebar handleChange={ this.handleChange } show={ this.state.show } />
                <MainBody handleChange={ this.handleChange } show={ this.state.show } />
            </main>
        );
    }
}

export default Body;