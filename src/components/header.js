import React from "react"
import "./header.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }`
    )  
    return (
        <header class="site-header">
            <Link to="/contact/" class="site-header__heading">{data.site.siteMetadata.title}</Link>
        </header>
    )
}