import betterworks from './betterworks';
import colledger from './colledger';
import docmatter from './docmatter';
import ironandale from './ironandale';
import electwitch from './electwitch';
import tsdp from './tsdp';
import twitch from './twitch';

export const workList = [
  twitch,
  tsdp,
  electwitch,
  docmatter,
  betterworks,
  colledger,
  ironandale
].map((currentValue) => {
  const { id, tags, name, snippet, tablet } = currentValue;
  return {
    id, tags, name, snippet, tablet
  };
});

export const workDetail = {
  twitch,
  tsdp,
  electwitch,
  docmatter,
  betterworks,
  colledger,
  ironandale
};
