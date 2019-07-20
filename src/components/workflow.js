import React from "react"
import "./workflow.scss"
import "./card.scss"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
     const data = useStaticQuery(graphql`
     {
       site {
          siteMetadata {
           workflow {
                heading,
                subheading,
                description
           }
         }
       }
     }`
     )  
     const workflowItems = data.site.siteMetadata.workflow.map((item) => {
          return (
          <div class="workflow__col">
               <div class="card card--top-border">
                    <h2 class="card__title">{item.heading}</h2>
                    <p class="card__description">{item.description}</p>
               </div>
          </div>
          )
     }   
     );
    return (
     <section class="workflow">
          <div class="workflow__container">
               <h2 class="workflow__title">My workflow</h2>
               <p class="workflow__summary">A little bit about my day-to-day workflow</p>
               <div class="workflow__sections">
                    {workflowItems}
               </div>
          </div>
     </section>
     )
}
