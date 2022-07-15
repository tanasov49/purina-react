export class Dbc {
    constructor(data, dbcSelector) {
        this._objectJson = data;
        this._dbcValues = Object.values(data);
        this._dbcCode = Object.keys(data);
        this._dbcSelector = dbcSelector;
        this._dbcElement = document.querySelector(this._dbcSelector).content.querySelector('.dbc-list').cloneNode(true);

    }
    renderDbc() {
        for (let i = 0; i < this._dbcCode.length; i++) {
            this._dbcText = document.createElement('p');
            this._dbcText.className = 'dbc-list__text';
            if (this._dbcValues[i] === "0") {
                this._dbcText.textContent = this._dbcCode[i];
                this._dbcElement.appendChild(this._dbcText);
            }
        }
        return this._dbcElement;
    }
}