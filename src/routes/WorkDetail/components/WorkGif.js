import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import BlockReveal from '../../../components/BlockReveal';
import HalftoneCharacter from '../../../components/HalftoneCharacter';
import LazyGif from '../../../components/LazyGif';
import Scrambler from '../../../components/Scrambler';

const WorkGif = ({ gif, index, blockId }) => (
  <VisibilitySensor delayedCall>
    {({ isVisible }) =>
      <figure className='c-work-gif'>
        <div className='halftone-wrap'>
          <HalftoneCharacter
            className='c-work-item__index'
            character={`0${index + 1}`} />
        </div>
        <LazyGif forcePlay={isVisible} gif={gif} blockId={blockId} />
        <figcaption className='c-work-gif__caption'>
          <BlockReveal
            forcePlay={isVisible}
            blockId={blockId}
            inline={false}
            delay={0}
            duration={0.5}
            direction={
              index % 2 === 0
              ? 'rightLeft'
              : 'leftRight'}>
            <Scrambler
              forcePlay={isVisible}
              blockId={blockId}
              text={gif.alt}
              duration={0.5}
              delay={0.6}>
              {gif.alt}
            </Scrambler>
          </BlockReveal>
        </figcaption>
      </figure>
    }
  </VisibilitySensor>
)

// class WorkGif extends React.Component {
//   render () {
//     return (
//       <VisibilitySensor partialVisibility delayedCall>
//         {({ isVisible }) =>
//           <figure className='c-work-gif'>
//             <HalftoneCharacter
//               className='c-work-item__index'
//               character={this.props.index + 1} />
//             <LazyGif forcePlay={isVisible} gif={this.props.gif} />
//             <figcaption className='c-work-gif__caption'>
//               <BlockReveal
//                 forcePlay={isVisible}
//                 blockId={this.props.blockId}
//                 inline={false}
//                 delay={0}
//                 duration={0.5}
//                 direction={
//                   this.props.index % 2 === 0
//                   ? 'rightLeft'
//                   : 'leftRight'}>
//                 <Scrambler
//                   forcePlay={isVisible}
//                   blockId={this.props.blockId}
//                   text={this.props.gif.alt}
//                   duration={0.5}
//                   delay={0.6}>
//                   {this.props.gif.alt}
//                 </Scrambler>
//               </BlockReveal>
//             </figcaption>
//           </figure>
//         }
//       </VisibilitySensor>
//     );
//   }
// }

WorkGif.propTypes = {
  gif: PropTypes.object,
  blockId: PropTypes.string,
  index: PropTypes.number,
};

export default WorkGif;
