  export class Api {
    constructor(options) {
      this.address = options.urlJson;
      this.headers = options.headers;
    }
    _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
  }
    getAddress() {
      return fetch(`${this.address}`, {
        method: 'GET',
        headers: this.headers,
      }).then(this._checkResponse);
    }
    
  }