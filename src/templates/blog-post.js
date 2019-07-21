import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
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
          <div class="hero__container">
            <h1 class="hero__title">{post.frontmatter.title}</h1>
          </div>
        </div>
        <div class="page">
          <div class="page__container page__container--slim">
            <div class="page__post" dangerouslySetInnerHTML={{__html: post.html }} />
            <Link to="/blog" class="page__link">Back to Blog List</Link>
          </div> 
          
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