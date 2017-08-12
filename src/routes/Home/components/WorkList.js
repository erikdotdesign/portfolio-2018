import React from 'react';
import WorkItem from './WorkItem';
import workListData from '../assets/workListData';

export const WorkList = () => (
  <main className='c-work-list' role='main'>
    {
      workListData.map((workItem, index) =>
        <WorkItem work={workItem} index={index} key={index} />
      )
    }
  </main>
);

export default WorkList;
