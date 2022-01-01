import React from "react"
import { Link } from "gatsby"

const navigation = () => {
    return (
        <nav>
            <ul class="flex">
                <li>
                    <Link to="/" activeClassName="border-bravo" className="p-4 text-white text-lg font-semibold  border-b-2">Home</Link>
                </li>
                <li>
                    <Link to="/blog" partiallyActive="true" activeClassName="border-bravo" className="p-4 text-white text-lg font-semibold  border-b-2">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default navigation