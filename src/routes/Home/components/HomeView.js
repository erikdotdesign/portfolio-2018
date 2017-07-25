import React from 'react';
import WorkList from './WorkList';
import Hero from './Hero';
import work from '../assets/workList';

export const HomeView = () => (
  <div className="typeset">
    <Hero />
    <WorkList work={work} />
  </div>
);

export default HomeView;
