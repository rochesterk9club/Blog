module.exports = {
  siteMetadata: {
    title: 'Rochester K9 Club',
    description:
      'Blog site for RochesterK9Club.com built with Gatsby, and Netlify CMS. It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-use-dark-mode',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rochester K9 Club Web App",
        short_name: "Rochester K9 Club",
        start_url: "/",
        background_color: "#44a1c2",
        theme_color: "#44a1c2",
        display: "standalone",
        icon: "src/img/Rochester K9 Club LogoWhite.png",
        crossOrigin: `use-credentials`,
        gcm_sender_id: "146740187852"
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/custom-swrk.js`),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCNmjO3ZqSo_0g0vzaM1hEjPa-EX7KE0G8",
          authDomain: "rochesterk9club.firebaseapp.com",
          databaseURL: "https://rochesterk9club.firebaseio.com",
          projectId: "rochesterk9club",
          storageBucket: "rochesterk9club.appspot.com",
          messagingSenderId: "146740187852",
          appId: "1:146740187852:web:20720c21dff3cf15"
        }
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
