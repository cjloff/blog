import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title} / Blog</title>
      </Helmet>
      <div>
        <h1 css={css`display: inline-block; border-bottom: 1px solid;`}>
          My Blog Posts
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={css`text-decoration: none;color: inherit;`}>
            <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
              {node.frontmatter.title}{" "}
              <span css={css`color: #bbb;`}>
                — {node.frontmatter.date}
              </span>
            </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql `
{
  site {
    siteMetadata {
      title
    }
  }
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
        excerpt
      }
    }
  }
}
`