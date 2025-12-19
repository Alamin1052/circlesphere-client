import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <section className='min-h-screen bg-[linear-gradient(to_bottom_right,#fff1f2,#ffe4e6,#fff7ed)]'>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default MainLayout;