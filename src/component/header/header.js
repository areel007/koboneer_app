import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';


class Header extends Component {

    state = {
        isMenuOut: false,
    }

    openMenu = () => {
        this.setState({
            isMenuOut: !this.state.isMenuOut
        })
    }
    closeMenu = () => {
        this.setState({
            isMenuOut: false
        })
    }
    render() {
        const { header, product, company } = this.props;
        const link = header.map(_link => {
            return (
                <nav className='nav' key={_link.id}>
                    <ul>
                        {_link.link === 'Product' ?
                            <li key={_link.id}>
                                <a href='#'>
                                    {_link.link}
                                    <i className="fas fa-chevron-down"></i>
                                </a>
                                <nav id='product' >
                                    <ul >
                                        {product.map(_product => <li key={_product.id}>
                                            <NavLink className='sub-links' to={_product.path} onClick={this.closeMenu} >{_product.link}</NavLink>
                                        </li>)}
                                    </ul>
                                </nav>
                            </li>
                            : _link.link === 'Company' ?
                                <li key={_link.id}>
                                    <a id='com' href='#'>
                                        {_link.link}
                                        <i className="fas fa-chevron-down"></i>
                                    </a>
                                    <nav id='companys'>
                                        <ul>
                                            {company.map(_company => <li key={_company.id}>
                                                <NavLink className='sub-links' to={_company.path} onClick={this.closeMenu} >
                                                    {_company.link}
                                                </NavLink>
                                            </li>)}
                                        </ul>
                                    </nav>
                                </li> : _link.link === 'Get Started' ?
                                    <li key={_link.id}>
                                        <Link id={_link.id} to={_link.path} onClick={this.closeMenu}>
                                            {_link.link}
                                        </Link>
                                    </li>
                                : <li key={_link.id}>
                                    <a href={_link.path}>{_link.link}</a>
                                </li>}
                    </ul>
                </nav>
            )
        });

        const styleOpen = {
            transform: 'translateX(0%)'
        }
        return (
            <header id='header' >
                <div id='logo'>
                    <Link to='/' style={{ textDecoration: 'none' }}>Koboneer</Link>
                </div>
                <nav id='nav' style={this.state.isMenuOut ? styleOpen : null}>
                    {link}
                </nav>

                <div id='burger' onClick={this.openMenu} >
                    <div id='inner-burger'>
                        <div className='bars'></div>
                        <div className='bars'></div>
                        <div className='bars'></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;