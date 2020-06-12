import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Header from './component/header/header';
import Home from './views/home/home';
import Footer from './component/footer/footer';
import SignUpPage from './views/authentication/sign-up/sign-up';
import SignInPage from './views/authentication/sign-in/sign-in';
import BuyForMe from './views/dashboard/b4m/BuyForMe';
import SellForMe from './views/dashboard/s4m/sellForMe';
import TradeForMe from './views/dashboard/t4m/tradeForMe';
import History from './views/dashboard/history/history';
import UserProfile from './views/dashboard/user-profile-setting/user-profile';

class App extends Component {

  state = {
    header: [
      { link: 'Home', path: '/', id: 'home' },
      { link: 'Product', path: '#', id: 'product' },
      { link: 'Company', path: '#', id: 'company' },
      { link: 'Blog', path: '/blog', id: 'blog' },
      { link: 'Get Started', path: '/signup', id: 'sign-up' },
    ],
    product: [
      { link: 'Pay For Me', path: '/pay', id: '7' },
      { link: 'Trade E-Currency', path: '/trade', id: '8' },
      { link: 'Buy For Me', path: '/buy', id: '9' },
    ],
    company: [
      { link: 'About Us', path: '/about', id: '10' },
      { link: 'Careers', path: '/careers', id: '11' },
      { link: 'Contact', path: '/contact', id: '12' },
    ],
    dashboard: true
  }

  openMenu = () => {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="container">
        {
          this.props.location.pathname != '/history' && this.props.location.pathname === '/' && <Header header={this.state.header} product={this.state.product} company={this.state.company} user={this.state.user} openMenu={this.openMenu} />
        }
        <Route path='/' exact component={ Home } />
        <Route path='/signup' component={ SignUpPage } />
        <Route path='/signin' component={ SignInPage } />
        <Route path='/buy' component={ BuyForMe } />
        <Route path='/sell' component={ SellForMe } />
        <Route path='/trade' component={ TradeForMe } />
        <Route path='/history' component={ History } />
        <Route path='/user' component={ UserProfile } />
        {
          this.props.location.pathname != '/history' && this.props.location.pathname === '/' && <Footer />
        }
      </div>
    );
  }
}

export default withRouter(App);
