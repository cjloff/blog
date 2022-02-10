/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { motion } from "framer-motion"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto px-4 text-center flex flex-col items-center">
        <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          type: "intertia",
          mass: 0.5,
          stiffness: 50,
          duration: 0.5
        }}
        className="rounded-full border-4 overflow-hidden  border-bravo shadow-xl -bottom-20 relative bg-white">
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
        </motion.div>
      </div>
    </div>
  )
}

export default Bio
