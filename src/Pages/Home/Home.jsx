import React from 'react';
import Banner from '../Home/Banner'
import Featured from './Featured';
import About from './About';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Team from './Team';
import FeaturedClass from './FeaturedClass';
import Forum from './Forum';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

const Home = () => {


    const { data: classes = [] } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await axios.get("http://localhost:1000/class");
          console.log( res.data , "all class");
          return res.data;
        },
      });




    return (
        <div>
            <Helmet>
                <title>
                    Fitness king | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <FeaturedClass></FeaturedClass>
            <Testimonials></Testimonials>
            <Forum></Forum>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;