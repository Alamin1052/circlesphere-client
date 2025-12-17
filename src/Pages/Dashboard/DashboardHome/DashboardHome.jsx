import React from 'react';
import useRole from '../../../Hooks/useRole';
import Loading from '../../../Component/Loading';
import AdminDashboardHome from './AdminDashboardHome';
import ManagerDashboardHome from './ManagerDashboardHome';
import MemberDashboardHome from './MemberDashboardHome';

const DashboardHome = () => {
    const { role, roleLoading } = useRole();
    if (roleLoading) {
        return <Loading></Loading>
    }
    if (role === 'admin') {
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if (role === 'manager') {
        return <ManagerDashboardHome></ManagerDashboardHome>
    }
    else {
        return <MemberDashboardHome></MemberDashboardHome>
    }
}

export default DashboardHome;