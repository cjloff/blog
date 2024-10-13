---
title: "Switching from BEM to Tailwind"
date: "2021-12-11"
---

Tailwind is a utility first framework for writing CSS, the framework offers a suite of utility classes to build applications and websites. A typical tailwind component may look like this:

```html
<button class="bg-blue p-4 text-white block rounded-md">
    Click me!
</button>
```

Essentially you build components utilizing existing utility classes rather than writing your own bespoke CSS.

In the past few years I had been using BEM methodology to write most of my CSS and it had been mostly working well, however I was noticing a few issues with it, namely:

- One of my main aims working at a agency is being able to easily share components across projects, this is difficult with BEM. Having to manually move the CSS file, HTML and import it into your CSS file can be cumbersome - especially when project specific mixins and variables are needed as well.
- It's difficult to tell what impact changing a existing BEM class will have, especially if you don't know how it's used which often leads to new classes being bolted on instead, which in turn increases the CSS file size.
- Due to BEM being descriptive it's difficult to come up with names for components / elements / modifiers, for example the following modifiers could all be used for a component that is promoted in some way: ```--is-featured```, ```--highlight```, ```--is-promoted```, ```--special```. 
- Even though BEM provides a methodology for writing CSS, it easy for inconsistencies to appear in the code e.g. using nested element selectors when really it should be split up into multiple BEM components: ```.block__element__element--modifier--modifier```

<h2>Comparing BEM v Tailwind</h2>

First of all, the best way to explore the differences is through writing a component:

**BEM Navigation Component**

```html
<ul class="nav">
  <li class="nav__item"><a class="nav__link nav__link--active" href="">Home<a></li>
  <li class="nav__item"><a class="nav__link" href="">About us<a></li>
  <li class="nav__item"><a class="nav__link" href="">Contact us<a></li>
</ul>
```

```scss
.nav {
  display: flex;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  justify-content: center;
  text-align: center;
  flex-flow: column;
  @media (min-width: 768px) {
      flex-flow: row;
  }
  &__item {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0px;
    }
  }
  &__link {
    text-decoration: none;
    color: #000;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    display: block;
    &:hover {
      font-weight: bold;
    }
    &--active {
      border-bottom: 1px solid #ccc;
    }
  }
}
```
<a href="https://codepen.io/cjloff/pen/MWEjRer" target="_blank">See BEM example</a>

**Tailwind Navigation Component**

```html
<ul class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 text-center text-2xl">
    <li>
        <a class="block p-4 hover:font-bold 
        {% if active %}border-b border-gray b-px{% endif%}" href="">Home<a>
    </li>
    <li>
        <a class="block p-4 hover:font-bold" href="">About us<a> 
    </li>
    <li>
        <a class="block p-4 hover:font-bold" href="">Contact us<a>
    </li>
</ul>
```
<a href="https://codepen.io/cjloff/pen/BawLbqa" target="_blank">See Tailwind example</a>

- While the BEM classes seem more aesthetic (to my eyes), they are specific to that component and it's difficult to share them across other similar components.
- On the other hand, the tailwind component is leveraging utility classes that will be re-used in other components.
- In the tailwind example I've created the component directly in the view using utility classes, whereas with BEM I've had to write the CSS separately. This means I do not have to swap between the CSS and view file while developing.

<h2>Is this just inline styles?</h2>

A common argument against Tailwind is that it's just inline styles in a different guise, however here are a few reasons that this isn't the case:

- Your utility classes are governed by a set of rules in your config that dictate the over-all look and feel of your website e.g. spacing, colours and so on. Inline styles won't do this.
- Provides a consistent and shared way of writing CSS by leveraging existing utility classes, inline styles would be wildly inconsistent if applied over a project.
- You can apply media query specific CSS, hover, focus states and more. This isn't possible with inline CSS.

<h2>Tailwind Benefits</h2>

- **Just in time CSS:** As part of the build process tailwind only generates the utility classes you've used in your HTML resulting in a small CSS output (by default in V3). I have noticed a 50% reduction in CSS file size compared to a BEM project that had similar features.
- **Config driven:** All tailwind projects are set up with a config file that allows the developer to control the project holistically e.g. spacing, colours, sizing, media queries. It's easy to change the look of the website by changing a few config values.
- **Sharing CSS across projects:** Easy to move a tailwind component to another tailwind project, it will then just inherit the look of the website via the config.
- **Utility first, not utility only:** Your not locked into just using utility classes - you can write bespoke CSS when needed.
- **Great documentation:** The documentation is very thorough, making it easy to learn and on-board new team members.
- **Readable:** It is easy to to review a tailwind component and figure out what it does by just reading the class names.
- **Working straight in the view/HTML:** As you will be mostly using existing utility classes you'll be working directly in the view rather than also working in a separate CSS file. Also, because you compose your classes directly in the HTML you can be sure changes you make only effect the current view you are working on.

<h2>Disadvantages</h2>

- Hard to find specific CSS via searching class names due to repeated utility class names.
- Non-semantic, this can be a deal breaker for some.
- Can become messy if your project is not split into components. BEM is probably better if this is the case.
- Beholden to Tailwind continuing to update the project.

<h2>Conclusion</h2>

Switching from BEM to tailwind was difficult especially as a developer that favoured writing bespoke CSS over utilizing frameworks however once I got over the initial aversion to the long string of class names in the HTML it  became a intuitive and effective way for me to build my components.





