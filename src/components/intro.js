import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Intro = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
        site {
            siteMetadata {
            author {
                summary
            }
        }
        }
        }
    `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author

    return (
        <div class="py-16">
            <div className="container max-w-screen-lg mx-auto px-4 text-center">
                <h2 className="font-display text-4xl text-echo mb-8 font-bold">About me</h2>
                <p className="text-xl leading-relaxed">{author?.summary || null}</p>
            </div>
        </div>
    )
}

export default Intro