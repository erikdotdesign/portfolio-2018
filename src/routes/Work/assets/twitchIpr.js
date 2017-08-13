const twitchIpr = {
  'id':'twitchIPR',
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
  'mobile': null,
  'tablet': {
    'url': require('./img/twitch-ipr.jpg'),
    'alt': 'Twitch in-player recommendations'
  },
  'images': [{
    'url': require('./img/twitch-ipr-wire-1.jpg'),
    'retina': require('./img/twitch-ipr-wire-1@2x.jpg'),
    'alt': 'Featured in-player recommendation wireframe'
  }, {
    'url': require('./img/twitch-ipr-wire-2.jpg'),
    'retina': require('./img/twitch-ipr-wire-2@2x.jpg'),
    'alt': 'Featured in-player recommendation with autoplay wireframe'
  }, {
    'url': require('./img/twitch-ipr-wire-3.jpg'),
    'retina': require('./img/twitch-ipr-wire-3@2x.jpg'),
    'alt': 'Additional recommendations wireframe'
  }, {
    'url': require('./img/twitch-ipr-mock-1.jpg'),
    'retina': require('./img/twitch-ipr-mock-1@2x.jpg'),
    'alt': 'Featured in-player recommendation mockup'
  }, {
    'url': require('./img/twitch-ipr-mock-2.jpg'),
    'retina': require('./img/twitch-ipr-mock-2@2x.jpg'),
    'alt': 'Featured in-player recommendation with autoplay mockup'
  }, {
    'url': require('./img/twitch-ipr-mock-3.jpg'),
    'retina': require('./img/twitch-ipr-mock-3@2x.jpg'),
    'alt': 'Additional recommendations mockup'
  }],
  'next': 'ironandale',
  'prev': 'tsdp'
};

export default twitchIpr;
