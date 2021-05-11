module.exports = {
  siteMetadata: {
    siteTitle: `Algo-DS Documentation`,
    defaultTitle: `Algo & DS docs`,
    siteTitleShort: `AlgoDS`,
    siteDescription: `Get your algo-rhythm on with non-stop classic computer science hits... all documented for your viewing pleasure.`,
    siteUrl: `https://algods.gatsbyjs.io`,
    siteAuthor: `William Wilder`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    // themeColor: `#8257E6`, // TODO
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/WilderDev/Algo-DS_docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Algo-DS Documentation`,
        short_name: `AlgoDS`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://algods.gatsbyjs.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
