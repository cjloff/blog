import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "../components/hero.scss"
import "../components/page.scss"

export default ({ data }) => {  const post = data.markdownRemark 
     return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title} / Blog / {post.frontmatter.title}</title>
      </Helmet>
      <div>
        <div class="hero hero--slim">
          <h1 class="hero__title">{post.frontmatter.title}</h1>
        </div>
        <div class="page">
          <div class="page__container" dangerouslySetInnerHTML={{ __html: post.html }} /> 
        </div>
      </div>    
    </Layout>
  )
}

export const query = graphql `
query ($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}
`