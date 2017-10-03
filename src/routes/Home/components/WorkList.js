import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';

const WorkList = ({ workList }) => (
  <main className='c-work-list' role='main'>
    {
      workList.map((workItem, index) =>
        <WorkItem work={workItem} index={index} halftoneText={index + 1} key={index} />
      )
    }
  </main>
);

WorkList.propTypes = {
  workList: PropTypes.array
};

export default WorkList;
