# pantry-node
Use this helper library to interact with the [Pantry][pantrypath] JSON storage API. The documentation for the Pantry API can be found [here][apidocs].

## Installation
The easiest way to install pantry-node is from [NPM][npmlink]. You can run the command
below from your project directory to install the library:

```
npm install pantry-node
```

Then in your code:

```javascript
const pantry = require('pantry-node')
```

## Testing your Installation
Try creating a new basket in your pantry, like this:

```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" // Your unique PantryID
const pantryClient = new pantry(pantryID)

// The payload that you want your basket to have
const payload = {
  pending: [],
  complete: []
}

pantryClient.basket
  .create('ToDoList', payload)
  .then((response) => console.log(response))
```

## Modifying Baskets

### Retrieve Basket Contents
```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx"
const pantryClient = new pantry(pantryID)
const options = { parseJSON: true } // optional

pantryClient.basket
  .get('ToDoList', options)
  .then((contents) => console.log(contents))
```

### Update Basket Contents
```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx"
const pantryClient = new pantry(pantryID)
const options = { parseJSON: true } // optional

// The new payload that you want your basket to have
const payload = {
  pending: ["Walk the Dog"]
}

pantryClient.basket
  .update('ToDoList', payload, options)
  .then((response) => console.log(response))
```

### Delete a Basket
```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx"
const pantryClient = new pantry(pantryID)

pantryClient.basket
  .delete('ToDoList')
  .then((response) => console.log(response))
```

## Extras
### Get the direct link to a basket
```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx"
const pantryClient = new pantry(pantryID)

const link = pantryClient.basket.link('ToDoList')
```

### Retrieve Account Details
```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx-xxxx-xxxx-xxxx-xxxx-xxxx"
const pantryClient = new pantry(pantryID)

pantryClient.details()
  .then((response) => console.log(response))
```

[pantrypath]: https://getpantry.cloud
[apidocs]: https://documenter.getpostman.com/view/3281832/SzmZeMLC
[npmlink]: https://www.npmjs.com/package/pantry-node
