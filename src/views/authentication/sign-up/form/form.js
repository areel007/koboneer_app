import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <form id='form'>
            <h1>Register</h1>
            <div id='inner-form'>
                <div className='form-control'>
                    <label>First Name:</label>
                    <input type='text' />
                </div>
                <div className='form-control'>
                    <label>Last Name:</label>
                    <input type='text' />
                </div>
                <div className='form-control'>
                    <label>Email:</label>
                    <input type='email' />
                </div>
                <div className='form-control'>
                    <label>Password:</label>
                    <input type='password' />
                </div>
                <div className='form-control'>
                    <label>Confirm Password:</label>
                    <input type='password' />
                </div>
                <div className='form-control'>
                    <label>Phone Number:</label>
                    <input type='password' />
                </div>
                <div className='form-control' id='btn'>
                    <button>Sign Up</button>
                </div>
                <div className='switch'>
                    <p>Already have an account? <Link id='switch' to='/signin'>Sign In</Link></p>
                </div>
            </div>
        </form>
    );
}

export default Form;