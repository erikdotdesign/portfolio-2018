import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';

class TopNav extends React.Component {
  render () {
    const { baseline, disableBaseline, enableBaseline } = this.props;
    return (
      <nav className='c-top-nav'>
        <div className='c-top-nav__content'>
          <div className='c-top-nav__left'>
            <IndexLink className='c-top-nav__logo' to='/'>erik.design</IndexLink>
          </div>
          <div className='c-top-nav__right'>
            <div className="button-group-flush">
              <a href="" className="button">LinkedIn</a>
              <a href="" className="button">Email</a>
            </div>
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
