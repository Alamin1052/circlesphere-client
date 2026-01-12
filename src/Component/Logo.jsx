import React from 'react';
import logo from '../assets/logo_icon.png'

const Logo = () => {
    return (
        <div className='flex items-center  gap-1'>
            <img src={logo} className='w-10 h-10' alt="" />
            <h1 className='text-2xl text-blue-500 font-bold'>CIRCLESPHERE</h1>
        </div >
    );
};

export default Logo;