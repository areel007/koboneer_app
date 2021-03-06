import React from 'react';
import { Link } from 'react-router-dom';
import './form.css'

const Form = () => {
    return (
        <form id='form'>
            <h1>Sign In</h1>
            <div id='inner-form'>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' />
                </div>
                <span id='forget-password'>Forget Password? <Link to='/' id='reset'>Reset</Link></span>
                <div className='form-control' id='btn'>
                    <button>Sign In</button>
                </div>
                <div className='switch'>
                    <p>Don't have an account yet? <Link id='switch' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </form>
    );
}

export default Form;