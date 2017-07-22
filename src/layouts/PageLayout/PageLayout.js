import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../../components/TopNav';

class PageLayout extends React.Component {
  render() {
    return (
      <div className={`c-page-layout ${this.props.baseline ? 'c-page-layout--baseline' : ''}`}>
        <TopNav disableBaseline={this.props.disableBaseline} enableBaseline={this.props.enableBaseline} baseline={this.props.baseline} />
        {this.props.children}
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
