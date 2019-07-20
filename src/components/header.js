import React from "react"
import "./header.scss"
import { Link } from "gatsby"

export default () => {
    return (
        <header class="site-header">
            <Link to="/" className="site-header__heading"></Link>
        </header>
    )
}