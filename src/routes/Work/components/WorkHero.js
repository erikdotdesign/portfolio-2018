import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

class WorkHero extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility delayedCall>
        {({ isVisible }) =>
          <Hero rightHalftoneText={this.props.year} arrowRevealColor={this.props.hex}>
            <div className='single single-measure c-work-hero__content'>
              <h1 className='epsilon--display-condensed'>
                <BlockReveal
                  inline={false}
                  forcePlay={isVisible}
                  blockColor={this.props.hex}
                  delay={0}
                  textShift
                  duration={0.5}>
                  {this.props.title}
                </BlockReveal>
              </h1>
              <ul className='c-work-hero__tag-list'>
                <BlockReveal
                  inline={false}
                  forcePlay={isVisible}
                  blockColor={this.props.hex}
                  delay={0.2}
                  textShift
                  duration={0.5}
                  direction='rightLeft'>
                {
                  this.props.tags.map((tag, index) =>
                    <li className={'c-work-hero__tag'} key={index}>
                      {
                        index == this.props.tags.length - 1
                        ? tag
                        : `${tag},\u00A0`
                      }
                    </li>
                  )
                }
                </BlockReveal>
              </ul>
            </div>
            <div className='c-work-hero__overlay' style={{ background: this.props.hex }} />
          </Hero>
        }
      </VisibilitySensor>
    );
  }
}

WorkHero.propTypes = {

};

export default WorkHero;
