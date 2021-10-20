# pantry-node
Use this helper library to interact with the Pantry API.
## Documentation

The documentation for the Pantry API can be found [here][apidocs].

[apidocs]: https://documenter.getpostman.com/view/3281832/SzmZeMLC

## Usage

```javascript
const pantry = require('pantry-node')

const pantryID = "xxxx xxxx xxxx xxxx xxxx xxxx"; // Your unique Pantry UUID SID from www.getpantry.cloud
const pantryClient = new pantry(pantryID)

// Get Pantry Details
const details = await pantryClient.details()

// Create New Basket
await pantryClient.basket.create('ToDoList', { pending: ["Walk the Dog"], complete: [] })

// Retrieve Basket Contents
const basketContents = await pantryClient.basket.get('ToDoList')

// Update Basket Contents
await pantryClient.basket.update('ToDoList', { pending: [], complete: ["Walk the Dog"] })

// Delete Basket
await pantryClient.basket.update('ToDoList')
```
