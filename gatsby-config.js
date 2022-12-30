module.exports = {
  siteMetadata: {
    title: `Liz Shipton`,
    siteUrl: `https://lizshipton.com`,
    socialLinks:
      [
        {url: "https://tiktok.com/@lizshiptonauthor", color: 'hotpink'},
        {url: "https://facebook.com/lizshiptonauthor", color: 'darkturquoise'},
        {url: "https://instagram.com/sv_loki", color: 'orange' },
        {url: "https://www.goodreads.com/user/show/154243248-liz-shipton", color: 'lime'}
      ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/compass_favicon.png",
      }
    },
    {
      resolve: "gatsby-plugin-image",
      options: {
        quality: 100
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
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
