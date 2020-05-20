import React from 'react';
import { Link } from 'react-router-dom';
import './form.css'

const Form = () => {
    return (
        <form id='form'>
            <h1>Sign In</h1>
            <div id='inner-form'>
                <div className='form-control'>
                    <label>Username:</label>
                    <input type='text' />
                </div>
                <div className='form-control'>
                    <label>Password:</label>
                    <input type='password' />
                </div>
                
                <div className='form-control' id='btn'>
                    <button>Submit</button>
                </div>
                <div className='switch'>
                    <p>Don't have an account yet? <Link id='switch' to='/signup'>Sign In</Link></p>
                </div>
            </div>
        </form>
    );
}

export default Form;