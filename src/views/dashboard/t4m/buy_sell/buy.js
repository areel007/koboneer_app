import React, { Component } from 'react';
import Head from '../head/head';
import { Link } from 'react-router-dom';
import MainBodyBuy from './buy_body/mainBody';
import './buy.css';

class Buy extends Component {

    state = {
        sideBarOut: false
    }

    slideOut = () => {
        this.setState({
            sideBarOut: !this.state.sideBarOut
        })
    }

    render() {

        const slide = {
            transform: 'translateX(0%)',
        };

        return (
            <div id='buy'>
                <Head slideOut={this.slideOut} />
                <MainBodyBuy />
                <div id='mobile-menu-buy' style={this.state.sideBarOut ? slide : null}>
                    <Link to='/buy' className='dashboard-products' >
                        <div className='icon'>
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className='product__dashborad'>
                            <span>Buy For Me</span>
                        </div>
                    </Link>
                    <Link to='/trade' className='dashboard-products' >
                        <div className='icon'>
                            <i className="fas fa-money-bill-wave-alt"></i>
                        </div>
                        <div className='product__dashborad'>
                            <span>Trade Currency</span>
                        </div>
                    </Link>
                    <Link to='/sell' className='dashboard-products' >
                        <div className='icon'>
                            <i className="far fa-credit-card"></i>
                        </div>
                        <div className='product__dashborad'>
                            <span>Pay For Me</span>
                        </div>
                    </Link>
                    <Link to='/History' className='dashboard-products'>
                        <div className='icon'>
                            <i className="fas fa-file-medical-alt"></i>
                        </div>
                        <div className='product__dashborad'>
                            <span>History</span>
                        </div>
                    </Link>
                    <div className='dashboard-products'>
                        <div className='icon'>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                        <div className='product__dashborad'>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buy;