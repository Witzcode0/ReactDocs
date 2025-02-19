import React from 'react';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import SideNavBar from '../SideNavBar';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <SideNavBar />
            <div className="main-content">
                <h1>This is a nested routing</h1>

                <div className='nested-contaniner'>
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
