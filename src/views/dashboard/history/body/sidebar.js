import React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component{

    handleChange=() => {
        this.props.handleChange()
    }

    render() {
        const slideBar = {
            transform: 'translateX(0%)',
        }

        return (
            <aside id='sidebar' style={ this.props.sideBarOut ? slideBar : null} >
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
                <Link to='/sell' className='dashboard-products'>
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
            </aside>
        );
    }
}

export default Sidebar;