import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';

const PageLayout = ({ children }) => (
  <div className='c-page-layout'>
    <TopNav />
    {children}
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
