import React from 'react';
import WorkItem from './WorkItem';

const WorkList = ({ workList }) => (
  <main className='c-work-list' role='main'>
    {
      workList.map((workItem, index) =>
        <WorkItem work={workItem} index={index} key={index} />
      )
    }
  </main>
);

export default WorkList;
