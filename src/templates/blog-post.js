import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {  const post = data.markdownRemark 
     return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title} / Blog / {post.frontmatter.title}</title>
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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