import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import Scrambler from '../../../components/Scrambler';
import LazyTablet from '../../../components/LazyTablet';
import OutlineButton from '../../../components/OutlineButton';

class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExposed: false
    };
  }
  shouldComponentUpdate (nextProps, nextState) {
    if ((this.props.work.id !== nextProps.work.id) || (this.state.isExposed !== nextState.isExposed)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.work.id !== prevProps.work.id) {
      this.unExpose();
    }
  }
  onChange = (isVisible) => {
    if (isVisible && !this.state.isExposed) {
      this.setExposed();
    }
  }
  setExposed = () => {
    this.setState({
      isExposed: true
    });
  }
  unExpose = () => {
    this.setState({
      isExposed: false
    });
  }
  render () {
    const tagList = this.props.work.tags.join(', ');
    const itemIndex = this.props.workDetail ? `${this.props.workDetail} • ${this.props.work.year}` : `0${this.props.index + 1} • ${this.props.work.year}`;
    return (
      <VisibilitySensor delayedCall onChange={this.onChange}>
        <article className='section section--flex c-work-item' role='article'>
          <div className='columns-flush'>
            <div className='column column--duo'>
              {/* <HalftoneCharacter
                className='c-work-item__index'
                character={`0${this.props.index + 1}`} /> */}
              <LazyTablet
                className='c-tablet__warp--left'
                image={this.props.work.tablet}
                blockId={this.props.work.id}
                forcePlay={this.state.isExposed}
                index={this.props.index} />
            </div>
            <div className='column column--duo'>
              {/* <HalftoneCharacter
                className='c-work-item__display-name'
                character={this.props.work.name.slice(0, 2)} /> */}
              <h6 className='c-work-item__meta'>
                <BlockReveal
                  inline={false}
                  forcePlay={this.state.isExposed}
                  blockId={this.props.work.id}
                  delay={0}
                  duration={0.5}
                  direction={
                  this.props.index % 2 === 0
                  ? 'rightLeft'
                  : 'leftRight'}>
                  <Scrambler
                    forcePlay={this.state.isExposed}
                    blockId={this.props.work.id}
                    text={itemIndex}
                    duration={1}
                    delay={0.50}>
                    {itemIndex}
                  </Scrambler>
                </BlockReveal>
              </h6>
              <h1>
                <BlockReveal
                  inline={false}
                  forcePlay={this.state.isExposed}
                  blockId={this.props.work.id}
                  delay={0}
                  duration={0.5}
                  direction={
                  this.props.index % 2 === 0
                  ? 'leftRight'
                  : 'rightLeft'}>
                  <Scrambler
                    forcePlay={this.state.isExposed}
                    duration={1}
                    blockId={this.props.work.id}
                    delay={0.5}
                    text={this.props.work.name}>
                    {this.props.work.name}
                  </Scrambler>
                </BlockReveal>
              </h1>
              <h3 className='c-work-item__tag-list'>
                <BlockReveal
                  inline={false}
                  forcePlay={this.state.isExposed}
                  blockId={this.props.work.id}
                  delay={0}
                  duration={0.5}
                  direction={
                  this.props.index % 2 === 0
                  ? 'rightLeft'
                  : 'leftRight'}>
                  <Scrambler
                    forcePlay={this.state.isExposed}
                    blockId={this.props.work.id}
                    text={tagList}
                    duration={1}
                    delay={0.50}>
                    {tagList}
                  </Scrambler>
                </BlockReveal>
              </h3>
              <p>
                <BlockReveal
                  inline={false}
                  forcePlay={this.state.isExposed}
                  blockId={this.props.work.id}
                  delay={0}
                  duration={0.5}
                  direction={
                  this.props.index % 2 === 0
                  ? 'leftRight'
                  : 'rightLeft'}>
                  {this.props.work.snippet}
                </BlockReveal>
              </p>
              <OutlineButton
                text='Read More'
                forcePlay={this.state.isExposed}
                router
                link={`/work/${this.props.work.id}`}
                blockId={this.props.work.id} />
            </div>
          </div>
        </article>
      </VisibilitySensor>
    );
  }
}

// const WorkItem = ({ work, index, blockId }) => (
//   <VisibilitySensor delayedCall onChange={onChange}>
//     {({ isVisible }) =>
//       <article className='section c-work-item' role='article'>
//         <div className='columns-flush'>
//           <div className='column column--duo'>
//             {/* <LazyTablet
//               className='c-tablet__warp--left'
//               image={work.tablet}
//               blockId={blockId}
//               forcePlay={isVisible}
//               index={index} /> */}
//           </div>
//           <div className='column column--duo column--mg-b'>
//             {/* <HalftoneCharacter
//               className='c-work-item__index'
//               character={index + 1} /> */}
//             <h1>
//               <BlockReveal
//                 inline={false}
//                 forcePlay={isVisible}
//                 blockId={blockId}
//                 delay={0}
//                 duration={0.5}
//                 direction={
//                 index % 2 === 0
//                 ? 'leftRight'
//                 : 'rightLeft'}>
//                 <Scrambler
//                   forcePlay={isVisible}
//                   duration={1}
//                   blockId={blockId}
//                   delay={0.5}
//                   text={work.name}>
//                   {work.name}
//                 </Scrambler>
//               </BlockReveal>
//             </h1>
//             {/* <ul className='c-work-item__tag-list'>
//               <BlockReveal
//                 inline={false}
//                 forcePlay={isVisible}
//                 blockId={blockId}
//                 delay={0.1}
//                 duration={0.5}
//                 direction={
//                 index % 2 === 0
//                 ? 'rightLeft'
//                 : 'leftRight'}>
//                 {
//                   work.tags.map((tag, index) =>
//                     <li className={'c-work-item__tag'} key={index}>
//                       <Scrambler
//                         forcePlay={isVisible}
//                         blockId={blockId}
//                         header
//                         text={index === work.tags.length - 1 ? tag : `${tag},\u00A0`}
//                         duration={0.5}
//                         delay={0.75 + (0.1 * index)}>
//                         {
//                           index === work.tags.length - 1 ? tag : `${tag},\u00A0`
//                         }
//                       </Scrambler>
//                     </li>
//                   )
//                 }
//               </BlockReveal>
//             </ul>
//             <p>
//               <BlockReveal
//                 inline={false}
//                 forcePlay={isVisible}
//                 blockId={blockId}
//                 delay={0.2}
//                 duration={0.5}
//                 direction={
//                 index % 2 === 0
//                 ? 'leftRight'
//                 : 'rightLeft'}>
//                 {work.snippet}
//               </BlockReveal>
//             </p> */}
//             {/* <OutlineButton
//               text='Read More'
//               forcePlay={isVisible}
//               delay={0.4}
//               router
//               link={`/work/${work.id}`}
//               blockId={blockId} /> */}
//           </div>
//         </div>
//       </article>
//     }
//   </VisibilitySensor>
// );

WorkItem.propTypes = {
  work: PropTypes.object,
  index: PropTypes.number
};

export default WorkItem;
