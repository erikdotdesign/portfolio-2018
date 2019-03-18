import betterworks from './betterworks';
import colledger from './colledger';
import docmatter from './docmatter';
import ironandale from './ironandale';
import electwitch from './electwitch';
import tsdp from './tsdp';
import twitch from './twitch';
import caffeineAbout from './caffeine.about';
import caffeineLiveHost from './caffeine.live-host';

export const workList = [
  caffeineLiveHost,
  caffeineAbout,
  twitch,
  tsdp,
  electwitch,
  docmatter,
  betterworks,
  colledger,
  ironandale
].map(currentValue => {
  const { id, tags, name, snippet, tablet, year } = currentValue;
  return {
    id, tags, name, snippet, tablet, year
  };
});

export const workDetail = {
  caffeineLiveHost,
  caffeineAbout,
  twitch,
  tsdp,
  electwitch,
  docmatter,
  betterworks,
  colledger,
  ironandale
};

