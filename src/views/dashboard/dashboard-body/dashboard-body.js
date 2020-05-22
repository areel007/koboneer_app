import React from 'react';
import DashboardHeader from '../header-dashboard/header-dashboard';
import DashboardMainBody from '../dashboard-body/main-body-dashboard';
import './dashboard-body.css';

const DashboardBody = () => {
    return(
        <main id='dashboard-body'>
            <div id='dashboard-body-inner'>
                <DashboardHeader />
                <DashboardMainBody />
            </div>
        </main>
    );
}

export default DashboardBody;