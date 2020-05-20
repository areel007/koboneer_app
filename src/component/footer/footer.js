import React from 'react';
import Address from '../../assets/img/address.svg';
import Phone from '../../assets/img/phone.svg';
import Mail from '../../assets/img/mail.svg';
import Fb from '../../assets/img/fb.svg';
import Twitter from '../../assets/img/twitter.svg';
import In from '../../assets/img/in.svg';
import Github from '../../assets/img/github.svg';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <section id='six'>
            <div id='footer'>
                <div id='contact'>
                    <div className="contact">
                        <img src={Address} alt="address" />
                        <p>Sabo, Lagos State</p>
                    </div>
                    <div className="contact">
                        <img src={Phone} alt="address" />
                        <p>+234(0)802-8943-665</p>
                    </div>
                    <div className="contact">
                        <img src={Mail} alt="address" />
                        <p>morenikeji@koboneer.com</p>
                    </div>
                </div>
                <div id='company'>
                    <h3>About the company</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit eius ratione aliquam hic
                    libero obcaecati, sint nostrum placeat distinctio.</p>
                    <div id='socials'>
                        <div className='socials'>
                            <Link to='/'><img src={ Fb } alt='fb' /></Link>
                        </div>
                        <div className='socials'>
                            <Link to='/'><img src={ Twitter } alt='twitter' /></Link>
                        </div>
                        <div className='socials'>
                            <Link to='/'><img src={ In } alt='in' /></Link>
                        </div>
                        <div className='socials'>
                            <Link to='/'><img src={ Github} alt='github' /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;