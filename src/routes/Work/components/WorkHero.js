import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Hero from '../../../components/Hero';
import VisibilitySensor from 'react-visibility-sensor';

class WorkHero extends React.Component {
  render () {
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true} delayedCall={true}>
        {({isVisible}) =>
          <Hero rightHalftoneText={this.props.year} arrowRevealColor={this.props.hex}>
            <div className="single single-measure">
              <BlockReveal inline={false} blockColor={this.props.hex} delay={0} textShift duration={0.5}>
                <h1 className='epsilon--display-condensed'>{this.props.title}</h1>
              </BlockReveal>
              <BlockReveal inline={false} blockColor={this.props.hex} delay={0.2} textShift duration={0.5} direction="rightLeft">
                <ul className="c-work-hero__tag-list">
                  {
                    this.props.tags.map((tag, index) =>
                      <li className={"c-work-hero__tag"} key={index}>
                        {
                          index == this.props.tags.length - 1
                          ?
                          tag
                          :
                          `${tag},\u00A0`
                        }
                      </li>
                    )
                  }
                </ul>
              </BlockReveal>
            </div>
          </Hero>
        }
      </VisibilitySensor>
    );
  }
}

WorkHero.propTypes = {

};

export default WorkHero;
