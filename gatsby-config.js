const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Leon Delaimy",
    description: "Leon Delaimy: software engineer.",
    siteUrl: "https://leondelaimy.com", // No trailing slash allowed!
    image: "", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/me.jpg",
      },
    },
    "gatsby-plugin-mdx",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@images": path.resolve(__dirname, "src/images"),
          "@pages": path.resolve(__dirname, "src/pages"),
        },
      },
    },
  ],
};
