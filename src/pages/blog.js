import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "../components/hero.scss"
import "../components/card.scss"
import "../components/page.scss"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title} / Blog</title>
      </Helmet>
      <div>
        <section class="hero hero--slim">
            <h1 class="hero__title">My Blog</h1>
            <p class="hero__description">Musings on frontend development...</p>
        </section>
        <div class="page">
          <div class="page__container page__container--slim">
            <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link to={node.fields.slug} className="card card--margin card--left-border" key={node.id}>
                  <h2 class="card__title">
                    {node.frontmatter.title}{" "}
                  </h2>
                  <p class="card__description">{node.excerpt}</p>
                </Link>
            ))}
          </div>
        </div>
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