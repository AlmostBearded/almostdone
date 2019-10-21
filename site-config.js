const path = require('path');

module.exports = {
  siteTitle: 'AlmostDone',
  siteTitleShort: 'AlmostDone',
  siteDescription: 'A minimalistic task management application.',
  siteUrl: 'https://almostdone2.netlify.com',
  themeColor: '#000',
  backgroundColor: '#fff',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: 'almostbearded',
    fbAppId: '0000000000000', // <-- not a real app id
  },
};
