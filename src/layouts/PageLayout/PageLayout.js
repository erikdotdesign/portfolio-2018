import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import styles from '../../styles/components/components.pageLayout.sass';

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={styles['page-layout__nav-item--active']}>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={styles['page-layout__nav-item--active']}>Counter</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
);
PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
