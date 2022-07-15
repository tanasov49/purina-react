export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeWithClick = this._closeWithClick.bind(this);
    }
    //Это не нужно, т.к. использую в классе FindDbcInAddress
    // open() {
    //     this._popup.classList.add('popup_opened');
    //     document.addEventListener(`keydown`, this._handleEscClose);
    //   }
    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.addEventListener('mousedown', this._closeWithClick);
        document.removeEventListener(`keydown`, this._handleEscClose);
      }
    setEventListeners() {
        this._popup
          .querySelector('.address-clients__close-btn')
          .addEventListener('click', this.close);
      }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
          this.close();
        }
    }
    _closeWithClick(evt) {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    }
}