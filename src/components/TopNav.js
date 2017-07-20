import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import styles from 'components.topNav.sass';

class TopNav extends React.Component {
  render () {
    return (
      <nav className={styles['c-topNav']}>
        <Logo />
      </nav>
    );
  }
}

export default TopNav;
