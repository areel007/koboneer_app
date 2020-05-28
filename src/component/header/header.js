import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';


class Header extends Component {

    state = {
        menuOut: false,
        menuClose: false
    }

    openMenu = () => {
        this.setState({
            menuOut: !this.state.menuOut,
        });
    }

    closeMenu = () => {
        this.setState({
            menuOut: false,
        })
    }

    render() {

        const slideOut = {
            transform: 'translateX(0)',
        }

        

        return (
            <header id='header' >
                <div id='logo'>
                    <Link to='/' style={{ textDecoration: 'none' }}>Koboneer</Link>
                </div>
                <nav id='nav'>
                    <div className='inner-nav'>
                        <Link className='link' id='link' to='/'>Home</Link>
                        <div className='dropdown'>
                            <button className='drop-btn'>Product</button>
                            <div className='dropdown-content'>
                                <Link className='link' to='/buy'>Buy For Me</Link>
                                <Link className='link' to='/trade'>Trade E-Currency</Link>
                                <Link className='link' to='/sell'>Sell For Me</Link>
                            </div>
                        </div>
                        <div className='dropdown'>
                            <button className='drop-btn'>Company</button>
                            <div className='dropdown-content'>
                                <Link className='link' to='/about'>About Us</Link>
                                <Link className='link' to='/contact'>Contact Us</Link>
                                <Link className='link' to='/buy'>Careers</Link>
                            </div>
                        </div>
                        <Link className='link' to='/'>Blog</Link>
                    </div>
                    <Link to='/signup' id='get-started'>Get Started</Link>
                </nav>
                <nav id='nav-mobile' style={this.state.menuOut ? slideOut : null}>
                    <div className='inner-nav-mobile'>
                        <Link className='link' to='/' onClick={this.closeMenu}>Home</Link>
                        <div className='dropdown'>
                            <button className='drop-btn'>Product</button>
                            <div className='dropdown-content'>
                                <Link className='link' to='/buy'>Buy For Me</Link>
                                <Link className='link' to='/buy'>Trade E-Currency</Link>
                                <Link className='link' to='/buy'>Sell For Me</Link>
                            </div>
                        </div>
                        <div className='dropdown'>
                            <button className='drop-btn'>Company</button>
                            <div className='dropdown-content'>
                                <Link className='link' to='/buy'>About Us</Link>
                                <Link className='link' to='/buy'>Contact</Link>
                                <Link className='link' to='/buy'>Careers</Link>
                            </div>
                        </div>
                        <Link className='link' to='/blog'>Blog</Link>
                    </div>
                    <Link to='/signup' id='get-started'>Get Started</Link>
                </nav>
                <div id='burger' onClick={this.openMenu}>
                    <div id='inner-burger'>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;