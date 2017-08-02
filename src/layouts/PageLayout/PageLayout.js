import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../../components/TopNav';

class PageLayout extends React.Component {
  render() {
    return (
      <div className="c-page-layout">
        <TopNav disableBaseline={this.props.disableBaseline} enableBaseline={this.props.enableBaseline} baseline={this.props.baseline} />
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
    )
  }
};

PageLayout.propTypes = {
  children: PropTypes.node,
  baseline: PropTypes.bool.isRequired,
  disableBaseline: PropTypes.func.isRequired,
  enableBaseline: PropTypes.func.isRequired
};

export default PageLayout;
