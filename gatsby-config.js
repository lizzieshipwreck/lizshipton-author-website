module.exports = {
  siteMetadata: {
    title: `Liz Shipton`,
    siteUrl: `https://lizshipton.com`,
    socialLinks:
      [
        {url: "https://discord.gg/peyvVKGNZT", name: 'discord'},
        {url: "https://tiktok.com/@lizshiptonauthor", name: 'tiktok'},
        {url: "https://facebook.com/lizshiptonauthor", name: 'facebook'},
        {url: "https://instagram.com/lizshiptonauthor", name: 'instagram'},
        {url: "https://www.goodreads.com/user/show/154243248-liz-shipton", name: 'goodreads'},
        {url: "https://threads.net/@lizshiptonauthor", name: 'threads'},
        {url: "https://reamstories.com/page/lekik90zu2", name: 'ream'}
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
    "gatsby-plugin-fontawesome-css"
  ],
}
