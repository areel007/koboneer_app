import React from 'react';
import './product.css';
import PayForMe from '../../../assets/img/buy.svg';
import TradeECurrency from '../../../assets/img/7.svg';
import SellForMe from '../../../assets/img/2.svg';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div id='two'>
            <div id='products'>
                <section>
                    <div className='inner-products'>
                        <div className='product__img'>
                            <img src={PayForMe} alt='pay' />
                        </div>
                        <div className='product__text' id='product-one'>
                            <h2>Pay For Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum cum doloremque...<Link to='/' className='read-more'>Read more</Link></p>
                        </div>
                    </div>
                </section>
                <section className='grey'>
                    <div className='inner-products'>
                        <div className='product__text' id='product-two'>
                            <h2>Trade E-Currency</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum cum doloremqu...<Link to='/' className='read-more'>Read more</Link>
                            </p>
                        </div>
                        <div className='product__img'>
                            <img src={TradeECurrency} alt='trade' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='inner-products'>
                        <div className='product__img'>
                            <img src={SellForMe} alt='sell for me' />
                        </div>
                        <div className='product__text' id='product-three'>
                            <h2>Buy For Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum cum doloremque...<Link to='/' className='read-more'>Read more</Link></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Product;