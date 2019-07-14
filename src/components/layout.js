import React from "react"
import "./layout.scss"
import Footer from "../components/footer"
import Header from "../components/header"

export default ({ children }) => {
  return (
    <main>
      <div class="l-container">
        <Header></Header>
        {children}
      </div>
      <Footer></Footer>
    </main>  
  )
}