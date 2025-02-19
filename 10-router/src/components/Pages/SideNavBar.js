import React from 'react'
import { Link } from 'react-router-dom';

import "../Pages/Dashboard/Dashboard.css"
function SideNavBar() {
    return (
        <div className="sidebar">
            <Link to='/dashboard'>Home</Link>
            <Link to='/dashboard/students'>Studnets</Link>
            <Link to='/dashboard/Faculty'>Faculty</Link>
            <Link to='/login'>Logout</Link>
        </div>
    )
}

export default SideNavBar