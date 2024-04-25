import { Popup } from "../components/popup.js";
const popupElement = document.querySelector(".popup");
const mainButton = document.querySelectorAll(".main__button");

const popup = new Popup(popupElement);
popup.setEventListeners();
// mainButton.addEventListener("click", function (e) {
//     popup.open();
// });

for (var i = 0; i < mainButton.length; i++) {
    mainButton[i].addEventListener("click", function (e) {
        popup.open();
    });
}