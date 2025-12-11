import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <section className='bg-[linear-gradient(to_bottom_right,#e2edff,#f9fbff)]'>
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default MainLayout;