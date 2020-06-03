import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main-body.css';

class BuyForMeMainBody extends Component {

    state = {
        proceedToPayment: false,
        proceedToSuccess: false,
    }

    handleProceedToPayment = (e) => {
        e.preventDefault()
        this.setState({
            proceedToPayment: !this.state.proceedToPayment,
        })
    }

    handleProceedToSuccess = (e) => {
        e.preventDefault()
        this.setState({
            proceedToSuccess: !this.state.proceedToSuccess,
        })
    }

    render() {

        const slide = {
            transform: 'translateX(0%)',
        };

        const show = {
            display: 'block',
        }

        const hide = {
            display: 'none'
        }

        return (
            <div id='main-body'>
                <div id='inner-main-body'>
                    <div id='b4m-mobile-menu' style={this.props.sideBarOut ? slide : null} >
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
                    <div id='buy-for-me'>
                        <div className='order'>
                            <div className='order-page'>
                                <div className='form-header'>
                                    <h3>Order Page</h3>
                                </div>
                                <form>
                                    <div className='form-control'>
                                        <label>Order:</label>
                                        <input type='text' placeholder='e.g: Shoe' />
                                    </div>
                                    <div className='form-control'>
                                        <label>Price:</label>
                                        <input type='text' placeholder='$0.00' />
                                        <span id='naira-equiv'>&#8358;0.00</span>
                                    </div>
                                    <div className='form-control'>
                                        <label>Store:</label>
                                        <input type='text' placeholder='e.g: Amazon' />
                                    </div>
                                    <div className='form-control'>
                                        <label>Address:</label>
                                        <input type='text' placeholder='delivery addres' />
                                        {/* <button>Default Address</button> */}
                                    </div>
                                    <div className='form-control'>
                                        <button onClick={this.handleProceedToPayment}>Proceed</button>
                                    </div>
                                </form>
                            </div>
                            <div className='payment-page' style={this.state.proceedToPayment ? show : hide}>
                                <div className='form-header'>
                                    <h3>Payment Details</h3>
                                </div>
                                <div className='payment-links'>
                                    <Link className='linka' to='/'>Pay Stack</Link>
                                    <Link className='linka' to='/'>Flutter Wave</Link>
                                    <Link className='linka' to='/'>Direct Transfer</Link>
                                    <button onClick={this.handleProceedToSuccess}>Proceed</button>
                                </div>
                            </div>
                            <div className='success' style={this.state.proceedToSuccess ? show : hide}>
                                <p>You have successfully oredered for a show on ebay</p>
                                <Link className='linka' to='/history'>Review</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyForMeMainBody;