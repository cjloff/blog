import React from "react"
import "./hero.scss"
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby';

const Hero = ({ data }) => (
    <section class="hero">
        <div class="hero__frame">
            <StaticQuery
            query={graphql`
                query {
                    placeholderImage: file(relativePath: { eq: "images/thumbnail.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 160) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
            render={data => <Img className="hero__image" fluid={data.placeholderImage.childImageSharp.fluid} />}
        />
        </div>
        <h1 class="hero__title">I'm Chester, a Frontend developer.</h1>
        <p class="hero__description">
            I build responsive websites, enjoy problem solving and the world of frontend development.
        </p>
    </section>
)

export default Hero
