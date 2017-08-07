import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../../components/TopNav';

class PageLayout extends React.Component {
  render() {
    return (
      <div className="c-page-layout">
        <TopNav />
        {this.props.children}
      </div>
    )
  }
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
