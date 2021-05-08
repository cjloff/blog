---
title: "Transpiling javascript and including polyfills with webpack, babel-preset-env and core-js"
date: "2021-03-18"
---

I am going to use <a href="https://babeljs.io/docs/en/babel-preset-env">babel-preset-env</a> to transpile our JS from ES6 to ES5 and core-js (a library of polyfills) to include the polyfills needed for your application.


You may be used to including polyfills like so at the top of your entry file:

```js
import("babel-polyfill");
```

This will bring in a range of polyfills allowing you to use ES6 features and more in older browsers. However, the main issue is that this is a brute force approach and may bring in polyfills that are unneeded for your application and ultimately bloat your javascript bundle (the package itself has also been deprecated). Instead, in this tutorial we will utilize <a href="https://github.com/zloirock/core-js">core-js</a> to bring in polyfills based on your browser support.

<h2>Some definitions...</h2>

Before we continue let's clarify what we mean by polyfills and transpiling.

Polyfills provide specific functionality that you would expect the browser (API) to natively have, for example <a href="https://caniuse.com/promises">IE11 does not have promises</a> so you may include a polyfill that emulates this functionality. 

On the other hand, transpiling will transform your code to work in a particular target environment, for example if you wanted to use arrow functions (ES6 syntax) in your code but wanted to support IE11 you would need to transform it into ES5 compatible code that the browser understands. 


<h2>Setup</h2>

Install the following packages into your application:

```cmd
npm install --save-dev babel-loader @babel/core @babel/preset-env core-js

```

Next up let's add a babel-loader rule within our webpack config, and add babel-preset-env to our presets:

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

Next up, let's set which browsers we want to support in our package.json (babel-preset-env will use this to determine if it should transpile your code and which polyfills to add), you may already have this if you are using packages such as autoprefixer that also utilizes the ```browserslist``` property: 

```json
"browserslist": [
    "defaults"
]
```

Be careful you only add browsers here which you need to support otherwise you may end up unnecessarily bloating your application's JS bundle. For example, if you don't want to support IE11, add "not IE 11". 

With this setup your code will now be transpiled from ES6 to ES5 (dependent on your browserlist), next up let's look at both options for including polyfills with core-js. 

<h2>Option 1: Entry point</h2>

The first option is to to bring all the polyfills in at entry:

```js
{
  loader: 'babel-loader',
  options: {
      presets: ['@babel/preset-env'],
      useBuiltIns: "entry",
      corejs: 3
  }
}
```

We will also need to add the following at the JS entry point of our application:

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

This will bring in polyfills according to your ```browserslist``` at the top of this file.  

<h2>Option 2: Usage</h2>

We also have the option to bring the polyfills based on usage, meaning we do not bring in polyfills that are not needed by our application:

```js
{
  loader: 'babel-loader',
  options: {
      presets: ['@babel/preset-env'],
      useBuiltIns: "usage",
      corejs: 3
  }
}
```

We do not to add the imports at the entry file as babel-preset-env will include polyfills by scanning your JS files and determining which features need a polyfill (according to your ```browserslist```). 

For example, if you have set your ```browserslist``` to support IE11 and you use ```forEach``` on a ```nodeList``` (which does not work in IE11) within your code ```babel-preset-env``` will add a polyfill to support this (this isn't a ES6 feature but core-js also has a polyfill for this).

Additionally, you can add ```debug: true``` to the options to see the JS files that have required  polyfills (this is displayed within the terminal).

<h2>Summing up</h2>

Within webpack's babel-loader we have setup babel-preset-env to transpile code to ES5 and we have seen two different ways of including polyfills via core-js in your application. The main benefit of both is is that when you update your ```browserslist``` it will also update which code is transpiled and what polyfills are added (making it easier to drop support of older browsers, and reduce your JS bundle size as a result).












