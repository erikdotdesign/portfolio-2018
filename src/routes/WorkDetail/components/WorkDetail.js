import React from 'react';
import PropTypes from 'prop-types';
import WorkBrief from './WorkBrief';
import Hero from '../../../components/Hero';
import BriefFooter from './BriefFooter';

class WorkDetail extends React.Component {
  render () {
    const { work, params } = this.props;
    return (
      <div className='typeset'>
        <Hero
          blockId={params.workId}
          title={work.name}
          subtitle={work.tags.join(', ')} />
        <WorkBrief
          brief={work.description}
          blockId={params.workId}
          links={work.links}
          images={work.images} />
        <BriefFooter
          blockId={params.workId}
          nextWork={work.nextWork}
          prevWork={work.prevWork} />
      </div>
    );
  }
}

WorkDetail.propTypes = {
  work: PropTypes.object,
  params: PropTypes.object
};

export default WorkDetail;
