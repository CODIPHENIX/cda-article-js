import { user_data } from "./template.js";
document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.log("ok");

    console.log(parent);
    user_data.data();
});
var icon = document.getElementById("icon");
icon.onclick = function () {
    var isDarkTheme = document.body.classList.toggle("dark-theme");

    if (isDarkTheme) {
        icon.src = "../asset/sun_icon.png";
    } else {
        icon.src = "../asset/moon_icon.png";
    }
};