import React from 'react';
import DashboardSidebar from './dashboard-sidebar/dashboard-sidebar';
import DashboardBody from './dashboard-body/dashboard-body';
import HeaderDashboard from './header-dashboard/header-dashboard';
import './dashboard.css';

const Dashboard = () => {
    return(
        <section>
            <div id='dashboard'>
                <HeaderDashboard />
                <DashboardSidebar />
                <DashboardBody />
            </div>
            
        </section>
    );
}

export default Dashboard;