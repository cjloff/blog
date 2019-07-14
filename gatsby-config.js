module.exports = {
    siteMetadata: { 
      title: `Chester's Portfolio`, 
      workflow: [
        {heading: 'Front-end', subheading: 'My front-end workflow', description: 'In my day-to-day role I work with HTML, SASS (BEM), Javascript (ES6) and Vue.js. I use webpack and gulp as my build tools. VS code is my code editor of choice.'},
        {heading: 'CMS', subheading: 'Umbraco', description: 'I enjoy working with Umbraco because of its community, great UI and overall flexibility. I\'m experienced in end-to-end Umbraco (6+) builds and MVC pattern'},
        {heading: 'Front-end', subheading: 'My front-end workflow', description: 'I\'m a big advocate of a modular approach to web development. I enjoy the fast-paced environment of front-end as there is always new things to learn.'},
      ]
    },
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