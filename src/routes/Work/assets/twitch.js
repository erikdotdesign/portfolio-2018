const twitch = {
  'id':'twitch',
  'tags':['UI/UX', 'Product'],
  'name':'Twitch',
  'hex': '#6441a4',
  'year': '16/17',
  'description': [
    `While at Twitch I was fortunate enough to work on many great products
    and features. As a UI/UX designer for the live video team, I worked
    closely with engineering, product, research, data science, and marketing
    to help envision the future of broadcasting. UI/UX designers
    at Twitch are primarily generalists and work on products from start to
    finish. My usual workflow had five steps: research, explorations,
    wireframes, prototypes, and writing the production HTML and BEM SASS.
    Some major products I worked on include: in-player recommendations v1,
    discover directory v1, channel page redesign, video page redesign,
    and events v1. For this post I’ll be talking about in-player recommendations.`,
    `When a broadcaster’s live stream or video ends, video recommendations are displayed
    within the player. The first recommendation surfaced, the featured recommendation,
    is appended to the player and can take two forms depending on the player type.
    After a video, the featured recommendation will autoplay within ten seconds. Users
    can view additional recommendations by clicking ‘Cancel’ or ‘More videos’ if autoplay
    is disabled as seen after a live broadcast. All recommendations are responsive and
    adapt to the size of the player. The number of additional recommendations displayed
    is also dependent on the player size.`
  ],
  'mobile': {
    'url': require('./img/twitch-ipr-mobile.jpg'),
    'alt': 'Twitch mobile in-player recommendations'
  },
  'images': [{
    'url': require('./img/twitch-ipr-exploration-1.jpg'),
    'retina': require('./img/twitch-ipr-exploration-1@2x.jpg'),
    'alt': 'In-player recommendations exploration'
  }, {
    'url': require('./img/twitch-ipr-exploration-2.jpg'),
    'retina': require('./img/twitch-ipr-exploration-2@2x.jpg'),
    'alt': 'In-player recommendations exploration'
  }, {
    'url': require('./img/twitch-ipr-exploration-3.jpg'),
    'retina': require('./img/twitch-ipr-exploration-3@2x.jpg'),
    'alt': 'In-player recommendations exploration'
  }, {
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

export default twitch;
