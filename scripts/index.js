import { Popup } from "../components/popup.js";
const popupElement = document.querySelector(".popup__main");
const popupElementHeader = document.querySelector(".popup__header");
const mainButton = document.querySelectorAll(".main__button");
const headerButton = document.querySelector('.header__burger');

const popupHeader = new Popup(popupElementHeader);

if (popupElement) {
    const popup = new Popup(popupElement);
    popup.setEventListeners();
    for (var i = 0; i < mainButton.length; i++) {
        mainButton[i].addEventListener("click", function (e) {
            popup.open();
        });
    }
}

popupHeader.setEventListeners();
headerButton.addEventListener('click', () => {
    popupHeader.open();
});