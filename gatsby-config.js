module.exports = {
  siteMetadata: {
    title: `Liz Shipton`,
    siteUrl: `https://lizshipton.com`,
    socialLinks:
      [
        {url: "https://tiktok.com/@lizshiptonauthor", color: 'darkgray'},
        {url: "https://facebook.com/lizshiptonauthor", color: 'darkgray'},
        {url: "https://instagram.com/lizshiptonauthor", color: 'darkgray' },
        // {url: "https://discord.gg/peyvVKGNZT", color: 'darkgray'},
        {url: "https://www.goodreads.com/user/show/154243248-liz-shipton", color: 'darkgray'}
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
