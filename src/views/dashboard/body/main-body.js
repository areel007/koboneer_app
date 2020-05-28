import React, { Component } from 'react';
import './main-body.css';
import History from '../../../component/history/history';
import BuyForMe from '../../../component/b4m/buyForMe';

class MainBody extends Component {

    state = {
        show: false
    }

    handleChange = () => {
        // this.props.handleChange();
        alert('MainBody')
    }

    render() {
        return (
            <div id='main-body'>
                <History onClick={ this.handleChange } />
                <BuyForMe />
            </div>
        );
    }
}

export default MainBody;