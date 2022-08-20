import React from 'react';
import useGoogleSheets from 'use-google-sheets';

export class Api {
  constructor(sheetId) {
    this.sheetId = sheetId;
  }
  getSheets() {
    const { data, loading, error } = useGoogleSheets({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
      sheetsOptions: [{ id: this.sheetId }],
    });
    if (data) {
      const jsonSheet = JSON.stringify(data);
      return JSON.parse(jsonSheet);
      }
    if (loading) {
      console.log('Loading')
    }
    if (error) {
      console.log(`Error: ${err}`)
    }

  }
} 
// class Api {
//     constructor(options) {
//       this.address = options.urlJson;
//       this.headers = options.headers;
//     }
//     _checkResponse(res) {
//       if (res.ok) {
//           return res.json();
//       }
//       return Promise.reject(`Error: ${res.status}`);
//   }
//     getAddress() {
//       return fetch(`${this.address}`, {
//         method: 'GET',
//         headers: this.headers,
//       }).then(this._checkResponse);
//     }
//   }
//   const api = new Api({
//     urlJson: 'https://api.npoint.io/c6c32c3072fc0ee4bcfc',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
  // export default api;