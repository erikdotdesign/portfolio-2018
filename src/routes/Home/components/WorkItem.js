import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';

class WorkItem extends React.Component {
  render () {
    return (
      <div className="section c-work-item">
        <div className="column column--duo">
          <h1>{this.props.name}</h1>
          <p>{this.props.snippet}</p>
          <Link to={`/work/${this.props.id}`}>Read more</Link>
        </div>
        <div className="column column--duo">

        </div>
      </div>
    );
  }
}

WorkItem.propTypes = {

};

export default WorkItem;
