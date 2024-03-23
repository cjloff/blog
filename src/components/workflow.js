import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Workflow() {
     
     const data = useStaticQuery(graphql`
     query WorkflowQuery {
     site {
     siteMetadata {
          workflow {
               heading,
               subheading,
               description
          }
     }
     }
     }
     `)  

     const workflowItems = data.site.siteMetadata.workflow.map((item) => {
          return (
          <div class="mb-8 last:mb-0 md:mb-0 flex-1">
               <div>
                    <h2 className="mb-4 font-semibold text-center text-echo text-2xl">{item.heading}</h2>
                    <p class="text-center text-lg leading-relaxed">{item.description}</p>
               </div>
          </div>
          )
     }   
     );
    return (
     <section className="py-16">
          <div className="container max-w-screen-lg mx-auto px-4">
               <h2 className="text-center text-4xl mb-4 font-display text-echo font-bold">My workflow</h2>
               <p className="text-center mb-8 text-xl leading-relaxed">A little bit about my day-to-day workflow</p>
               <div className="flex-col md:flex-row flex justify-between md:space-x-8">
                    {workflowItems}
               </div>
          </div>
     </section>
     )
}

