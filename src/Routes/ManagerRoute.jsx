import React from 'react';

import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Loading from '../Component/Loading';
import Forbidden from '../Component/Forbidden';

const ManagerRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'manager') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default ManagerRoute;