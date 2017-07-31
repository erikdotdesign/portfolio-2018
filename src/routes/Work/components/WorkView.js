import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import workDetail from '../assets/workDetail';

class WorkView extends React.Component {
  render () {
    const { workId } = this.props.params;
    const work = workDetail.find((workItem) => {return workItem.id == workId});
    return (
      <div className="typeset">
        <WorkHero title={work.name} tags={work.tags} />
      </div>
    );
  }
}

WorkView.propTypes = {

};

export default WorkView;
