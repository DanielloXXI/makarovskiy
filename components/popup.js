export class Popup {
    constructor(popupElement) {
        this._popup = popupElement;
        this._popupCloseButton = this._popup.querySelector(".popup__close-button");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener("mousedown", (e) => {
            if (!e.target.closest(".popup *")) {
                this.close();
            }
        });
        this._popupCloseButton.addEventListener("click", () => this.close());
    }
}