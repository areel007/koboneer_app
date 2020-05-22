import React from 'react';
import LandingImage from './landing/landing';
import SignInForm from './form/form';
import './sign-in.css';

const SignInPage = () => {
    return (
        <section>
            <div className='sign-up-form'>
                <div className='landing-image'>
                    <LandingImage />
                </div>
                <div className='landing-form'>
                    <SignInForm />
                </div>
            </div>
        </section>
    );
}

export default SignInPage;