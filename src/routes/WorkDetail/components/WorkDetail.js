import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import WorkBrief from './WorkBrief';
import WorkItem from '../../Home/components/WorkItem';

class WorkDetail extends React.Component {
  render () {
    const { workDetail, nextWork, prevWork, params } = this.props;
    return (
      <div className='typeset'>
        <WorkHero
          title={workDetail.name}
          tags={workDetail.tags}
          blockId={params.workId}
          hex={workDetail.hex}
          year={workDetail.year} />
        <WorkBrief
          brief={workDetail.description}
          title={workDetail.name}
          mobile={workDetail.mobile}
          blockId={params.workId}
          tablet={workDetail.tablet}
          hex={workDetail.hex}
          links={workDetail.links}
          images={workDetail.images} />
        <WorkItem work={nextWork} index={0} blockId={params.workId} />
        <WorkItem work={prevWork} index={1} blockId={params.workId} />
      </div>
    );
  }
}

WorkDetail.propTypes = {
  params: PropTypes.object
};

export default WorkDetail;
