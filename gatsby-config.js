module.exports = {
  siteMetadata: {
    title: `Liz Shipton`,
    siteUrl: `https://lizshipton.com`,
    socialLinks:
      [
        "https://tiktok.com/@lizshiptonauthor",
        "https://instagram.com/lizshiptonauthor",
        "https://facebook.com/lizshiptonauthor",
      ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-image",
      options: {
        quality: 100
      }
    },
        {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/compass_icon.png",
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        quality: 100,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
