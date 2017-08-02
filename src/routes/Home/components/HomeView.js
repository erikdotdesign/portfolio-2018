import React from 'react';
import WorkList from './WorkList';
import Hero from './Hero';

class HomeView extends React.Component {
  render () {
    return (
      <div className="typeset">
        <Hero />
        <WorkList baseline={this.props.baseline} />
      </div>
    );
  }
}

HomeView.propTypes = {

};

export default HomeView;
