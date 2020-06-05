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
                    <div id='mobile-menu' style={this.props.sideBarOut ? slide : null}>
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
                    <div id='trade-currency'>
                        <div id='trade-currency-btns'>
                            <div className='trade-btn'>
                                <button>Buy</button>
                            </div>
                            <div className='trade-btn'>
                                <button>Sell</button>
                            </div>
                        </div>
                        <div id='buy-currency-body'>
                            <div className='trade-order-page'>
                                <h3>Buy Currency</h3>
                                <form>
                                    <div className='trade-currency-form'>
                                        <label>Order</label>
                                        <div className='tc-input-box'>
                                            <input type='text' placeholder='$0.00' onChange={this.handlePrice} />
                                            <select>
                                                <option>Select Currency</option>
                                                <option>Bitcoin</option>
                                                <option>Paypal</option>
                                                <option>Amazon</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='trade-currency-form'>
                                        <span id='naira-equiv'>&#8358;{(387.42 * this.state.price).toFixed(2)}</span>
                                    </div>
                                    <div className='trade-currency-form'>
                                        <label>Receiver</label>
                                        <div className='tc-input-box'>
                                            <input type='text' placeholder='ID or Email' />
                                        </div>
                                    </div>
                                    <div className='trade-currency-form'>
                                        <button onClick={this.handleProceedToPayment}>Proceed</button>
                                    </div>
                                </form>
                            </div>
                            <div className='trade-payment-page' style={this.state.proceedToPayment ? show : hide}>
                                <div id='trade-form-header'>
                                    <h3>Payment Details</h3>
                                </div>
                                <div id='trade-payment-link'>
                                    <Link className='trade-linka' to='/'>Pay Stack</Link>
                                    <Link className='trade-linka' to='/'>Flutter Wave</Link>
                                    <Link className='trade-linka' to='/'>Direct Transfer</Link>
                                    <button onClick={this.handleProceedToSuccess}>Proceed</button>
                                </div>
                            </div>
                            <div className='trade-success' >
                                <div className='trade-form-header'>
                                    <h3>Order Status</h3>
                                </div>
                                <p>You have successfully oredered for a show on ebay</p>
                                <Link className='linka' to='/history'>Review</Link>
                            </div>
                        </div>
                        <div id='sell-currency-body'>
                            Sell
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default BuyForMeMainBody;