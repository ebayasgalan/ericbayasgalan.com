module.exports = {
  siteTitle: 'Eric Bayasgalan | Software Engineer',
  siteDescription:
    'Eric Bayasgalan is a software engineer based in San Francisco, CA who specializes in developing high-quality websites and applications.',
  siteKeywords:
    'Eric Bayasgalan, ebayasgalan, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://ericbayasgalan.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '#',
  googleVerification: '#',
  name: 'Eric Bayasgalan',
  location: 'San Francisco, CA',
  email: 'eric.bayasgalan@protonmail.com',
  github: 'https://github.com/ebayasgalan',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ebayasgalan'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/enkhtaivan-bayasgalan-849824149/'
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ebayasgalan'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eb_zone/'
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: 'about'
    },
    // {
    //   name: 'Experience',
    //   url: 'jobs'
    // },
    {
      name: 'Work',
      url: 'projects'
    },
    {
      name: 'Contact',
      url: 'contact'
    }
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  })
};
