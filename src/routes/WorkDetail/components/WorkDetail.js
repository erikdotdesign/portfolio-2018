import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import WorkBrief from './WorkBrief';
import WorkItem from '../../Home/components/WorkItem';

class WorkDetail extends React.Component {
  render () {
    const { work, nextWork, prevWork, params } = this.props;
    return (
      <div className='typeset'>
        <WorkHero
          title={work.name}
          tags={work.tags}
          blockId={params.workId}
          hex={work.hex}
          year={work.year} />
        <WorkBrief
          brief={work.description}
          title={work.name}
          mobile={work.mobile}
          blockId={params.workId}
          tablet={work.tablet}
          hex={work.hex}
          links={work.links}
          images={work.images} />
        <WorkItem work={nextWork} index={0} blockId={params.workId} />
        <WorkItem work={prevWork} index={1} blockId={params.workId} />
      </div>
    );
  }
}

WorkDetail.propTypes = {
  work: PropTypes.object,
  nextWork: PropTypes.object,
  prevWork: PropTypes.object,
  params: PropTypes.object
};

export default WorkDetail;
