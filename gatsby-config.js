/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "https://sidhantpuntambekar.surge.sh/",
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/assets/` },
      icon: `static/images/gatsby-config.png`,
    },
  ],
}
