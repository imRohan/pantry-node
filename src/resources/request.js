const bent = require('bent')

const BASE_PATH = 'https://getpantry.cloud'
const API_VERSION = '1'

export default class Request {
  static async get(route) {
    return Request.perform(route, 'GET', 'json')
  }

  static async post(route, payload) {
    return Request.perform(route, 'POST', 'string', payload)
  }

  static async put(route, payload) {
    return Request.perform(route, 'PUT', 'json', payload)
  }

  static async delete(route) {
    return Request.perform(route, 'DELETE', 'string')
  }

  static async perform(route, method, responseFormat, payload = {}) {
    try {
      const action = bent(method, responseFormat)
      const response = await action(Request.path(route), payload)
      return response
    } catch (error) {
      const errorMessage = await error.text()
      throw errorMessage
    }
  }

  static path(route) {
    return `${BASE_PATH}/apiv${API_VERSION}/pantry/${route}`
  }
}
