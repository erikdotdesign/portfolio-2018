import React from 'react';
import PropTypes from 'prop-types';
import WorkList from './WorkList';
import HomeHero from './HomeHero';

const Home = ({ workList }) => (
  <div className='typeset'>
    <HomeHero />
    <WorkList workList={workList} />
  </div>
);

Home.propTypes = {
  workList: PropTypes.array
};

export default Home;
