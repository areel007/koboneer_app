import React, { Component } from 'react';
import './form.css';
import { Link } from 'react-router-dom';

class Form extends Component {
    

    render() {
        return (
            <form id='form'>
                <h1>Register</h1>
                <div id='inner-form'>
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
}

export default Form;