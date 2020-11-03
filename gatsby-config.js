const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Birdie',
    description: 'Birdie Test',
    author: 'Darren Corbett',
  },
  plugins: [
    'gatsby-env-variables',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        models: path.join(__dirname, 'src/models'),
        state: path.join(__dirname, 'src/state'),
        theme: path.join(__dirname, 'src/theme'),
        contexts: path.join(__dirname, 'src/contexts'),
        views: path.join(__dirname, 'src/views'),
      },
    },
  ],
};
