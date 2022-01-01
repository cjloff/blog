/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto px-4 text-center flex flex-col items-center">
        <div className="rounded-full border-4 overflow-hidden  border-bravo shadow-xl -bottom-20 relative bg-white">
          <StaticImage
            className=""
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/thumbnail.jpg"
            width={180}
            height={180}
            quality={95}
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  )
}

export default Bio
