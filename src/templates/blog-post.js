import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="container max-w-screen-md mx-auto px-4 mb-8 mt-8"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="text-3xl font-display mb-8 text-echo text-center font-bold" itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav className="container max-w-screen-lg mx-auto px-4 mb-12">
        <ul className="flex justify-between space-x-12">
          <li>
            {previous && (
              <Link className="text-left text-bravo font-semibold underline decoration-bravo" to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className="text-right text-bravo font-semibold underline decoration-bravo" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
