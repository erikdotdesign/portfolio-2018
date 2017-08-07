import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';

class WorkImage extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility={true} delayedCall={true}>
        {({isVisible}) =>
          <div className="c-work-image">
            <HalftoneCharacter className="c-work-item__index" character={this.props.index + 1} />
            <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? "leftRight" : "rightLeft"}>
              <img src={this.props.url} alt={this.props.alt} />
            </BlockReveal>
            <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? "rightLeft" : "leftRight"}>
              <p className="caption">{this.props.alt}</p>
            </BlockReveal>
          </div>
        }
      </VisibilitySensor>
    );
  }
}

WorkImage.propTypes = {

};

export default WorkImage;
