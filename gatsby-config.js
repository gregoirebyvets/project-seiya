require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `ByVets`,
    description: `Logiciel Pegase, gestion informatique de cabinet vétérinaire`,
    author: `ByVets`,
    siteUrl: "https://dev.byvets.be/contacts",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
  ],
};
