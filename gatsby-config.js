module.exports = {
  siteMetadata: {
    title: "Portfolio Gatsby",
    titleTemplate: "%s . The Real Intro",
    description: "Software Engineer with 1.5 yr of Experience",
    url: "https://www.sharathbp.ml",
    image: "/images/icon.png",
    twitterUsername: "@sharathbp98"
  },
  pathPrefix: "/sharathbp",
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `${__dirname}/src/content/experience`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/content/about`,
      }
    }
  ],
};
