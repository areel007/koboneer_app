import React from 'react';
import Landing from './landing/landing';
import Product from './product/product';
// import Newsletter from './newsletter/newsletter';
import './home.css';

class Home extends React.Component {



  render() {
    return (
      <div id='home'>
        <Landing />
        <Product />
        {/* <Newsletter /> */}
      </div>
    )
  }
}

export default Home;