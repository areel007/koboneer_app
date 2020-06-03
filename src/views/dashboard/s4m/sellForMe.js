import React, { Component } from 'react';
import Head from './head/head';
import Body from './body/body';
import './sellForMe.css';

class SellForMe extends Component {

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
            <div id='sell-for-me'>
                <Head slideOut={this.slideOut} />
                <Body sideBarOut={this.state.sideBarOut} />
            </div>
        );
    }
}

export default SellForMe;