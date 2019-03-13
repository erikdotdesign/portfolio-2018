import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../components/BlockReveal';
import Scrambler from '../../components/Scrambler';
import OutlineButton from '../../components/OutlineButton';

const NotFound = () => (
  <div className='typeset'>
    <VisibilitySensor delayedCall>
      {({isVisible}) =>
        <header className='section c-hero' role='banner'>
          <div className='single c-hero__content'>
            <h1 className='epsilon--display-condensed'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={'404'}
                header
                delay={0}
                duration={0.5}>
                <Scrambler
                  forcePlay={isVisible}
                  blockId={'404'}
                  duration={1}
                  header
                  delay={0.5}
                  text={'Hodor!'}>
                  Hodor!
                </Scrambler>
              </BlockReveal>
            </h1>
            <span className='c-hero__subtitle'>
              <BlockReveal
                inline={false}
                forcePlay={isVisible}
                blockId={'404'}
                header
                delay={0}
                duration={0.5}
                direction='rightLeft'>
                <Scrambler
                  forcePlay={isVisible}
                  blockId={'404'}
                  duration={1}
                  header
                  delay={0.5}
                  text={'Page not found'}>
                  Page not found
                </Scrambler>
              </BlockReveal>
            </span>
            <div className='c-hero__actions'>
              <OutlineButton
                text='Back to Work'
                forcePlay={isVisible}
                router
                link={`/`}
                blockId={'404'} />
            </div>
          </div>
        </header>
      }
    </VisibilitySensor>
  </div>
);

export default NotFound;

{/* <OutlineButton
  text='View Work'
  forcePlay={isVisible}
  router
  link={`/`}
  blockId={'404'} /> */}
