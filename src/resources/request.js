const bent = require('bent')

const BASE_PATH = 'https://getpantry.cloud'
const API_VERSION = '1'

export default class Request {
  static async get(route) {
    const response = await Request.perform(route, 'GET', 'json')
    return response
  }

  static async post(route, payload) {
    const response = await Request.perform(route, 'POST', 'string', payload)
    return response
  }

  static async put(route, payload) {
    const response = await Request.perform(route, 'PUT', 'json', payload)
    return response
  }

  static async delete(route) {
    const response = await Request.perform(route, 'DELETE', 'string')
    return response
  }

  static async perform(route, method, responseFormat, payload = {}) {
    const action = bent(method, responseFormat)
    return action(Request.path(route), payload)
  }

  static path(route) {
    return `${BASE_PATH}/apiv${API_VERSION}/pantry/${route}`
  }
}
