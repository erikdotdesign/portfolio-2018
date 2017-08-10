import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';

class WorkImage extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility delayedCall>
        {({ isVisible }) =>
          <div className='c-work-image'>
            <HalftoneCharacter className='c-work-item__index' character={this.props.index + 1} />
            <div className='c-work-image__aspect'>
              <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? 'leftRight' : 'rightLeft'}>
                {
                  this.props.image.retina
                  ? <img src={isVisible ? this.props.image.retina : null} srcSet={`${this.props.image.url}, ${this.props.image.retina} 2x`} alt={this.props.image.alt} />
                  : <img src={isVisible ? this.props.image.url : null} alt={this.props.image.alt} />
                }
              </BlockReveal>
              <div className='c-work-image__bg' />
            </div>
            <div className='c-work-image__caption-wrap'>
              <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={this.props.index % 2 == 0 ? 'rightLeft' : 'leftRight'}>
                <p className='c-work-image__caption'>{this.props.image.alt}</p>
              </BlockReveal>
            </div>
          </div>
        }
      </VisibilitySensor>
    );
  }
}

WorkImage.propTypes = {

};

export default WorkImage;
