import React from 'react';
import PropTypes from 'prop-types';
import Blob from './Blob';
import { TweenMax, TimelineMax } from 'gsap';
import { DrawSVGPlugin } from 'DrawSVGPlugin';
import GSAP from 'react-gsap-enhancer'
import blobs from '../blobs';
import { triangleFill, triangleFillOverlay, thinTriangle } from '../triangles';
import GooFilter from './GooFilter';
import ReactDOM from 'react-dom';
import Triangle from './Triangle';
import LineTriangle from './LineTriangle';

const initialState = {
  blobs,
  thinTriangle,
  triangleFill,
  triangleFillOverlay,
  filter: {
    active: true,
    id: 'blob-grid-filter',
    feColorMatrix: {
      values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9',
      result: 'blob-grid-filter-feColorMatrix'
    },
    feGaussianBlur: {
      stdDeviation: 10,
      result: 'blob-grid-filter-feGaussianBlur'
    }
  }
}


class BlobGrid extends React.Component {
  componentWillMount() {
    this.setState({...initialState});
  }
  componentDidMount() {
    const baseComponent = ReactDOM.findDOMNode(this);
    const blobs = baseComponent.getElementsByClassName('blob');
    const blobCircles = baseComponent.getElementsByClassName('blob-circle');
    const blobCharacters = baseComponent.getElementsByClassName('character');
    const blobBlurFilters = baseComponent.getElementsByClassName('blob-filter');
    const filter = baseComponent.getElementById(this.state.filter.id);
    const filterBlur = filter.children[0];
    const triangleFill = baseComponent.getElementById('triangle-fill');
    const triangleFillOverlay = baseComponent.getElementById('triangle-fill-overlay');
    const thinTriangle = baseComponent.getElementById('thin-triangle');

    const blobTimeline = new TimelineMax();
    const step1 = new TimelineMax();
    const step2 = new TimelineMax();
    const step3 = new TimelineMax();
    const step4 = new TimelineMax();
    const step5 = new TimelineMax();
    const step6 = new TimelineMax();
    const step7 = new TimelineMax();
    const step8 = new TimelineMax({onComplete: () => {
      TweenMax.set(baseComponent, {attr: {filter: 'none'}});
      TweenMax.to(blobBlurFilters, 1, {attr: {stdDeviation: 0}});
      TweenMax.to(blobCharacters, 0.5, {opacity: 1});
      TweenMax.to(blobCircles, 0.75, {attr: {r: 0}});

      TweenMax.fromTo(triangleFillOverlay, 0.5, {drawSVG:"50%, 50%", strokeWidth: 2}, {drawSVG:"100%", strokeWidth: 21, ease:Elastic.back});
      TweenMax.fromTo(thinTriangle, 0.5, {drawSVG:"50%, 50%", strokeWidth: 0}, {drawSVG:"100%", strokeWidth: 2, ease:Elastic.back});
      TweenMax.to(triangleFillOverlay, 0.25, {opacity: 0, delay: 0.25, ease:Elastic.back});
      TweenMax.to(triangleFill, 0.25, {opacity: 1, delay: 0.25, ease:Elastic.back});
    }});
    const step9 = new TimelineMax();
    const step10 = new TimelineMax();

    step1.set([blobs.namedItem('myers-y'), blobs.namedItem('design-r1-emdash')], {attr: {transform: 'matrix(1, 0, 0, 1, 245, 220)'}})
         .to([blobs.namedItem('myers-y'), blobs.namedItem('design-r1-emdash')], 0.25, {opacity: 1})
         .to(blobs.namedItem('myers-y'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 196, 171)'}}, '-=0.25')
         .to(blobs.namedItem('design-r1-emdash'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 294, 269)'}}, '-=0.5')

    step2.set([blobs.namedItem('myers-m'), blobs.namedItem('myers-e'), blobs.namedItem('erik-i')], {attr: {transform: 'matrix(1, 0, 0, 1, 196, 171)'}})
         .to([blobs.namedItem('myers-m'), blobs.namedItem('myers-e'), blobs.namedItem('erik-i')], 0.25, {opacity: 1})
         .to(blobs.namedItem('myers-m'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 98, 171)'}}, '-=0.25')
         .to(blobs.namedItem('myers-e'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 294, 171)'}}, '-=0.5')
         .to(blobs.namedItem('erik-i'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 196, 73)'}}, '-=0.5');

    step3.set([blobs.namedItem('design-r2-n'), blobs.namedItem('design-r1-s')], {attr: {transform: 'matrix(1, 0, 0, 1, 294, 269)'}})
         .to([blobs.namedItem('design-r2-n'), blobs.namedItem('design-r1-s')], 0.25, {opacity: 1})
         .to(blobs.namedItem('design-r2-n'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 294, 367)'}}, '-=0.25')
         .to(blobs.namedItem('design-r1-s'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 196, 269)'}}, '-=0.5');

    step4.set(blobs.namedItem('design-r1-e'), {attr: {transform: 'matrix(1, 0, 0, 1, 98, 171)'}})
         .set(blobs.namedItem('design-r2-g'), {attr: {transform: 'matrix(1, 0, 0, 1, 294, 367)'}})
         .to([blobs.namedItem('design-r1-e'), blobs.namedItem('design-r2-g')], 0.25, {opacity: 1})
         .to(blobs.namedItem('design-r1-e'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 98, 269)'}}, '-=0.25')
         .to(blobs.namedItem('design-r2-g'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 196, 367)'}}, '-=0.5');

    step5.set([blobs.namedItem('design-r1-d'), blobs.namedItem('design-r2-i')], {attr: {transform: 'matrix(1, 0, 0, 1, 98, 269)'}})
         .to([blobs.namedItem('design-r1-d'), blobs.namedItem('design-r2-i')], 0.25, {opacity: 1})
         .to(blobs.namedItem('design-r1-d'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 0, 269)'}}, '-=0.25')
         .to(blobs.namedItem('design-r2-i'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 98, 367)'}}, '-=0.5');

    step6.set([blobs.namedItem('myers-r'), blobs.namedItem('erik-k')], {attr: {transform: 'matrix(1, 0, 0, 1, 294, 171)'}})
         .to([blobs.namedItem('myers-r'), blobs.namedItem('erik-k')], 0.25, {opacity: 1})
         .to(blobs.namedItem('myers-r'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 392, 171)'}}, '-=0.25')
         .to(blobs.namedItem('erik-k'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 294, 73)'}}, '-=0.5');

    step7.set(blobs.namedItem('erik-r'), {attr: {transform: 'matrix(1, 0, 0, 1, 98, 171)'}})
         .set(blobs.namedItem('myers-s'), {attr: {transform: 'matrix(1, 0, 0, 1, 392, 171)'}})
         .to([blobs.namedItem('erik-r'), blobs.namedItem('myers-s')], 0.25, {opacity: 1})
         .to(blobs.namedItem('erik-r'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 98, 73)'}}, '-=0.25')
         .to(blobs.namedItem('myers-s'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 490, 171)'}}, '-=0.5');

    step8.set(blobs.namedItem('erik-e'), {attr: {transform: 'matrix(1, 0, 0, 1, 98, 73)'}})
         .to(blobs.namedItem('erik-e'), 0.25, {opacity: 1})
         .to(blobs.namedItem('erik-e'), 0.5, {attr: {transform: 'matrix(1, 0, 0, 1, 0, 73)'}}, '-=0.25');

    blobTimeline.add(step1);
    blobTimeline.add(step2, '-=0.25');
    blobTimeline.add(step3, '-=0.5');
    blobTimeline.add(step4, '-=0.25');
    blobTimeline.add(step5, '-=0.25');
    blobTimeline.add(step6, '-=0.5');
    blobTimeline.add(step7, '-=0.25');
    blobTimeline.add(step8, '-=0.25');
  }
  render() {
    const { width, height, viewBox } = this.props;
    const { blobs, thinTriangle, triangleFill, triangleFillOverlay, filter } = this.state;
    return (
      <svg id='blob-grid'
           width={width}
           height={height}
           viewBox={viewBox}
           version='1.1'
           xmlns='http://www.w3.org/2000/svg'
           style={{width: '100%'}}
           filter={filter.active ? `url(#${filter.id})` : false}>

        <g stroke='none'
           strokeWidth='1'
           fill='none'
           fillRule='evenodd'>

           <LineTriangle id={thinTriangle.id}
                         d={thinTriangle.d}
                         stroke={thinTriangle.stroke}
                         strokeWidth={thinTriangle.strokeWidth} />

          {
            blobs.slice(6).map((blob, index) =>
              <Blob id={blob.id}
                    className={blob.className}
                    x={blob.x}
                    y={blob.y}
                    key={index}
                    circle={blob.circle}
                    character={blob.character}
                    opacity={blob.opacity}
                    filter={blob.filter} />
            )
          }

          <Triangle id={triangleFill.id}
                    opacity={triangleFill.opacity} />

          <LineTriangle id={triangleFillOverlay.id}
                        d={triangleFillOverlay.d}
                        stroke={triangleFillOverlay.stroke}
                        strokeWidth={triangleFillOverlay.strokeWidth} />

          {
            blobs.slice(0, 6).map((blob, index) =>
              <Blob id={blob.id}
                    className={blob.className}
                    x={blob.x}
                    y={blob.y}
                    key={index}
                    circle={blob.circle}
                    character={blob.character}
                    opacity={blob.opacity}
                    filter={blob.filter} />
            )
          }

          <GooFilter id={filter.id}
                     feGaussianBlur={{
                      stdDeviation: filter.feGaussianBlur.stdDeviation,
                      result: filter.feGaussianBlur.result}}
                     feColorMatrix={{
                      values: filter.feColorMatrix.values,
                      result: filter.feColorMatrix.result}}
                     ref={(Filter) => this.filter = Filter} />
        </g>
      </svg>
    );
  }
}

BlobGrid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  viewBox: PropTypes.string.isRequired
};

export default BlobGrid;
