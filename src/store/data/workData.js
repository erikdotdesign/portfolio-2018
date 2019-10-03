import betterworks from './betterworks';
import docmatter from './docmatter';
import electwitch from './electwitch';
import tsdp from './tsdp';
import twitch from './twitch';
import caffeineAbout from './caffeine.about';
import caffeineLiveHost from './caffeine.live-host';

const workListRaw = [
  caffeineLiveHost,
  caffeineAbout,
  twitch,
  tsdp,
  electwitch,
  docmatter,
  betterworks
];

// Slimmed data for work list page
export const workList = workListRaw.map(currentValue => {
  const { id, tags, name, snippet, tablet, year } = currentValue;
  return {
    id, tags, name, snippet, tablet, year
  };
});

// Full data for work detail page
// Adds Next and Previous links for footer
export const workDetail = workListRaw.map(function(currentValue, index){
  let nextWork = workList[index + 1];
  let prevWork = workList[index - 1];

  if (index + 1 >= workList.length) {
    nextWork = workList[0];
  } else if (index === 0) {
    prevWork = workList[workList.length - 1];
  }

  currentValue.nextWork = nextWork;
  currentValue.prevWork = prevWork;

  return currentValue;
});