import { Popup } from "../components/popup.js";
const popupElement = document.querySelector(".popup");
const mainButton = document.querySelector(".main__button");

const popup = new Popup(popupElement);
popup.setEventListeners();
mainButton.addEventListener("click", function (e) {
    popup.open();
});