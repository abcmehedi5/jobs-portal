import React from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;