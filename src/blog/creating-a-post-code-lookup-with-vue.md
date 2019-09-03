---
title: "Creating a postcode lookup with Vue.js"
date: "2019-08-28"
---

<h2>Introduction</h2>

For this tutorial we're going to create a postcode look-up component using Vue.js that will allow the user to:

- Enter a postcode and search for a postal address (we will be using https://getaddress.io/).
- If a match is found show a list of relevant addresses in a dropdown.
- When the user selects a dropdown value it will auto populate the address fields.

<h2>Setting up parent view</h2>

First off we're going to add a couple of address properties to the data object on the parent that will be updated when I use the postcode look-up component:

```js
data() {
  return {
    house: '',
    building: '',
    street: '',
    suburb: '',
    city: '',
  }
}        
```
We're also going to use <a href="https://vuejs.org/v2/guide/forms.html" target="_blank">v-model</a> on each one of the inputs in order to create a two way binding between the model above and the template below:

```js
<fieldset>
  <legend>Your address</legend>
  <div>
      <label for="house">House/Flat Number</label>
      <input id="house" v-model="house" placeholder="House/Flat Number">
  </div>
  <div>
      <label for="building">Building</label>
      <input id="building" v-model="building" placeholder="Building">
  </div>
  <div>
      <label for="street">Street</label>
      <input id="street" v-model="street" placeholder="Street">
  </div>
  <div>
      <label for="suburb">Suburb</label>
      <input id="suburb" v-model="suburb" placeholder="Suburb">
  </div>
  <div>
      <label for="city">City</label>
      <input id="city" v-model="city" placeholder="City">
  </div>
</fieldset>
```

Now that we have our parent view set up, it's time to set up our postcode look-up component.

<h2>Creating our PostCodeLookUp component</h2>
Next up we're going to create a component called PostCodeLookUp, on this view we are going to add a few reactive properties:

```js
    data() {
      return {
        isSearching: false,
        postcode: '',
        addressList: [],
        selectedAddress: '',
        postCodeSearched: false,
        noResults: false
      }
    }
```

- `postcode`: this is in order to keep track of the postcode that the user enters.
- `addressList`: an empty array, this will be populated with a list of addresses and displayed in the dropdown after the user has searched a valid postcode.
- `selectedAddress`: this will keep track of the the address that the user selects in the dropdown.
- `postCodeSearched`: this boolean is used to conditionally show the dropdown after the user has searched a postcode (initially set to false).
- `noResults`: boolean that will be used to show a error message if no results are returned from the api.

<h2>Creating the search</h2>
In terms of the template we are firstly going to create a text field bound to the postcode and a button that has a click event listener that fires off an addressLookUp function:

```js
    <fieldset>
        <legend>
          Address Lookup
        </legend>
        <div>
          <label for="postcodeLookup">Enter postcode</label>
          <input id="postcodeLookup" v-model="postcode" type="text" placeholder="Enter postcode">
          <button v-on:click="addressLookUp">Search Postcode</button>
        </div>
    </fieldset>
```
- Firstly, we are going to create a function called `addressLookUp` and add it the methods object within our component.
- Within this function we are going to use <a href="https://www.npmjs.com/package/axios" target="_blank">axios</a> (a promise based HTTP client - I am importing it directly into the component using es6 modules) to make a request from the getAddress api with our postcode model value passed in. 
- If there is a successful response we are going to bind our postcode list to the array of addresses returned from the response, and also set our postcodeSearched to true.
- If there are no results we will catch this error and return a message to the user.

```js
methods: {
      addressLookUp() {
        axios.get(`https://api.getAddress.io/find/${this.postcode}?api-key={api-key-here}`)
          .then(response => { 
                this.addressList = response.data.addresses
                this.postCodeSearched = true
                this.noResults = false
          })
          .catch(error => {
            this.noResults = true
            console.log(error);
          })
      }
}
```
**Note:** you will need to pass an <a href="https://getaddress.io/" target="_blank">api-key</a> into the URL above.

<h2>Displaying the results of the search</h2>

Now that we have a list of addresses returned, we need somewhere to display it:

```js
    <fieldset v-if="postCodeSearched">
      <legend>Select your address</legend>
      <select v-model="selectedAddress" v-on:change="emitAddress">
        <option value='' selected>Please select</option>
        <option :value="item" v-for="(item, index) in addressList" :key="index">{{item}}</option>
      </select>
    </fieldset>
    <p v-if="noResults">Sorry, we were unable to find that post-code</p>
```
Let's breakdown the above:

- We have set up a v-if and bound it to the postCodeSearched property, in the `addressLookUp` function we created above this will be set to true if a list of addresses is returned. 
- We have bound the select to `selectedAddress` so that we can keep track of the currently selected address.
- We have used the v-for directive to display the list of addresses returned from the `addressLookUp` function within our select.
- If there are no results we return a helpful message

Great, now we just need to update the address fields when the user selects an address in the dropdown. 

<h2>Updating the address fields on our parent view</h2>

In the component above you will notice that I have attached a `emitAddress` function to the on change event of the select. This will <a href="https://vuejs.org/v2/guide/components-custom-events.html" target="_blank">emit</a> the `selectedAddress` property to the parent view the component sits on:

```js
  emitAddress() {
      if(this.selectedAddress != '') {
          this.$emit('addressChanged', this.selectedAddress)
      }
  }
```
Now back on our parent view we want to firstly import our component:
```js
import PostCodeLookUp from './components/PostCodeLookUp'
```
And then register the component:
```js
  components: {
    PostCodeLookUp
  }
```
On the component itself we are going to capture our custom event (`addressChanged`) that we emitted in the previous step and call a function that will update our address:

```js
<post-code-look-up v-on:addressChanged="updateAddress"></post-code-look-up>
```

In terms of the function it will take the payLoad (in this case the `selectedAddress` from our component), splitting it and assigning parts of the address string to particular address fields:

```js
updateAddress(payLoad) {   
  let addressArray = payLoad.split(",")
  this.house = addressArray[0]
  this.building = addressArray[1]
  this.street = addressArray[2]
  this.suburb = addressArray[4]
  this.city = addressArray[5]
}
```

And there we have it, our component is now succesfully updating our address fields :)

<h2>Conclusion</h2>

We have succesfully created a post code look up component that utilizes several key Vue.js features including:

1) `v-model` to create two way binding for our address fields, postcode and selected address.
2) `v-if` directive to conditionally show particular parts of our template.
3) `v-for` directive for looping through our address list.
4) Setting up event listeners using `v-on:change` and `v-on:click` and calling custom functions.
5) Using axios to return data from an api endpoint.
6) Emitting custom events from child to parent.
7) Creating a isolated component that can be imported onto different parent views.

All code used in this tutorial can be found on this <a href="https://github.com/cjloff/vue-post-code-look-up" target="_blank">demo</a>.



