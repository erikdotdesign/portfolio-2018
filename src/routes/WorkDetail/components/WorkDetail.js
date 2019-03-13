import React from 'react';
import PropTypes from 'prop-types';
import WorkBrief from './WorkBrief';
import WorkItem from '../../Home/components/WorkItem';
import Hero from '../../../components/Hero';
import BriefFooter from './BriefFooter';

class WorkDetail extends React.Component {
  render () {
    const { work, nextWork, prevWork, params } = this.props;
    return (
      <div className='typeset'>
        <Hero
          blockId={params.workId}
          title={work.name}
          subtitle={work.tags.join(', ')} />
        <WorkBrief
          brief={work.description}
          title={work.name}
          mobile={work.mobile}
          blockId={params.workId}
          tablet={work.tablet}
          hex={work.hex}
          links={work.links}
          images={work.images} />
        <BriefFooter blockId={params.workId} nextWork={nextWork} prevWork={prevWork} />
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
