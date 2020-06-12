import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main-body.css';

class BuyForMeMainBody extends Component {

    state = {
        proceedToPayment: false,
        proceedToSuccess: false,
        price: '0.00',
        user: {
            email: 'morenikeji@koboneer.io',
        },
        edit: false,
    }

    handlePrice = e => {
        const price = e.target.value;
        this.setState({ price });
    }

    handleProceedToPayment = (e) => {
        e.preventDefault();
        this.setState({
            proceedToPayment: !this.state.proceedToPayment,
        })
    }

    handleProceedToSuccess = (e) => {
        e.preventDefault();
        this.setState({
            proceedToSuccess: !this.state.proceedToSuccess,
        })
    }

    editProfile = (e) => {
        e.preventDefault();
        this.setState({
            edit: !this.state.edit,
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

        const showEdit = {
            display: 'flex'
        }

        const hideEdit = {
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
                    <div className='user-profile'>
                        <div className='user-bio'>
                            <div className='avatar'>
                                <div className='circle'>
                                    <i class="far fa-user"></i>
                                </div>
                            </div>
                            <div className='user-info'>
                                <span className='user-email'>{this.state.user.email}</span>
                                <span className='user-edit' onClick={ this.editProfile }>
                                    <i class="fas fa-user-edit"></i>
                                </span>
                            </div>
                        </div>
                        <div className='edit-profile' style={ this.state.edit ? showEdit : hideEdit }>
                            <form className='edits'>
                                <div className='user-form-control'>
                                    <label><i class="far fa-user"></i></label>
                                    <input type='text' placeholder='Full Name' />
                                </div>
                                <div className='user-form-control'>
                                    <label><i class="far fa-address-book"></i></label>
                                    <input type='text' placeholder='Address' />
                                </div>
                                <div className='user-form-control'>
                                    <label><i class="fas fa-phone"></i></label>
                                    <input type='text' placeholder='Phone Number' />
                                </div>
                                <div className='user-form-control'>
                                    <label><i class="fas fa-user"></i></label>
                                    <input type='text' placeholder='Account Name' />
                                </div>
                                <div className='user-form-control'>
                                    <label><i class="fas fa-university"></i></label>
                                    <input type='text' placeholder='Bank Name' />
                                </div>
                                <div className='user-form-control'>
                                    <label><i class="fas fa-user-lock"></i></label>
                                    <input type='text' placeholder='BVN' />
                                </div>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyForMeMainBody;