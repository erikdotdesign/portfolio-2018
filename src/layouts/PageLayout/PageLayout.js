import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../../components/TopNav';

export const PageLayout = ({ children }) => (
  <div className='c-page-layout'>
    <TopNav />
    {children}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
