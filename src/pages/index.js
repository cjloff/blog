import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title} / Home</title>
    </Helmet>
    <h1>Welcome to my site :)</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit quis quam id faucibus. Maecenas ut libero velit. Sed orci dolor, ultrices eget ex nec, tincidunt finibus sapien. 
    </p>
  </Layout>
)

export const query = graphql `
{
  site {
    siteMetadata {
      title
    }
  }
}
`