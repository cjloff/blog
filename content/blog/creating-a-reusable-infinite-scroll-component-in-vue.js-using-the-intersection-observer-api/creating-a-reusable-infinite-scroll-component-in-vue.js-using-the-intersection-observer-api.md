---
title: "Creating a reusable infinite scroll component in Vue.js using the Intersection Observer API"
date: "2021-03-21"
---

<h2>Introduction</h2>

The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a> allows us to asynchronously detect when an element is within the viewport. Using this API, we can set up an observer and register a callback function that is executed whenever a specified element enters or exits the viewport. This is more efficient than using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event">window scroll</a> events and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect">getBoundingClientRect</a> to detect an elements position which can be costly performance wise (even with a debounce implemented).

In this blog post, I am going to utilize the Intersection Observer API to create a re-usable infinite scroll component in Vue.Js, whereby as the user scrolls to the bottom of the component more content is automatically added. Specifically, I will utilize this component to infinitely load a list of cards.

<h2>Setting up the Infinite Scroll Component</h2>

First up, I am creating a component called InfiniteScroll.Vue. In my data object I am setting up a variable to hold my observer, this is so I can reference it later on:

```js
data:function() {
    return {
        observer: null
    }
}
```

On mounted, I am instantiating a new IntersectionObserver and assigning it to the observer variable I've created in our data object. Within the IntersectionObserver callback I am checking if I've intersected with a target element and if so <a href="https://vuejs.org/v2/guide/components-custom-events.html">emitting</a> a ```update``` event to the parent component:

```js
mounted() {
    this.observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            this.$emit('update')
        }
    })
    this.observer.observe(this.$refs.trigger);
}
```

Furthermore, I am setting up a target element to be watched by our ```IntersectionObserver``` using the ```observe()``` method. The target element itself will be within our template, and I will use <a href="https://v3.vuejs.org/guide/component-template-refs.html">refs</a> attribute in order to target it:

```js
<template>
    <section>
        <slot />
        <div ref="trigger" style="height: 1px"></div>
    </section>
</template>
```

As the user scrolls down and intersects with the trigger element our callback function will be called. You will also notice I have added ```<slot />``` element above the trigger element, this will alow us to firstly add initial content and then push new content to this area every time the user intersects with the trigger element (the trigger element will move down the page as more content is added). Also, I am allowing two props to be passed down:

```js
props: {
    currentIndex: {
        type: Number,
        required: true
    },
    lastIndex: {
        type: Number,
        required: true
    }
}
```

By passing these props down I will be able to check if we are at the last index (the end of the data we are infinitely loading) and if so disable the watching of our trigger element using the ```unobserve``` method:

```js
watch: {
  currentIndex(value) {
      if(value === this.lastIndex) {
          this.observer.unobserve(this.$refs.trigger);
      }
  }
}
```

<h2>Using the Infinite Scroll Component</h2>

Now, let's utilise our Infinite Scroll component on an example that shows and infinitely loads a list of cards. Firstly, I've created a parent component (App.vue) and in my data object I am setting up a variable to store my list, my current page and last page:

```js
data: function() {
  return {
      list: [],
      currentPage: 0,
      lastPage: 0,
  }
}
```
I've also set up some stub data in an external js file to use for our list (this could be from an external API for example however I am keeping all the data local for this demo):

```js
const data = {
    items: [
        [1,2,3,4,5,6,7,8,9],
        [10,11,12,13,14,15,16,17,18],
        [19,20,21,22,23,24,25,26,27],
      ]
}
export default data
```
...and importing it at the top of App.vue:

```
import Data from './Data/data.js'
```

In my methods I've created an initializer to assign the first set of data to our list, set the current page to 0 and worked out our last page based on our imported data's length:

```js
setUpInitialData() {
    this.list = Data.items[0]
    this.currentPage = 0
    this.lastPage = Data.items.length - 1
}
```
I also need to call this on mounted:

```js
mounted() {
  this.setUpInitialData()
}
```

I've also set up a method to increment the current page and push new data to our list (I am using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread</a> as this will flatten the array as it's pushed in):

```js
loadMoreData() {
    if(this.currentPage < this.lastPage) {
      this.currentPage++
      this.list.push(...Data.items[this.currentPage])
    }
}
```

Next up, I need to import our Infinite Scroll component: (I've also added a card component that we will use for our cards - I won't show it here but will be available in the GitHub demo at the end of the tutorial):

```js
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll.vue'
import Card from './components/Card/Card.vue'
```

...and registered them:

```js
components: {
  InfiniteScroll,
  Card
}
```

Finally, all that is left to do is set up our template:

```js
<template>
  <div id="app">
    <InfiniteScroll class="infinite-scroll-container" :current-index="currentPage" :last-index="lastPage" @update="loadMoreData">
        <transition-group name="list" class="grid-container">
          <Card v-for="item in list" :item="item" :key="item"></Card>
        </transition-group>
    </InfiniteScroll>
  </div>
</template>
```

Let's break this down:

- I am using a v-for directive to display our list of cards and adding this between the opening and closing tag of our InfiniteScroll component, this will insert the content in the ```<slot />``` area of this component which we set up earlier.
- I'm also wrapping the v-for loop into a transition group to add a fade animation as more data gets added to our list.
- I am listening for the ```@update``` method that is emitted from the InfiniteScroll component (which is triggered every time the user intersects with our trigger element), if this is emitted the parent component will run the method ```loadMoreData``` that incrementally pushes more data to the list.
- The trigger element will move down the page as more items are added to our list and the ```loadMoreData``` method be called every time the user intersects with it.
- I am also passing in the current page and last page (via ```:current-index``` and ```:last-index``` props) into the InfintiteScroll component so that we can unobserve the trigger element when we've reached the end of the list.

<h2>Summing Up</h2>

I have created a generic and re-usable infinite scroll component in Vue.js using the Intersection Observer API, here's a link to the demo:

https://github.com/cjloff/vue-infinite-scroll

