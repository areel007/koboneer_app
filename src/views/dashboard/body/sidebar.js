import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <a href='#buy-for-me' className='dashboard-products'>
                <div className='icon'>
                    <i className="fas fa-shopping-bag"></i>
                </div>
                <div className='product__dashborad'>
                    <span>Buy For Me</span>
                </div>
            </a>
            <div className='dashboard-products'>
                <div className='icon'>
                    <i className="fas fa-money-bill-wave-alt"></i>
                </div>
                <div className='product__dashborad'>
                    <span>Trade E-Currency</span>
                </div>
            </div>
            <div className='dashboard-products'>
                <div className='icon'>
                    <i className="far fa-credit-card"></i>
                </div>
                <div className='product__dashborad'>
                    <span>Sell For Me</span>
                </div>
            </div>
            <a href='#history' className='dashboard-products'>
                <div className='icon'>
                    <i className="fas fa-file-medical-alt"></i>
                </div>
                <div className='product__dashborad'>
                    <span>History</span>
                </div>
            </a>
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

export default Sidebar;