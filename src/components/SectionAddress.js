export class SectionAddress {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
}
  renderItems(items) {
      items.forEach((item) => {
        this._renderer(item);
      });
    }
  addItem(cardElement) {
      this._container.append(cardElement);
    }
}