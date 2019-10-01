import React from 'react';
import PropTypes from 'prop-types';
import WorkList from './WorkList';
import Hero from '../../../components/Hero';

const Home = ({ workList }) => (
  <div className='typeset'>
    <Hero
      title='erik.design'
      subtitle='Erik Myers Design'
      secondStep
      blockId='home'
      titleTwo='2015 – 2019'
      subtitleTwo='Full-Stack Design' />
    <WorkList workList={workList} />
  </div>
);

Home.propTypes = {
  workList: PropTypes.array
};

export default Home;
