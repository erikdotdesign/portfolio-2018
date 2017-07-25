import React from 'react';
import TweenLite from 'gsap';
import PropTypes from 'prop-types';

class Splash extends React.Component {
  componentDidMount() {
    const { name, nameBlock, role, roleBlock } = this.refs;
    const nameTimeline = new TimelineLite();
    const roleTimeline = new TimelineLite();

    nameTimeline.from(nameBlock, 0.5, {transform: 'scale3d(0,1,1)', ease: Quint.easeInOut})
                .set(name, {opacity: 1})
                .from(name, 0.5, {x: -20})
                .to(nameBlock, 0.5, {transform: 'scale3d(0,1,1)', transformOrigin: '100% 50%', ease: Quint.easeInOut}, '-=0.5');

    roleTimeline.from(roleBlock, 0.5, {transform: 'scale3d(0,1,1)', delay: 0.25, ease: Quint.easeInOut })
                .set(role, {opacity: 1})
                .from(role, 0.5, {x: -20})
                .to(roleBlock, 0.5, {transform: 'scale3d(0,1,1)', transformOrigin: '100% 50%', ease: Quint.easeInOut}, '-=0.5');
  }
  render () {
    return (
      <div className="section c-splash">
        <div className='single single-measure'>
          <div>
            <h1 className="c-splash__text-block">
              <span className="c-splash__name" ref="name">Erik Myers</span>
              <span className="c-splash__block c-splash__block--name" ref="nameBlock"></span>
            </h1>
          </div>
          <div>
            <h1 className="c-splash__text-block">
              <span className="c-splash__role" ref="role">Design</span>
              <span className="c-splash__block c-splash__block--role" ref="roleBlock"></span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {

};

export default Splash;
