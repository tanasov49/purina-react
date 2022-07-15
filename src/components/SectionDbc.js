export class SectionDbc {
    constructor({renderer}, containerDbc) {
        this._renderer = renderer;
        this._containerDbc = document.querySelector(containerDbc);
    }
    renderDbc(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
    addDbc(dbcElement) {
        this._containerDbc.append(dbcElement);
    }
}