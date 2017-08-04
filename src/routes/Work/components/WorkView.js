import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import WorkBrief from './WorkBrief';
import ImageList from './ImageList';
import workDetail from '../assets/workDetail';

class WorkView extends React.Component {
  render () {
    const { workId } = this.props.params;
    const work = workDetail.find((workItem) => {return workItem.id == workId});
    return (
      <div className="typeset">
        <WorkHero title={work.name} tags={work.tags} hex={work.hex} year={work.year} />
        <WorkBrief brief={work.description} title={work.name} mobile={work.mobile} hex={work.hex} />
        <ImageList images={work.images} hex={work.hex} />
      </div>
    );
  }
}

WorkView.propTypes = {

};

export default WorkView;
