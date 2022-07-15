export class Address {
    constructor(data, addressSelector) {
      this._address = data["Address"];
      this._id = data["id"];
      this._addressSelector = addressSelector;
      this._element = this._getTemplate();

    }
    _getTemplate() {
      return document
      .querySelector(this._addressSelector)
      .content
      .querySelector('.address__option')
      .cloneNode(true);
    }
    renderCard() {
      this._element.textContent = this._address;
      // this._element.setAttribute('click', `option(${(this._id)})`);
      return this._element;
    };
  }