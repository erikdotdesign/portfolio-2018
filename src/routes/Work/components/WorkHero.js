import React from 'react';
import PropTypes from 'prop-types';
import BlockReveal from '../../../components/BlockReveal';
import Cube from '../../../components/Cube';
import Phone from '../../../components/Phone';
import DownArrow from '../../../components/DownArrow';
import VisibilitySensor from 'react-visibility-sensor';
import HalftoneCharacter from '../../../components/HalftoneCharacter';

class WorkHero extends React.Component {
  render () {
    return (
      <VisibilitySensor partialVisibility={true} delayedCall={true}>
        {({isVisible}) =>
          <div className="section c-work-hero">
            <div className="single single-measure">
              <Cube faceSize={25} duration={20} above start={{x: '10%', y: '65%', rotateX: 80, rotateY: 45, rotateZ: -90}} end={{x: '+=20', y: '+=20'}} />
              <Cube faceSize={15} duration={25} above start={{x: '80%', y: '70%', rotateX: 47, rotateY: 57, rotateZ: 11}} end={{x: '-=20', y: '+=20'}} />
              <Cube faceSize={25} duration={22} above start={{x: '60%', y: '20%', rotateX: 76, rotateY: 22, rotateZ: 34}} end={{x: '-=20', y: '-=20'}} />
              <Cube faceSize={10} duration={26} above start={{x: '25%', y: '5%', rotateX: 40, rotateY: 90, rotateZ: 90}} end={{x: '-=20', y: '+=20'}} />
              <Cube faceSize={8} duration={21} above start={{x: '0%', y: '30%', rotateX: 58, rotateY: 10, rotateZ: 49}} end={{x: '+=20', y: '+=20'}} />
              <Cube faceSize={8} duration={21} above start={{x: '95%', y: '45%', rotateX: 90, rotateY: 47, rotateZ: 23}} end={{x: '-=10', y: '+=10'}} />
              <Cube faceSize={10} duration={28} above start={{x: '90%', y: '10%', rotateX: 38, rotateY: 33, rotateZ: 0}} end={{x: '-=20', y: '+=20'}} />
              <Cube faceSize={10} duration={29} above start={{x: '60%', y: '85%', rotateX: 22, rotateY: 90, rotateZ: 90}} end={{x: '-=20', y: '+=20'}} />
              <HalftoneCharacter className="c-hero__year" character={this.props.year} />
              <BlockReveal inline={false} forcePlay={isVisible} blockColor={this.props.hex} delay={0} textShift duration={0.5}>
                <h1 className='epsilon--display-condensed'>{this.props.title}</h1>
              </BlockReveal>
              <BlockReveal inline={false} forcePlay={isVisible} blockColor={this.props.hex} delay={0.2} textShift duration={0.5} direction="rightLeft">
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
              <DownArrow hex={this.props.hex} forcePlay={isVisible} />
            </div>
          </div>
        }
      </VisibilitySensor>
    );
  }
}

WorkHero.propTypes = {

};

export default WorkHero;
