import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Blog" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <div className="container max-w-screen-lg mx-auto px-4 mt-16 mb-16">
      <h1 className="text-4xl font-display mb-12 text-echo text-center font-bold" itemProp="headline">Blog Posts</h1>
      <ol className="grid md:grid-cols-3 md:gap-12" style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url" className="group">
                <article
                  className="mb-4 md:mb-0"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 className="text-2xl font-semibold mb-2 text-bravo group-hover:text-delta group-hover:decoration-delta underline decoration-bravo">
                      
                        <span itemProp="headline">{title}</span>
                    
                    </h2>
                  </header>
                  <section>
                    <p className="text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </Link>
            </li>
          )
        })}
      </ol>
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
