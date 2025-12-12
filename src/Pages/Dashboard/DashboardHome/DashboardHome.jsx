import React from 'react';
import MemberDashboardHome from './MemberDashboardHome';
import ManagerDashboardHome from './ManagerDashboardHome';
import AdminDashboardHome from './AdminDashboardHome';

const DashboardHome = () => {
    return (
        <div>
            <MemberDashboardHome />
            <ManagerDashboardHome />
            <AdminDashboardHome/>
        </div>
    );
};

export default DashboardHome;