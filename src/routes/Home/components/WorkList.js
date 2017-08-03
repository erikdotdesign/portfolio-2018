import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';
import { IndexLink, Link } from 'react-router';
import work from '../assets/workList';

class WorkList extends React.Component {
  render () {
    return (
      <div className={`c-work-list ${this.props.baseline ? 'c-page-layout--baseline' : ''}`}>
        {
          work.map((workItem, index) =>
            <WorkItem id={workItem.id}
                      tags={workItem.tags}
                      index={index}
                      snippet={workItem.snippet}
                      hex={workItem.hex}
                      name={workItem.name}
                      image={workItem.image}
                      key={index} />
          )
        }
      </div>
    );
  }
}

export default WorkList;
