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
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
