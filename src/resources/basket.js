import Request from './request'

export default class Basket {
  constructor(pantryID) {
    this.pantryID = pantryID
    this.defaultOptions = {
      parseJSON: true,
    }
  }

  update(basketName, payload, { parseJSON } = this.defaultOptions) {
    return Request.put(`${this.pantryID}/basket/${basketName}`, payload,
      parseJSON)
  }

  create(basketName, payload = {}) {
    return Request.post(`${this.pantryID}/basket/${basketName}`, payload)
  }

  get(basketName, { parseJSON } = this.defaultOptions) {
    return Request.get(`${this.pantryID}/basket/${basketName}`, parseJSON)
  }

  delete(basketName) {
    return Request.delete(`${this.pantryID}/basket/${basketName}`)
  }

  link(basketName) {
    return Request.path(`${this.pantryID}/basket/${basketName}`)
  }
}
