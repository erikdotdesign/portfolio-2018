import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Phone from '../../../components/Phone';
import Tablet from '../../../components/Tablet';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import VisibilitySensor from 'react-visibility-sensor';
import Button from '../../../components/Button';

class WorkBrief extends React.Component {
  render () {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility delayedCall>
        {({ isVisible }) =>
          <div className='section c-work-brief'>
            {
              this.props.mobile
              ?
              <div className='columns-flush'>
                <div className='column column--sidebar'>
                  <HalftoneCharacter
                    className='c-work-item__index c-work-item__brief'
                    character={this.props.title.slice(0, 2)} />
                  <Phone
                    image={this.props.mobile}
                    forcePlay={isVisible} />
                </div>
                <div className='column c-work-brief__text column--main'>
                  <div>
                    <h3 className="top-stroke--strong top-stroke--inline c-block-reveal-wrap">
                      <BlockReveal
                        blockColor={this.props.hex}
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
                    this.props.brief.map((paragraph, index) =>
                      <p key={index} className='c-block-reveal-wrap'>
                        <BlockReveal
                          blockColor={this.props.hex}
                          forcePlay={isVisible}
                          inline={false}
                          delay={0}
                          textShift
                          duration={0.5}
                          direction={
                            index % 2 == 0
                            ? 'leftRight'
                            : 'rightLeft'}>
                          {paragraph}
                        </BlockReveal>
                      </p>
                    )
                  }
                </div>
              </div>
              :
              <div className='columns-flush'>
                <div className='column column--duo'>
                  <HalftoneCharacter
                    className='c-work-item__index c-work-item__brief'
                    character={this.props.title.slice(0, 2)} />
                  <Tablet
                    className='c-tablet__warp--left'
                    image={this.props.tablet}
                    forcePlay={isVisible}
                    index='0' />
                </div>
                <div className='column c-work-brief__text column--duo'>
                  <div>
                    <h3 className="top-stroke--strong top-stroke--inline c-block-reveal-wrap">
                      <BlockReveal
                        blockColor={this.props.hex}
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
                    this.props.brief.map((paragraph, index) =>
                      <p key={index} className='c-block-reveal-wrap'>
                        <BlockReveal
                          blockColor={this.props.hex}
                          forcePlay={isVisible}
                          inline={false}
                          delay={0}
                          textShift
                          duration={0.5}
                          direction={
                            index % 2 == 0
                            ? 'leftRight'
                            : 'rightLeft'}>
                          {paragraph}
                        </BlockReveal>
                      </p>
                    )
                  }
                  {
                    this.props.links.map((link, index) =>
                      <div className='c-block-reveal-wrap'>
                        <BlockReveal
                          key={index}
                          blockColor={this.props.hex}
                          forcePlay={isVisible}
                          inline={false}
                          delay={0}
                          textShift
                          duration={0.5}
                          direction={
                            index % 2 == 0
                            ? 'rightLeft'
                            : 'leftRight'}>
                          <Button
                            className='button button--outline'
                            link={link.url}
                            text={link.text}
                            hex={this.props.hex} />
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
  }
}

WorkBrief.propTypes = {

};

export default WorkBrief;
