import characters from './characters';
import circles from './circles';

const blobOpacity = 0;
const blobClassName = 'blob';

const blobFilter = {
  active: true,
  feColorMatrix: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9',
  feGaussianBlur: 10
}

const erik = [{
  id: 'erik-e',
  className: blobClassName,
  x: 0,
  y: 73,
  character: characters.e,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'erik-r',
  className: blobClassName,
  x: 98,
  y: 73,
  character: characters.r,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'erik-i',
  className: blobClassName,
  x: 196,
  y: 73,
  character: characters.i,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'erik-k',
  className: blobClassName,
  x: 294,
  y: 73,
  character: characters.k,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
}];

const year = [{
  id: 'year-2',
  className: blobClassName,
  x: 398,
  y: 81,
  character: characters.two,
  circle: circles.sm,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'year-0',
  className: blobClassName,
  x: 424,
  y: 81,
  character: characters.zero,
  circle: circles.sm,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'year-1',
  className: blobClassName,
  x: 398,
  y: 104,
  character: characters.one,
  circle: circles.sm,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'year-7',
  className: blobClassName,
  x: 424,
  y: 104,
  character: characters.seven,
  circle: circles.sm,
  opacity: blobOpacity,
  filter: blobFilter
}];

const myers = [{
  id: 'myers-m',
  className: blobClassName,
  x: 98,
  y: 171,
  character: characters.m,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'myers-y',
  className: blobClassName,
  x: 196,
  y: 171,
  character: characters.y,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'myers-e',
  className: blobClassName,
  x: 294,
  y: 171,
  character: characters.e,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'myers-r',
  className: blobClassName,
  x: 392,
  y: 171,
  character: characters.r,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'myers-s',
  className: blobClassName,
  x: 490,
  y: 171,
  character: characters.s,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
}];

const design = [{
  id: 'design-r1-d',
  className: blobClassName,
  x: 0,
  y: 269,
  character: characters.d,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'design-r1-e',
  className: blobClassName,
  x: 98,
  y: 269,
  character: characters.e,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'design-r1-s',
  className: blobClassName,
  x: 196,
  y: 269,
  character: characters.s,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'design-r1-emdash',
  className: blobClassName,
  x: 294,
  y: 269,
  character: characters.emdash,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'design-r2-i',
  className: blobClassName,
  x: 98,
  y: 367,
  character: characters.i,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'design-r2-g',
  className: blobClassName,
  x: 196,
  y: 367,
  character: characters.g,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
},{
  id: 'design-r2-n',
  className: blobClassName,
  x: 294,
  y: 367,
  character: characters.n,
  circle: circles.lg,
  opacity: blobOpacity,
  filter: blobFilter
}];

const topBlobs = [...erik.slice(0, 1), ...year, ...design.slice(0, 1)];
const bottomBlobs = [...erik.slice(1), ...myers, ...design.slice(1)];
const blobs = [...topBlobs, ...bottomBlobs];

export default blobs;
