module.exports = {
  siteMetadata: {
    title: `Peter Brandon Hanley`,
    siteUrl: `https://mrpeterhanley.com/`,
    description: `Hi! I'm a front-end developer from Melbourne, Australia.`,
    twitter: `@peterbrandon`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'mrpeterhanley.com',
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-177313332-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
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
