---
title: "Accessibility Tips"
date: "2020-04-11"
---

<p>As a frontend developer it is important to bake accessibility into your website projects from the get-go, here are some of the ways you can improve on accessibility without breaking the bank.</p>

<h2>Skip to Content</h2>

<p>Add a skip to content link to the top of your page to allow keyboard-only users to skip the main portion of the content on your page, this doesn’t have to be visually present on the page but can be brought into focus when the user is navigating through the page using the tab key:</p>

```scss
.navigate-to-content {
    clip: rect(0 0 0 0);
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
    &:focus {
        background-color: #fff;
        box-shadow: 0 0 8px 1px rgba(0,0,0,.35);
        font-weight: 700;
        color: red;
        display: block;
        font-size: 16px;
        left: 0px;
        padding: 20px;
        top: 0px;
        z-index: 999;
        clip: auto;
        width: auto;
        height: auto;
    }
}
```

<p>The above screen reader text will only show when the user navigates through the page using the tab key and will allow them to skip to the main content. You will then need to add the appropriate tag to your HTML (at the top of the body tag) and ensure your main content has the ID of 'page-content':

```html
<a href="#page-content" class="navigate-to-content">Skip to main content</a>
```

This is particularly useful when all the user wants to do is to skip to the main body of the page without navigating through all the links in the header.</p>

<h2>Screen Reader Only Text</h2>

<p>Screen readers such as JAWS give the user the ability to see a list of buttons, frames, links, graphics, etc, as such it is important to make sure that the naming of these elements makes sense outside of the context of where they are on the page.</p>

<p>For example, you may have a call to action component that has a standard blurb with a ‘Read More’ link, this link will be added to the list of elements and will not really make sense outside of the context of that component. Equally, you may be hesitant to extend the length of the link text which may impact negatively on the design, the solution to this is to use a screen reader only element:</p>

```css
.sr-only {
    border: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    color: #000;
}
```

This can be marked up in HTML as follows:

```html
<a href="">Read more <span class="sr-only">our latest news</span></a>
```

<p>The above code can be applied to any tag and will visually hide it but screen readers will still pick it up. Best of both worlds.</p>

<h2>Focus-Within Selector - a CSS solution to accessible navigation</h2>

<p>When a keyboard user is navigating through the page you will need to ensure that areas of the page are not mouse-dependent e.g. they can only be opened via hovering or clicking the mouse and can be opened using keys.</p>

<p>A common problem is keyboard users not being able to open second-level navigation menus that are hidden, usually, these would be revealed when the user hovers over the menu.</p>

Luckily recently a new pseudo-class called ```focus-within``` has been introduced to help with this, it allows for a parent element to be targeted when one of its child elements is focused, for example, if the user is focusing on one of the list elements within the hidden parent element you can show that parent element via CSS:

```css
ul:focus-within {
    display: block;
}
```
<p>This easily allows you to improve the accessibility of a menu without the need for any javascript.</p>

<h2>Aria Tags - Don’t overdo them</h2>

<p>In my last project, I was marking up a mega-menu navigation with all sorts of aria tags assuming this was making it more ‘accessible’, including tags such as:</p>

```role="menuitem"```
```role="menubar"```

<p>However, as it turns out these should not be used on navigation menus on websites, they are reserved for application menus - and you are signaling to the user that it should be treated as such. Also by using these tags, you are also telling the user that they should be able to navigate the menu using up and down keys, however, website navigation menus typically should be navigated using the tab key.</p>

<h3>Where is it acceptable to use aria tags on menus?</h3>

In my last project, I used to indicate the expanded state of a mobile menu, using ```aria-expanded``` I toggled the value dependent on if the menu was open or not, I also indicated there was a menu by using the ```aria-haspopup``` tag - I also ensured that the menu was the next element after the button in the markup order.

<h2>Alt Text - it’s fine to leave them empty!</h2>

<p>Alt-text is useful for describing images to users who are unable to see them, or for cases when the image doesn’t load.</p>

<p>It may be tempting to generate generic alt text for all images on the site, for example, you may be using a CMS such as Umbraco with a media library, each media item has a file name, you may reason that in your code if that the cms editor doesn’t explicitly set an alt text - fallback to the image name. Job done.</p>

<p>However, what if a few months later the CMS editor has become lazy and hasn’t thought about the names in the media library and suddenly across your website, you have alt text such as image.jpg, image2012-03-21.jpg, these obviously have no semantic meaning to anyone. It is far better to leave the alt text empty in these scenarios, as the screen reader will treat them as having no visual value.</p>

<p>This doesn’t mean you should never have alt text, but to only use alt text when it aids the understanding of the page, for example, a common design pattern is a card with an image and a caption below - there is no need to have that same caption repeated in the alt text of the image, in this case, leave the alt text empty.</p>

<h2>Conclusion</h2>

<p>This is by no means a exhaustive list, however these few tips will help on improving the accessiblity of your web projects.</p>

<h3>References:</h3>

<ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within">https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within</a></li>
    <li><a href="https://webaim.org/techniques/skipnav/">https://webaim.org/techniques/skipnav/</a></li>
    <li><a href="https://moz.com/learn/seo/alt-text/">https://moz.com/learn/seo/alt-text</a></li>
    <li><a href="https://webaim.org/techniques/css/invisiblecontent/">https://webaim.org/techniques/css/invisiblecontent/</a></li>
</ul>