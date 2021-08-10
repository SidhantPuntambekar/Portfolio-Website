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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://sidhantpuntambekar.surge.sh/",
        sitemap: "https://sidhantpuntambekar.surge.sh/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/", disallow: "/search" }],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/assets/` },
      icon: `static/images/gatsby-config.png`,
    },
  ],
}
