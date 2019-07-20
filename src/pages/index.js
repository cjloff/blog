import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Introduction from "../components/introduction"
import Quote from "../components/quote"
import Workflow from "../components/workflow"
import { Helmet } from "react-helmet"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title} / Home</title>
    </Helmet>
    <Header></Header>
    <Hero></Hero>
    <Introduction></Introduction>
    <Quote></Quote>
    <Workflow></Workflow>
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