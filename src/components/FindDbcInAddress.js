import { Popup } from "./Popup.js";
export class FindDbcInAddress extends Popup {
    constructor(index = 1, addressOption, dbcList, popupSelector) {
        super(popupSelector);
        this.slideIndex = index;
        this.addressOption = document.querySelector(addressOption).childNodes;
        this.dbcList = document.querySelector(dbcList).childNodes;
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener(`keydown`, this._handleEscClose);
      }
    option(n) {
        this.showSlide(this.slideIndex = n)
        super.close();
    }
    showSlide(n) {
        if (n > this.dbcList.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.dbcList.length;
        }
        for (let i = 0; i < this.dbcList.length; i++) {
            this.dbcList[i].classList.remove('dbc-list_visible');
        }
        for (let i = 0; i < this.addressOption.length; i++) {
            this.addressOption[i].addEventListener('click', e => this.option(i));
        }
        this.dbcList[this.slideIndex - 1].classList.add('dbc-list_visible');
    }
    setupDbc() {
        this.showSlide(this.slideIndex);

    }
}