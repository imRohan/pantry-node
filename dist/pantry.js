(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Pantry = factory());
})(this, (function () { 'use strict';

  const bent = require('bent');

  const BASE_PATH = 'https://getpantry.cloud';
  const API_VERSION = '1';

  class Request {
    static async get(route, parseJSON = true) {
      return Request.perform(route, 'GET', parseJSON)
    }

    static async post(route, payload) {
      return Request.perform(route, 'POST', false, payload)
    }

    static async put(route, payload, parseJSON = true) {
      return Request.perform(route, 'PUT', parseJSON, payload)
    }

    static async delete(route) {
      return Request.perform(route, 'DELETE', false)
    }

    static async perform(route, method, parseJSON, payload = {}) {
      try {
        const responseFormat = parseJSON ? 'json' : 'string';
        const action = bent(method, responseFormat);
        const response = await action(Request.path(route), payload);
        return response
      } catch (error) {
        const errorMessage = await error.text();
        throw errorMessage
      }
    }

    static path(route) {
      return `${BASE_PATH}/apiv${API_VERSION}/pantry/${route}`
    }
  }

  class Basket {
    constructor(pantryID) {
      this.pantryID = pantryID;
      this.defaultOptions = {
        parseJSON: true,
      };
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

  class Pantry {
    constructor(pantryID) {
      this.pantryID = pantryID;
      this.defaultHost = '';
      this.defaultBasePath = '';
      this.basket = new Basket(this.pantryID);
    }

    async details() {
      const response = await Request.get(this.pantryID);
      return response
    }
  }

  return Pantry;

}));
