import React, { Component } from 'react';
import Head from './head/head';
import Body from './body/body';

class UserProfile extends Component {
    render() {
        return(
            <div className='user-profile'>
                <Head />
                <Body />
            </div>
        );
    }
}

export default UserProfile;