import betterworks from './betterworks';
import docmatter from './docmatter';
import electwitch from './electwitch';
import tsdp from './tsdp';
import twitch from './twitch';
import caffeineAbout from './caffeine.about';
import caffeineLiveHost from './caffeine.live-host';

export const workListTest = [
  caffeineLiveHost,
  caffeineAbout,
  twitch,
  tsdp,
  electwitch,
  docmatter,
  betterworks
];

export const workList = workListTest.map(currentValue => {
  const { id, tags, name, snippet, tablet, year } = currentValue;
  return {
    id, tags, name, snippet, tablet, year
  };
});

export const workDetail = workListTest.map(function(currentValue, index){
  let nextWork = workListTest[index + 1];
  let prevWork = workListTest[index - 1];

  if (index + 1 >= workListTest.length) {
    nextWork = workListTest[0];
  } else if (index === 0) {
    prevWork = workListTest[workListTest.length - 1];
  }

  currentValue.nextWork = nextWork;
  currentValue.prevWork = prevWork;

  return currentValue;

});