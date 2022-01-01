import React from "react"

import codepen from "../images/codepen.svg" 
import linkedin from "../images/linkedin.svg" 


export default function Footer() {
    return <footer class="bg-alpha py-8">
        <ul className="flex justify-center space-x-8">
            <li>
                <a href="https://codepen.io/cjloff/" rel="noopener noreferrer" target="_blank">
                    <img className="w-12 h-12" src={codepen} alt="Codepen"></img>
                </a>
            </li>
            <li>
                <a  href="https://www.linkedin.com/in/chester-loffman-a4335138/" rel="noopener noreferrer" target="_blank">
                    <img className="w-12 h-12" src={linkedin} alt="Linkedin"></img>
                </a>
            </li>
        </ul>
    </footer>
}



