import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import WhyJoinClub from './WhyJoinClub';



const Home = () => {
    return (
        <div className='px-6'>
            <Hero />
            <HowItWorks />
            <WhyJoinClub />
        </div>
    );
};

export default Home;