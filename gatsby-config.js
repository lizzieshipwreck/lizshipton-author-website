module.exports = {
  siteMetadata: {
    title: `Liz Shipton`,
    siteUrl: `https://lizshipton.com`,
    socialLinks:
      [
        {url: "https://instagram.com/lizshipton", name: 'instagram'},
        {url: "https://tiktok.com/@lizshipton", name: 'tiktok'},
        {url: "https://facebook.com/lizshiptonauthor", name: 'facebook'},
        {url: "https://www.goodreads.com/user/show/154243248-liz-shipton", name: 'goodreads'},
        {url: "https://threads.net/@lizshiptonauthor", name: 'threads'},
        {url: "https://discord.gg/peyvVKGNZT", name: 'discord'},
        {url: "https://twitter.com/lizshipton", name: 'x'}
      ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/compass favicon.png",
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
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-netlify"
  ],
}
