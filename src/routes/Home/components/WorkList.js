import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';
import { IndexLink, Link } from 'react-router';

class WorkList extends React.Component {
  render () {
    return (
      <div className="c-work-list">
        {
          this.props.work.map((workItem, index) =>
            <WorkItem id={workItem.id}
                      tags={workItem.tags}
                      index={index}
                      snippet={workItem.snippet}
                      name={workItem.name}
                      key={index} />
          )
        }
      </div>
    );
  }
}

WorkList.propTypes = {
  work: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired
  }))
};

export default WorkList;
