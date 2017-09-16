const twitch = {
  'id':'twitch',
  'tags':['UI/UX', 'Product'],
  'name':'Twitch',
  'hex': '#6441a4',
  'year': '16/17',
  'snippet': 'A breakdown of my workflow at Twitch and the products I had the oppertunity to worked on.',
  'description': [
    `While at Twitch I was fortunate enough to work on many great products
    and features. As a UI/UX designer for the live video team, I worked
    closely with engineering, product, research, data science, and marketing
    to help envision the future of broadcasting. UI/UX designers
    at Twitch are primarily generalists and work on products from start to
    finish. My usual workflow had five steps: research, explorations,
    wireframes, prototypes, and writing the production BEM HTML and SASS.
    Some major products I helped worked on include: In-player recommendations v1,
    Discover directory v1, Channel page redesign, Video page redesign,
    and Events v1. For this post, I’ll just be talking about in-player recommendations.`,
    `When a broadcaster’s live stream or video ends, video recommendations are displayed
    within the player. The first recommendation surfaced, the featured recommendation,
    is appended to the player and can take two forms depending on the player type.
    After a video, the featured recommendation will autoplay within ten seconds. Users
    can view additional recommendations by clicking ‘Cancel’ or ‘More videos’ if autoplay
    is disabled as seen after a live broadcast. All recommendations are responsive and
    adapt to the size of the player. The number of additional recommendations displayed
    is also dependent on the player size.`
  ],
  'links': null,
  'mobile': {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-mobile.jpg'),
    'alt': 'Twitch mobile in-player recommendations'
  },
  'tablet': {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr.jpg'),
    'alt': 'Twitch in-player recommendations'
  },
  'images': [{
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-exploration-1.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-exploration-1@2x.jpg'),
    'alt': 'In-player recommendations exploration'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-exploration-2.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-exploration-2@2x.jpg'),
    'alt': 'In-player recommendations exploration'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-exploration-3.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-exploration-3@2x.jpg'),
    'alt': 'In-player recommendations exploration'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-wire-1.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-wire-1@2x.jpg'),
    'alt': 'Featured in-player recommendation wireframe'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-wire-2.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-wire-2@2x.jpg'),
    'alt': 'Featured in-player recommendation with autoplay wireframe'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-wire-3.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-wire-3@2x.jpg'),
    'alt': 'Additional recommendations wireframe'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-mock-1.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-mock-1@2x.jpg'),
    'alt': 'Featured in-player recommendation mockup'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-mock-2.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-mock-2@2x.jpg'),
    'alt': 'Featured in-player recommendation with autoplay mockup'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/twitch-ipr-mock-3.jpg'),
    'retina': require('../../routes/WorkDetail/assets/img/twitch-ipr-mock-3@2x.jpg'),
    'alt': 'Additional recommendations mockup'
  }],
  'next': 'ironandale',
  'prev': 'tsdp'
};

export default twitch;
