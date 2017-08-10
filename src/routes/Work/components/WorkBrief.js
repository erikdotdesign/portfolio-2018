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
              ? <div className='columns-flush'>
                <div className='column column--sidebar'>
                  <HalftoneCharacter className='c-work-item__index c-work-item__brief' character={this.props.title.slice(0, 2)} />
                  <Phone image={this.props.mobile} forcePlay={isVisible} />
                </div>
                <div className='column c-work-brief__text column--main'>
                  <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction='rightLeft'>
                    <h3 className='top-stroke--strong'>Brief</h3>
                  </BlockReveal>
                  {
                    this.props.brief.map((paragraph, index) =>
                      <BlockReveal key={index} blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={index % 2 == 0 ? 'leftRight' : 'rightLeft'}>
                        <p>
                          {paragraph}
                        </p>
                      </BlockReveal>
                    )
                  }
                </div>
              </div>
              : <div className='columns-flush'>
                <div className='column column--duo'>
                  <HalftoneCharacter className='c-work-item__index c-work-item__brief' character={this.props.title.slice(0, 2)} />
                  <Tablet className='c-tablet__warp--left' image={this.props.tablet} forcePlay={isVisible} index='0' />
                </div>
                <div className='column c-work-brief__text column--duo'>
                  <BlockReveal blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction='rightLeft'>
                    <h3 className='top-stroke--strong'>Brief</h3>
                  </BlockReveal>
                  {
                    this.props.brief.map((paragraph, index) =>
                      <BlockReveal key={index} blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={index % 2 == 0 ? 'leftRight' : 'rightLeft'}>
                        <p>
                          {paragraph}
                        </p>
                      </BlockReveal>
                    )
                  }
                  {
                    this.props.links.map((link, index) =>
                      <BlockReveal key={index} blockColor={this.props.hex} forcePlay={isVisible} inline={false} delay={0} duration={0.5} direction={index % 2 == 0 ? 'rightLeft' : 'leftRight'}>
                        <Button className='button button--outline' link={link.url} text={link.text} hex={this.props.hex} />
                      </BlockReveal>
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
