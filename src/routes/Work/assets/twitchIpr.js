const twitchIpr = {
  'id':'twitchIpr',
  'tags':['UI/UX', 'Product', 'Twitch'],
  'name':'Twitch In-Player Recs',
  'hex': '#6441a4',
  'year': '2017',
  'description': [
    `When a broadcaster’s live stream or video finishes,
    video recommendations are displayed within the player.
    After a video, the featured recommendation will autoplay
    within ten seconds. Users can view additional recommendations
    by clicking 'More Videos' or 'Cancel' if autoplay is enabled.`
  ],
  'mobile': {
    'url': require('./img/twitch-ipr-mobile.jpg'),
    'alt': 'Twitch Sketch Data Populator top games example'
  },
  'images': [{
    'url': require('./img/electwitch-1.jpg'),
    'retina': require('./img/electwitch-1@2x.jpg'),
    'alt': 'Browse games'
  }, {
    'url': require('./img/electwitch-2.jpg'),
    'retina': require('./img/electwitch-2@2x.jpg'),
    'alt': 'Search games and channels'
  }, {
    'url': require('./img/electwitch-3.jpg'),
    'retina': require('./img/electwitch-3@2x.jpg'),
    'alt': 'Browse channels'
  }, {
    'url': require('./img/electwitch-4.jpg'),
    'retina': require('./img/electwitch-4@2x.jpg'),
    'alt': 'Browse communities'
  }, {
    'url': require('./img/electwitch-5.jpg'),
    'retina': require('./img/electwitch-5@2x.jpg'),
    'alt': 'Browse clips'
  }, {
    'url': require('./img/electwitch-6.jpg'),
    'retina': require('./img/electwitch-6@2x.jpg'),
    'alt': 'Link Twitch account and login'
  }, {
    'url': require('./img/electwitch-7.jpg'),
    'retina': require('./img/electwitch-7@2x.jpg'),
    'alt': 'Browse following'
  }, {
    'url': require('./img/electwitch-8.jpg'),
    'retina': require('./img/electwitch-8@2x.jpg'),
    'alt': 'Watch and chat experience'
  }],
  'next': 'ironandale',
  'prev': 'electwitch'
};

export default twitchIpr;
