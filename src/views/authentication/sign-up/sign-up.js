import React from 'react';
import LandingImage from './landing/landing';
import SignUpForm from './form/form';
import './sign-up.css';

const SignUpPage = () => {
    return(
        <section>
            <div className='sign-up-form'>
                <div className='landing-image'>
                    <LandingImage />
                </div>
                <div className='landing-form'>
                    <SignUpForm />
                </div>
            </div>
        </section>
    );
}

export default SignUpPage;