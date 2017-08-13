import React from 'react';
import PropTypes from 'prop-types';
import WorkHero from './WorkHero';
import WorkBrief from './WorkBrief';
import WorkItem from '../../Home/components/WorkItem';
import workDetailData from '../assets/workDetail';
import workListData from '../../Home/assets/workListData';

class WorkView extends React.Component {
  render () {
    const { workId } = this.props.params;
    const work = workDetailData.find((item) => { return item.id === workId; });
    const next = workListData.find((item) => { return item.id === work.next; });
    const prev = workListData.find((item) => { return item.id === work.prev; });
    return (
      <div className='typeset'>
        <WorkHero
          title={work.name}
          tags={work.tags}
          hex={work.hex}
          year={work.year} />
        <WorkBrief
          brief={work.description}
          title={work.name}
          mobile={work.mobile}
          tablet={work.tablet}
          hex={work.hex}
          links={work.links}
          images={work.images} />
        <WorkItem work={next} index={0} />
        <WorkItem work={prev} index={1} />
      </div>
    );
  }
}

WorkView.propTypes = {
  params: PropTypes.object
};

export default WorkView;
