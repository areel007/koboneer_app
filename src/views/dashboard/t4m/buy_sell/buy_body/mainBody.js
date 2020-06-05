import React, { Component } from 'react';
import './mainBody.css';

class MainBodyBuy extends Component {
    render() {
        return (
            <div id='mainBodyBuy'>
                <h2>Buy Currency</h2>
                <form>
                    <div className='form_control'>
                        <div className='label'>
                            <label>Order</label>
                        </div>
                        <div className='input'>
                            <input type='text' />
                            <select>
                                <option>Select Currency</option>
                                <option>Bitcoin</option>
                                <option>Steam</option>
                            </select>
                        </div>
                        <div id='naira-equiv'>N0.00</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default MainBodyBuy