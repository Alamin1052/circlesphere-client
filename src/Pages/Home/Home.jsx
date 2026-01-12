import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import WhyJoinClub from './WhyJoinClub';
import FeaturedClubs from './FeaturedClubs';
import Categories from './Categories';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import FAQ from './FAQ';
import Blogs from './Blogs';



const Home = () => {
    return (
        <div className=''>
            <Hero />
            <FeaturedClubs />
            <Blogs />
            <Categories />
            <Statistics />
            <Testimonials />
            <HowItWorks />
            <WhyJoinClub />
            <FAQ />
            <Newsletter />
        </div>
    );
};

export default Home;