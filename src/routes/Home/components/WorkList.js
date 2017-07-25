import React from 'react';
import PropTypes from 'prop-types';
import work from '../assets/work.json';
import WorkItem from './WorkItem';
import { IndexLink, Link } from 'react-router';

class WorkList extends React.Component {
  render () {
    return (
      <div className="c-work-list">
        {
          work.map((work, index) =>
            <WorkItem id={work.id}
                      tags={work.tags}
                      snippet={work.snippet}
                      name={work.name}
                      key={index} />
          )
        }
      </div>
    );
  }
}

WorkList.propTypes = {

};

export default WorkList;
