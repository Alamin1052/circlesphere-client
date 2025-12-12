import React from 'react';
import MemberDashboardHome from './MemberDashboardHome';
import ManagerDashboardHome from './ManagerDashboardHome';

const DashboardHome = () => {
    return (
        <div>
            <MemberDashboardHome />
            <ManagerDashboardHome />
        </div>
    );
};

export default DashboardHome;