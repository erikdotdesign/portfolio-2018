import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

class HomeHero extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility delayedCall>
        {({ isVisible }) =>
          <Hero rightHalftoneText='17/18'>
            <div className='single single-measure'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                delay={0}
                textShift
                duration={0.5}>
                <h1 className='epsilon--display-condensed'>Erik Myers</h1>
              </BlockReveal>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                delay={0.2}
                textShift
                duration={0.5}
                direction='rightLeft'>
                <h1 className='epsilon--display-condensed'>Design</h1>
              </BlockReveal>
            </div>
          </Hero>
        }
      </VisibilitySensor>
    );
  }
}

HomeHero.propTypes = {

};

export default HomeHero;
