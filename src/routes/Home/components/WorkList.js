import React from 'react';
import WorkItem from './WorkItem';
import workListData from '../assets/workListData';

export const WorkList = () => (
  <div className='c-work-list'>
    {
      workListData.map((workItem, index) =>
        <WorkItem work={workItem} index={index} key={index} />
      )
    }
  </div>
);

export default WorkList;
