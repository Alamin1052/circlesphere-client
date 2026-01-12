import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <section className='min-h-screen bg-slate-50'>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default MainLayout;