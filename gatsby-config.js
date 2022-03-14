module.exports = {
  siteMetadata: {
    title: `Samaritan - Host a refugee/Ukrainian`,
    description: `Let humanitarian organizations know that you have some space available. How? By using the Samaritan app to connect with them!`,
    author: `@fean`,
    siteUrl: `https://samaritan-app.eur`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samaritan - Host a refugee`,
        short_name: `Samaritan`,
        start_url: `/`,
        background_color: `#003399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#003399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images/,
        },
      },
    },
  ],
}
