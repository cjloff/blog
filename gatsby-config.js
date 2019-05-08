module.exports = {
    siteMetadata: { title: `Chester's Portfolio`, },
    plugins: [
        {      
        resolve: `gatsby-source-filesystem`,      
        options: {        
          name: `src`,        
          path: `${__dirname}/src/`,      
        },    
      },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Chester's Portfolio",
          short_name: "chesters_portfolio",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          display: "standalone",
          icon: "src/images/chester.JPG", // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-react-helmet`,
      'gatsby-plugin-offline'
    ]
  }