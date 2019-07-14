import React from "react"
import "./footer.scss"

import codepen from "../images/codepen.svg" 
import linkedin from "../images/linkedin.svg" 


export default () => (
    <footer class="site-footer">
        <ul class="site-footer__list">
            <li class="site-footer__item"><a class="site-footer__link" href="https://codepen.io/cjloff/" rel="noopener noreferrer" target="_blank"><img class="site-footer__image" src={codepen} alt="Codepen"></img></a></li>
            <li class="site-footer__item"><a class="site-footer__link" href="https://www.linkedin.com/in/chester-loffman-a4335138/" rel="noopener noreferrer" target="_blank"><img class="site-footer__image" src={linkedin} alt="Linkedin"></img></a></li>
        </ul>
    </footer>
)
