import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main-body.css';

class BuyForMeMainBody extends Component {

    state = {
        proceedToPayment: false,
        proceedToSuccess: false,
        price: '0.00',
    }

    handlePrice = e => {
        const price = e.target.value;
        this.setState({ price });
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
                        <div className='order-b4m'>
                            <div className='order-page-b4m'>
                                <div className='form-header-b4m'>
                                    <h3>Order Page</h3>
                                </div>
                                <form>
                                    <div className='form-control-b4m'>
                                        <div className='label-b4m'>
                                            <label>Order:</label>
                                        </div>
                                        <div className='input-b4m'>
                                            <input type='text' placeholder='e.g: Shoe' />
                                        </div>
                                    </div>
                                    <div className='form-control-b4m'>
                                        <div className='label-b4m'>
                                            <label>Price ($):</label>
                                        </div>
                                        <div className='input-b4m'>
                                            <input type='text' placeholder='$0.00' onChange={this.handlePrice} />
                                            <span id='naira-equiv'>&#8358;{(387.42 * this.state.price).toFixed(2)} </span>
                                        </div>
                                    </div>
                                    <div className='form-control-b4m'>
                                        <div className='label-b4m'>
                                            <label>Store:</label>
                                        </div>
                                        <div className='input-b4m'>
                                            <input type='text' placeholder='e.g: Amazon' />
                                        </div>
                                    </div>
                                    <div className='form-control-b4m'>
                                        <div className='label-b4m'>
                                            <label>Address:</label>
                                        </div>
                                        <div className='input-b4m'>
                                            <input type='text' placeholder='delivery addres' />
                                            {/* <button>Default Address</button> */}
                                        </div>
                                    </div>
                                    <div className='form-control-b4m'>
                                        <div className='label-b4m'>
                                            <label>Payment Mode:</label>
                                        </div>
                                        <div className='input-b4m'>
                                            <select>
                                                <option>Select Payment Mode</option>
                                                <option>Bitcoin</option>
                                                <option>Paypal</option>
                                                <option>Perfect Money</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-control-b4m'>
                                        <button onClick={this.handleProceedToPayment}>Proceed</button>
                                    </div>
                                </form>
                            </div>
                            <div className='payment-b4m' style={this.state.proceedToPayment ? show : hide}>
                                <div className='form-header-b4m'>
                                    <h3>Payment Details</h3>
                                </div>
                                <div className='payment-links-b4m'>
                                    <Link className='linka-b4m' to='/'>Pay Stack</Link>
                                    <Link className='linka-b4m' to='/'>Flutter Wave</Link>
                                    <Link className='linka-b4m' to='/'>Direct Transfer</Link>
                                    <button onClick={this.handleProceedToSuccess}>Proceed</button>
                                </div>
                            </div>
                            <div className='success-b4m' style={this.state.proceedToSuccess ? show : hide}>
                                <div className='form-header-b4m'>
                                    <h3>Order Status</h3>
                                </div>
                                <p>You have successfully ordered for a show on ebay</p>
                                <Link className='linka-b4m reviewing' to='/history'>Review</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyForMeMainBody;