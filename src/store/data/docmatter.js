const docmatter = {
  'id': 'docmatter',
  'tags': ['Branding', 'UI/UX'],
  'name': 'DocMatter',
  'year': '2016',
  'snippet': `Branding process overview for DocMatter’s public facing website.`,
  'description': [
    `DocMatter is a healthcare startup focused on creating collaboration software
    for medical professionals. As the Head of Design, my main responsibilities were
    to design the company’s brand guidelines and to apply those guidelines across
    their public website and web application.`,

    `The branding included a new logo, color palette, typeface, and icon set. The logo,
    utilizing Proxima Nova, DocMatter’s principle typeface, stacks “Doc” atop “Matter”
    in a way to create a doctor icon in the center of the word mark. The color palette
    uses a combination of dark gray as the primary and dark red as the accent. Around
    20 unique medical related icons were created for added utility and visual identity.`,

    `To implement the guidelines, a DocMatter themed version of Bootstrap was used. This
    helped with consistency, reliability, and efficiency when building the front-end. Both
    the public website and web application are fully responsive. Finally, a style guide
    was created to communicate these guidelines internally.`
  ],
  'links': [{
    'text': 'View website',
    'url': 'https://www.docmatter.com'
  }],
  'tablet': {
    'url': require('../../routes/WorkDetail/assets/img/docmatter.png'),
    'alt': 'DocMatter public website landing page'
  },
  'images': [{
    'url': require('../../routes/WorkDetail/assets/img/docmatter1.png'),
    'alt': 'DocMatter public website homepage'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/docmatter2.png'),
    'alt': 'DocMatter public website about page'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/docmatter3.png'),
    'alt': 'DocMatter application login'
  }, {
    'url': require('../../routes/WorkDetail/assets/img/docmatter4.png'),
    'alt': 'DocMatter sign up page'
  }]
};

export default docmatter;
