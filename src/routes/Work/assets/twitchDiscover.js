const twitchDiscover = {
  'id':'twitchDiscover',
  'tags':['UI/UX', 'Product', 'Twitch'],
  'name':'Discover',
  'hex': '#6441a4',
  'year': '2017',
  'description': [
    `The Discover directory is the home for live recommended content
    on Twitch. The recommendations are automated based on viewing
    behavior and are displayed in contextual rows for ease of browsing.
    The directory becomes available to users who have a rich enough
    viewing history to generate hight-quality recommendations.`
  ],
  'mobile': null,
  'tablet': {
    'url': require('./img/twitch-di.jpg'),
    'alt': 'Twitch Discover'
  },
  'images': [{
    'url': require('./img/twitch-di-wire-1.jpg'),
    'retina': require('./img/twitch-di-wire-1@2x.jpg'),
    'alt': 'Discover directory wireframe'
  }, {
    'url': require('./img/twitch-di-wire-2.jpg'),
    'retina': require('./img/twitch-di-wire-2@2x.jpg'),
    'alt': 'Discover directory wireframe > carousel interaction'
  }, {
    'url': require('./img/twitch-di-mock-1.jpg'),
    'retina': require('./img/twitch-di-mock-1@2x.jpg'),
    'alt': 'Discover directory mockup'
  }, {
    'url': require('./img/twitch-di-mock-2.jpg'),
    'retina': require('./img/twitch-di-mock-2@2x.jpg'),
    'alt': 'Discover directory mockup > carousel interaction'
  }, {
    'url': require('./img/twitch-di-icon-1.jpg'),
    'retina': require('./img/twitch-di-icon-1@2x.jpg'),
    'alt': 'Discover directory icon exploration 1'
  }, {
    'url': require('./img/twitch-di-icon-2.jpg'),
    'retina': require('./img/twitch-di-icon-2@2x.jpg'),
    'alt': 'Discover directory icon exploration 2'
  }, {
    'url': require('./img/twitch-di-icon-3.jpg'),
    'retina': require('./img/twitch-di-icon-3@2x.jpg'),
    'alt': 'Discover directory icon exploration 3'
  }, {
    'url': require('./img/twitch-di-icon-4.jpg'),
    'retina': require('./img/twitch-di-icon-4@2x.jpg'),
    'alt': 'Discover directory icon exploration 4'
  }],
  'next': 'ironandale',
  'prev': 'tsdp'
};

export default twitchDiscover;
