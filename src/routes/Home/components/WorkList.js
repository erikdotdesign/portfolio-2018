import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';
import { IndexLink, Link } from 'react-router';
import workListData from '../assets/workListData';

class WorkList extends React.Component {
  render () {
    return (
      <div className='c-work-list'>
        {
          workListData.map((workItem, index) =>
            <WorkItem work={workItem} index={index} key={index} />
          )
        }
      </div>
    );
  }
}

WorkList.propTypes = {

};

export default WorkList;
