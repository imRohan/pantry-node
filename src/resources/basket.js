import Request from './request'

export default class Basket {
  constructor(pantryID) {
    this.pantryID = pantryID
  }

  update(basketName, payload) {
    return Request.put(`${this.pantryID}/basket/${basketName}`, payload)
  }

  create(basketName, payload = {}) {
    return Request.post(`${this.pantryID}/basket/${basketName}`, payload)
  }

  get(basketName) {
    return Request.get(`${this.pantryID}/basket/${basketName}`)
  }

  delete(basketName) {
    return Request.delete(`${this.pantryID}/basket/${basketName}`)
  }

  link(basketName) {
    return Request.path(`${this.pantryID}/basket/${basketName}`)
  }
}
