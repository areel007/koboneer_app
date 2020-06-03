import React, { Component } from 'react';
import './head.css';

class Head extends Component {

    state = {
        userMenuOut: this.props.userMenuOut,
        userMenuClose: this.props.userMenuOut,
    }

    menuOut = () => {
        this.setState({
            userMenuOut: !this.state.userMenuOut
        });
    }

    render() {

        const menuOut = {
            display: 'block',
        }

        return (
            <div id='head'>
                <span id='dashboard-logo'>Koboneer</span>
                <div id='hamburger' onClick={this.props.slideOut}>
                    <div className='bars'></div>
                    <div className='bars'></div>
                    <div className='bars'></div>
                </div>
                <div id='user-detail' onClick={this.menuOut}>
                    <div id='circle-avartar'>
                        <span>SM</span>
                    </div>
                </div>
                <div id='user-menu' style={this.state.userMenuOut ? menuOut : null}>
                    <div id='user-card'>
                        <span id='name'>Sunday Morenikeji</span>
                        <span id='email'>morenikejicodexiphaar@gmail.com</span>
                        <button id='logout'>Sign Out</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;