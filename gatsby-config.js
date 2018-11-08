module.exports = {
  siteMetadata: {
    title: 'Anggi Arlandi Priatmadi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'anggiarlandi',
        short_name: 'anggiarlandi',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
