module.exports = {
    siteMetadata: { 
      title: `Chester's Portfolio`, 
      workflow: [
        {heading: 'Frontend', subheading: 'My frontend workflow', description: 'In my day-to-day role I work with HTML, Sass (BEM), Javascript (ES6) and Vue.js. I use webpack and gulp as my build tools. VS code is my code editor of choice.'},
        {heading: 'CMS + Static Sites', subheading: 'Umbraco', description: 'I\'m a certified Umbraco Developer and have worked on numerous end-to-end Umbraco builds. I also have experience with static site generators (this blog was developed using Gatsby).'},
        {heading: 'Methodology', subheading: 'My approach to development', description: 'I\'m a big advocate of a modular approach to web development by breaking down layouts into composable components through the use of pattern libraries.'},
      ]
    },
    plugins: [
        {      
        resolve: `gatsby-source-filesystem`,      
        options: {        
          name: `src`,        
          path: `${__dirname}/src/`,      
        }  
      },
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
          short_name: "Chester's Portfolio",
          start_url: "/",
          background_color: "#045666",
          theme_color: "#045666",
          display: "standalone",
          icon: "src/images/thumbnail.jpg", // This path is relative to the root of the site.
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (eg <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (eg for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: "language-",
                // This is used to allow setting a language for inline code
                // (i.e. single backticks) by creating a separator.
                // This separator is a string and will do no white-space
                // stripping.
                // A suggested value for English speakers is the non-ascii
                // character '›'.
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
                // This toggles the display of line numbers globally alongside the code.
                // To use it, add the following line in src/layouts/index.js
                // right after importing the prism color scheme:
                //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                // Defaults to false.
                // If you wish to only show line numbers on certain code blocks,
                // leave false and use the {numberLines: true} syntax below
                showLineNumbers: true,
                // If setting this to true, the parser won't handle and highlight inline
                // code used in markdown i.e. single backtick code like `this`.
                noInlineHighlight: false,
                // This adds a new language definition to Prism or extend an already
                // existing language definition. More details on this option can be
                // found under the header "Add new language definition or extend an
                // existing language" below.
                languageExtensions: [
                  {
                    language: "superscript",
                    extend: "javascript",
                    definition: {
                      superscript_types: /(SuperType)/,
                    },
                    insertBefore: {
                      function: {
                        superscript_keywords: /(superif|superelse)/,
                      },
                    },
                  },
                ],
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590,
              },
            }
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      'gatsby-plugin-offline',
      `gatsby-plugin-sharp`
      ]
  }