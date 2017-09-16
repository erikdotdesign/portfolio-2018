import React from 'react';
import WorkList from './WorkList';
import HomeHero from './HomeHero';

const Home = ({ workList }) => (
  <div className='typeset'>
    <HomeHero />
    <WorkList workList={workList} />
  </div>
);

export default Home;
