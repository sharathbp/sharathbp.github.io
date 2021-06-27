module.exports = {
  email: 'sharathbp@outlook.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sharathbp',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sharathbp',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sharathbp98',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sharath-bp',
    },
    {
      name: 'Hanker Earth',
      url: 'https://www.hackerearth.com/@sharathbp',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#experience',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
