module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Victoria Jimenez",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Titan One`,
          `Roboto`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "VictoriaId",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
