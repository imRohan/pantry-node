import Basket from './resources/basket'
import Request from './resources/request'

export default class Pantry {
  constructor(pantryID) {
    this.pantryID = pantryID
    this.defaultHost = ''
    this.defaultBasePath = ''
    this.basket = new Basket(this.pantryID)
  }

  async details() {
    const response = await Request.get(this.pantryID)
    return response
  }
}
