class Api {
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
  const api = new Api({
    urlJson: 'https://api.npoint.io/c6c32c3072fc0ee4bcfc',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  export default api;