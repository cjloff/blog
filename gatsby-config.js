module.exports = {
  siteMetadata: {
    title: `Chester Loffman`,
    author: {
      name: `Chester Loffman`,
      summary: `I'm Chester Loffman, a creative and self-motivated frontend developer with 10 years of experience building websites and applications in fast-paced collaborative environments. Seasoned in CSS, HTML, Javascript and Umbraco integrations. I also enjoy keeping up to date with the latest technologies and techniques in the ever-moving landscape of frontend development.`,
    },
    description: `Chester Loffman`,
    siteUrl: `http://www.chesterloffman.co.uk`,
    social: {
      twitter: `chesterloffman`,
    },
    workflow: [
      {heading: 'Frontend', subheading: 'My frontend workflow', description: 'In my day-to-day role I work with HTML, CSS, Javascript (ES6) and Vue.js (Vue 3/Nuxt).'},
      {heading: 'CMS', subheading: 'Umbraco', description: 'I\'m a Umbraco Certified Professional and have worked on numerous end-to-end Umbraco builds.'},
      {heading: 'Methodology', subheading: 'My approach to development', description: 'I\'m a big advocate of a modular approach to web development by breaking down layouts into composable components through the use of pattern libraries.'},
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Chester Loffman Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chester's Blog`,
        short_name: `ChestersBlog`,
        start_url: `/`,
        background_color: `#191919`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/thumbnail.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
