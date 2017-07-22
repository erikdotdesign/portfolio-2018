import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';

class TopNav extends React.Component {
  render () {
    return (
      <nav className='c-top-nav'>
        <div className='c-top-nav__content'>
          <div className='c-top-nav__left'>
            <IndexLink className='c-top-nav__logo' to='/'>erik.design</IndexLink>
          </div>
          <div className='c-top-nav__right'>
            <button className='o-button' onClick={() => this.props.baseline ? this.props.disableBaseline() : this.props.enableBaseline()}>
              Show Baseline
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

TopNav.propTypes = {
  baseline: PropTypes.bool.isRequired,
  disableBaseline: PropTypes.func.isRequired,
  enableBaseline: PropTypes.func.isRequired
};

export default TopNav;
