import React from 'react';
import Sidebar from './sidebar';
import MainBody from './main-body';
import './body.css';

const Body = () => {
    return(
        <main id='body'>
            <Sidebar />
            <MainBody />
        </main>
    );
}

export default Body;