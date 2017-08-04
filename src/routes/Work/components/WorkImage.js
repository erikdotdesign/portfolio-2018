import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';

class WorkImage extends React.Component {
  render () {
    return (
      <div className="c-work-image">
        <BlockReveal blockColor={this.props.hex} inline={false} delay={0} duration={0.5} direction="leftRight">
          <img src={this.props.url} alt={this.props.alt} />
        </BlockReveal>
        <BlockReveal blockColor={this.props.hex} inline={false} delay={0} duration={0.5} direction="rightLeft">
          <p className="caption">{this.props.alt}</p>
        </BlockReveal>
      </div>
    );
  }
}

WorkImage.propTypes = {

};

export default WorkImage;
