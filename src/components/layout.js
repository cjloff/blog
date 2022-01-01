import * as React from "react"
import { Link } from "gatsby"
import Navigation from './navigation'
import Footer from './footer'
import Bio from "./bio"

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header
    let intro
  
      header = (
        <h1 className="main-heading">
          <Link className="text-2xl text-white border-b-2 border-bravo font-display font-bold" to="/">CL</Link>
        </h1>
      )
    if (isRootPath) {
      intro = (
        <div>
          <Bio />
        </div>
      )
    }
    else {
      intro = null
    }
  return (
    <div>     
      <header className="py-8 hero-bg">
        <div className="container max-w-screen-lg mx-auto px-4 flex justify-between">
          {header}
          <Navigation />
        </div>
        { intro }
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
