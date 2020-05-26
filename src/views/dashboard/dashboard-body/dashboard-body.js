import React from 'react';
import DashboardMainBody from '../dashboard-body/main-body-dashboard';
import DashboardSidebar from '../dashboard-sidebar/dashboard-sidebar';
import './dashboard-body.css';

const DashboardBody = () => {
    return(
        <main id='dashboard-body'>
            <div id='dashboard-body-inner'>
                <DashboardSidebar />
                <DashboardMainBody />
            </div>
        </main>
    );
}

export default DashboardBody;