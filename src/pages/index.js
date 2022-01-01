import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Workflow from "../components/workflow"
import Intro from "../components/intro"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div class="font-body">
        <Seo title="Home" />
        <Intro />
        <div className="py-16 bg-charlie">
          <ol className="container max-w-screen-lg mx-auto px-4" style={{ listStyle: `none` }}>
            {posts.slice(0, 1).map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                  <Link to={post.fields.slug} itemProp="url" className="text-alpha group">
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2 class="text-center">
                          <span className="font-display block text-4xl mb-12 text-echo font-bold">Latest blog post</span>
                          <span className="text-center font-semibold text-2xl mb-4 block text-bravo underline decoration-bravo group-hover:text-delta group-hover:decoration-delta">{title}</span>
                        </h2>
                      </header>
                      <section>
                        <p className="text-center text-xl leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                  </Link>
              )
            })}
          </ol>  
        </div>

        <Workflow />
      </div>
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
