import React from 'react';
import WorkList from './WorkList';
import HomeHero from './HomeHero';

export const HomeView = () => (
  <div className='typeset'>
    <HomeHero />
    <WorkList />
  </div>
);

export default HomeView;
