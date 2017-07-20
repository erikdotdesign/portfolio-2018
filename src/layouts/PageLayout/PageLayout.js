import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import styles from 'components.pageLayout.sass';
import TopNav from '../../components/TopNav';

export const PageLayout = ({ children }) => (
  <div className={styles['c-pageLayout']}>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    {children}
  </div>
);
PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
