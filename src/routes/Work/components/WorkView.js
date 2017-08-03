import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import WorkBrief from './WorkBrief';
import workDetail from '../assets/workDetail';

class WorkView extends React.Component {
  render () {
    const { workId } = this.props.params;
    const work = workDetail.find((workItem) => {return workItem.id == workId});
    return (
      <div className="typeset">
        <WorkHero title={work.name} tags={work.tags} />
        <WorkBrief brief={work.description} images={work.images} />
      </div>
    );
  }
}

WorkView.propTypes = {

};

export default WorkView;
