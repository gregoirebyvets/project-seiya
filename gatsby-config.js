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
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
        duration: 500,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `poppins\:200,300,300i,500,400,600,600i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
