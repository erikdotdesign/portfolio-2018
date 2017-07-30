import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import BlockReveal from '../../../components/BlockReveal';

class WorkItem extends React.Component {
  render () {
    return (
      <div className="section c-work-item">
        <div className="column column--duo column--mg-b">
          <BlockReveal inline={true} delay={0} duration={0.5} textShift direction="leftRight">
            <h1>{this.props.name}</h1>
          </BlockReveal>
          <BlockReveal inline={false} delay={0.25} duration={0.5} textShift direction="rightLeft">
            <p>{this.props.snippet}</p>
          </BlockReveal>
          <BlockReveal inline={true} delay={0.5} duration={0.5} direction="bottomTop">
            <Link className="button button--outline" to={`/work/${this.props.id}`}>Read more</Link>
          </BlockReveal>
        </div>
        <div className="column column--duo">
          <BlockReveal inline={true} delay={0.5} duration={0.5} direction="topBottom">
            <img src="http://via.placeholder.com/1024x768" />
          </BlockReveal>
        </div>
      </div>
    );
  }
}

WorkItem.propTypes = {

};

export default WorkItem;

//<Tablet />
