const twitchIpr = {
  'id':'twitchIPR',
  'tags':['UI/UX', 'Product', 'Twitch'],
  'name':'Twitch In-Player Recs',
  'hex': '#6441a4',
  'year': '2017',
  'description': [
    `When a broadcaster’s live stream or video ends, video recommendations are
    displayed within the player. The first recommendation surfaced, the featured
    recommendation, is appended to the player and can take two forms depending on
    the player type. After a video, the featured recommendation will autoplay within
    ten seconds. Users can view additional recommendations by clicking ‘Cancel’ or
    ‘More videos’ if autoplay is disabled as seen after a live broadcast. All
    recommendations are responsive and adapt to the size of the player. The number of
    additional recommendations displayed is also dependent on the player size.`
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
    'alt': 'Additional in-player recommendations wireframe'
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
    'alt': 'Additional in-player recommendations mockup'
  }],
  'next': 'ironandale',
  'prev': 'tsdp'
};

export default twitchIpr;
