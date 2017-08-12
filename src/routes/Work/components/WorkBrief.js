import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Phone from '../../../components/Phone';
import Tablet from '../../../components/Tablet';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';
import Button from '../../../components/Button';

export const WorkBrief = ({ brief, title, mobile, tablet, hex, links }) => (
  <VisibilitySensor onChange={this.onChange} partialVisibility delayedCall>
    {({ isVisible }) =>
      <div className='section c-work-brief'>
        {
          mobile
          ? <div className='columns-flush'>
            <div className='column column--sidebar'>
              <HalftoneCharacter
                className='c-work-item__index c-work-item__brief'
                character={title.slice(0, 2)} />
              <Phone
                image={mobile}
                forcePlay={isVisible} />
            </div>
            <div className='column c-work-brief__text column--main'>
              <div>
                <h3 className='top-stroke--strong top-stroke--inline c-block-reveal-wrap'>
                  <BlockReveal
                    blockColor={hex}
                    forcePlay={isVisible}
                    inline={false}
                    textShift
                    delay={0}
                    duration={0.5}
                    direction='rightLeft'>
                    Brief
                  </BlockReveal>
                </h3>
              </div>
              {
                brief.map((paragraph, index) =>
                  <p key={index} className='c-block-reveal-wrap'>
                    <BlockReveal
                      blockColor={hex}
                      forcePlay={isVisible}
                      inline={false}
                      delay={0}
                      textShift
                      duration={0.5}
                      direction={
                        index % 2 === 0
                        ? 'leftRight'
                        : 'rightLeft'}>
                      {paragraph}
                    </BlockReveal>
                  </p>
                )
              }
            </div>
          </div>
          : <div className='columns-flush'>
            <div className='column column--duo'>
              <HalftoneCharacter
                className='c-work-item__index c-work-item__brief'
                character={title.slice(0, 2)} />
              <Tablet
                className='c-tablet__warp--left'
                image={tablet}
                forcePlay={isVisible}
                index={0} />
            </div>
            <div className='column c-work-brief__text column--duo'>
              <div>
                <h3 className='top-stroke--strong top-stroke--inline c-block-reveal-wrap'>
                  <BlockReveal
                    blockColor={hex}
                    forcePlay={isVisible}
                    inline={false}
                    delay={0}
                    textShift
                    duration={0.5}
                    direction='rightLeft'>
                    Brief
                  </BlockReveal>
                </h3>
              </div>
              {
                brief.map((paragraph, index) =>
                  <p key={index} className='c-block-reveal-wrap'>
                    <BlockReveal
                      blockColor={hex}
                      forcePlay={isVisible}
                      inline={false}
                      delay={0}
                      textShift
                      duration={0.5}
                      direction={
                        index % 2 === 0
                        ? 'leftRight'
                        : 'rightLeft'}>
                      {paragraph}
                    </BlockReveal>
                  </p>
                )
              }
              {
                links.map((link, index) =>
                  <div className='c-block-reveal-wrap' key={index}>
                    <BlockReveal
                      blockColor={hex}
                      forcePlay={isVisible}
                      inline={false}
                      delay={0}
                      textShift
                      duration={0.5}
                      direction={
                        index % 2 === 0
                        ? 'rightLeft'
                        : 'leftRight'}>
                      <Button
                        className='button button--outline'
                        link={link.url}
                        text={link.text}
                        hex={hex} />
                    </BlockReveal>
                  </div>
                )
              }
            </div>
          </div>
        }
      </div>
    }
  </VisibilitySensor>
);

WorkBrief.propTypes = {
  brief: PropTypes.array,
  title: PropTypes.string,
  mobile: PropTypes.object,
  tablet: PropTypes.object,
  hex: PropTypes.string,
  links: PropTypes.array
};

export default WorkBrief;
