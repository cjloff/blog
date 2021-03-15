import React from "react"
import "./quote.scss"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
    <section class="quote">
        <div class="quote__container">
        <StaticQuery
            query={graphql`
                query BlogQuery {
                    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                        totalCount
                        edges {
                          node {
                            id
                            frontmatter {
                              title
                              date(formatString: "DD MMMM, YYYY")
                            }
                            fields {
                              slug
                            }
                            excerpt(pruneLength: 300)
                          }
                        }
                      }
                }
            `}
            render={data => {
                const latestBlogPost = data.allMarkdownRemark.edges[0].node
                return(<div>
                    <h2 class="quote__author">Latest Blog Post</h2>
                    <div class="quote__main">
                        <Link to={latestBlogPost.fields.slug} key={latestBlogPost.id}>
                            <h3 class="quote__sub">{latestBlogPost.frontmatter.title}{" "}</h3>
                            <p class="quote__text">{latestBlogPost.excerpt}</p>
                        </Link>
                    </div>
                </div>)
            }}
            />
    
        </div>
    </section>
)
