module.exports = {
  siteMetadata: {
    title: `Liz Shipton`,
    siteUrl: `https://lizshipton.com`,
    socialLinks:
      [
        {url: "https://tiktok.com/@lizshiptonauthor", color: 'pink'},
        {url: "https://facebook.com/lizshiptonauthor", color: 'aquamarine'},
        { url: "https://instagram.com/lizshiptonauthor", color: 'orange' },
        {url: "https://twitter.com/lizshipton", color: 'greenyellow'}
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
        icon: "src/images/compass_favicon.png",
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
