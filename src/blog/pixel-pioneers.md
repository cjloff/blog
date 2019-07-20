---
title: "Pixel Pioneers"
date: "2019-08-20"
---

Last month I attended <a href="https://pixelpioneers.co/" target="_blank">Pixel Pioneers</a> at the MShed in Bristol (the city I live in), a one day conference of design and frontend talks. This was my first time attending a frontend focused conference and it didn't disappoint, here are some of my highlights.

<h2>Rachel Adam: Grids all the way down</h2>

Rachel gave a fascinating talk on the ```sub-grid```, an upcoming feature in Level 2 of the CSS grid layout specification. In short,  when using ```display: grid``` only direct children are placed on the layout grid, and the child elements remain in the normal flow. You can nest grids on the child elements but they have no relationship with the parent grid. Step in ```subgrid```, when using this value on ```grid-template-columns``` or ```grid-template-rows``` the element inherits the grid tracks of the parent. 

This would be great for simple layout composition such as matching the height of a caption within sibling child element by using the parent's grid track rather than manually setting a height or using javascript. The only downside is that the browser support is pretty <a href="https://caniuse.com/#feat=css-subgrid)" target="_blank">non-existent</a> for now, still one to watch and you can play around with it on firefox nightly.

<h2>Lisi Linhart: Practical Web Animation</h2>

Lisi gave a captivating presentation (with impressive illustrations to boot!) focusing on CSS animations, using the Web Animations API and making animations more performant. Animations are something I use on a regular basis at work, however some of the examples were on another level, with Lisa even creating a animated card for the <a href="https://codepen.io/lisilinhart/pen/oROmWB" target="_blank">pixel pioneers conference</a> 🤯. 

My main takeaways are that animating particular properties can be more taxing on the browser e.g. animating using ```left```, or ```margin-left``` properties causes a complete re-paint of the page whereas animating using ```transform``` is more performant as it creates a new animation plane/layer. 

<h2>Phil Hawksworth: JamStack</h2>

My inspiration for using Gatsby and Netlifly for my portfolio/blog was taken from this talk. Phil went through the basics of JamStack (JAM standing for Javascript, API and Markup), the philosophy behind it, how it uses no web servers (and the obvious security benefits of this) and pre-built HTML/assets. He even showed how easy it is to continuously deploy JamStack sites through Netlify by deploying an older snapshot of his own blog from a couple of years ago.

I was quite surprised to see the performance benefits of JamStack sites which serve pre-built HTML over traditional CMS-based solution which have to send off a request to a webserver. Also the added benefit of decoupling the frontend from the backend, this means the responsibilities of managing content (the CMS) and displaying it (the frontend) are separated within the JamStack workflow.

<h2>In closing</h2>

I had a great time at pixel pioneers and hope to attend next year. There were other illuminating talks not covered here but luckily for you they were all filmed and are available to view online on <a href="https://www.youtube.com/playlist?list=PLUjXef3rLwaqP_h0htsP-m1r5JqNBBEIM
" target="_blank">youtube</a>.


