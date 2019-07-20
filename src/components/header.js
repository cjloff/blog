import React from "react"
import "./header.scss"
import "./site-navigation.scss"
import { Link } from "gatsby"

export default () => {
    return (
        <header class="site-header">
            <div class="site-header__container">
                <nav class="site-navigation">
                    <ul class="site-navigation__list">
                        <li class="site-navigation__item">
                            <Link to="/" activeClassName="site-navigation__link--is-active" className="site-navigation__link">Home</Link>
                        </li>
                        <li class="site-navigation__item">
                            <Link to="/blog" partiallyActive="true" activeClassName="site-navigation__link--is-active" className="site-navigation__link">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}