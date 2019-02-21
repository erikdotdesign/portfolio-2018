import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import WorkBrief from './WorkBrief';
import WorkItem from '../../Home/components/WorkItem';
import Hero from '../../../components/Hero';

class WorkDetail extends React.Component {
  render () {
    const { work, nextWork, prevWork, params } = this.props;
    return (
      <div className='typeset'>
        <Hero
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
        <WorkItem work={nextWork} index={0} workDetail='Next' blockId={params.workId} />
        <WorkItem work={prevWork} index={1} workDetail='Prev' blockId={params.workId} />
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
