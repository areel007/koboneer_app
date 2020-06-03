import React, { Component } from 'react';
import Head from './head/head';
import Body from './body/body';
import './history.css'

class History extends Component{

    state = {
        sideBarOut: false
    }

    slideOut = () => {
        this.setState({
            sideBarOut: !this.state.sideBarOut
        })
    }
    
    render() {
        return (
            <div id='history'>
                <Head slideOut={ this.slideOut } />
                <Body sideBarOut={ this.state.sideBarOut } />
            </div>
        )
    }
}

export default History;