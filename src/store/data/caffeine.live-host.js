const caffeineLiveHost = {
  'id':'caffeineLiveHost',
  'tags':['Product', 'UI/UX'],
  'name':'Live Host',
  'year': '2018',
  'snippet': `Live Host feature breakdown for Caffeine.tv’s web and iOS applications.`,
  'description': [
    `Caffeine.tv is a social broadcasting platform for gaming, entertainment, and the creative arts. It offers simple and easy to use tools for broadcasters to live stream using their browser, mobile device, or Windows gaming machine. The Live Host feature is built atop Caffeine’s web and iOS applications. Before Live Host, you could only broadcast your webcam using these platforms. That changed when Caffeine signed an exclusive content deal with Fox. With the influx of amazing content, we wanted to give broadcasters an equally amazing toolset to leverage this content.`,
    `Live Host gives broadcasters the ability to add this content to their webcam broadcasts in real-time, effectively giving them the power to be their own sports commentator. Along with this, broadcasters are also provided with a programing guide of upcoming content so they can plan future broadcasts. Both the web and iOS UI/UX were completely redesigned to make room for Live Host. We also introduced a brand new icon system in tandem.`
  ],
  'links': null,
  'mobile': null,
  'tablet': {
    'url': require('../../routes/WorkDetail/assets/img/lh-tablet.png'),
    'alt': 'Caffeine live host feature'
  },
  'images': [{
    'url': require('../../routes/WorkDetail/assets/img/lh-g-1.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-1@2x.png'),
    'alt': 'Default broadcaster interface (web on the left and iOS on the right). Clicking the tv icon will prompt the live host selection menu.'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/lh-g-2.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-2@2x.png'),
    'alt': 'Live host selection menu. From the live host selection menu, broadcasters can select the broadcast they’d like to host, change hosts, or view upcoming content with the programming guide.'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/lh-g-3.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-3@2x.png'),
    'alt': 'Programming guide. The programming guide provides broadcasters with a list of upcoming hostable content.'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/lh-g-4.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-4@2x.png'),
    'alt': 'Hosting interface. After selecting a broadcast to host, the broadcasters’ webcam shrinks and the hosted broadcast is appended to the player.'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/lh-g-5.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-5@2x.png'),
    'alt': 'Live interface. Once live, the player controls move out of frame to give the broadcaster a better viewing experience. The controls can be toggled by hovering over the player on web and tapping the player on iOS.'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/lh-g-6.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-6@2x.png'),
    'alt': 'Switching hosts. Broadcasters can seamlessly add, change, or remove a host even when they’re live.'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/lh-g-7.png'),
    'retina': require('../../routes/WorkDetail/assets/img/lh-g-7@2x.png'),
    'alt': 'Host controls. Broadcasters can also mute or granularly change the playback volume of the hosted broadcast.'
  }],
  'next': 'caffeineAbout',
  'prev': 'ironandale'
};

export default caffeineLiveHost;
