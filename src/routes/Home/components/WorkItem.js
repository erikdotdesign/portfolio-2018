import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';

class WorkItem extends React.Component {
  render () {
    return (
      <div className="section">
        <div className='columns-flush'>
          <div className="column column--duo">
            <h4>{this.props.name}</h4>
            <p>{this.props.snippet}</p>
            <Link to={`/work/${this.props.id}`}>Read more</Link>
          </div>
          <div className="column column--duo">
            <p className="caption sidenote">This is an inline caption.</p>
          </div>
        </div>
      </div>
    );
  }
}

WorkItem.propTypes = {

};

export default WorkItem;
