import React from 'react';
import Image from '../../../../assets/img/mobile.svg';
import './landing.css'

const Landing = () => {
    return(
        <div id='landing-image'>
            <img src={Image} alt='landing' />
        </div>
    );
}

export default Landing