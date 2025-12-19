import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import WhyJoinClub from './WhyJoinClub';
import FeaturedClubs from './FeaturedClubs';



const Home = () => {
    return (
        <div className='px-6'>
            <Hero />
            <FeaturedClubs/>
            <HowItWorks />
            <WhyJoinClub />
        </div>
    );
};

export default Home;