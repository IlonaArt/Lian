var menu = document.querySelector(".menu-button");
var navList = document.querySelector(".nav-list");
var background = document.querySelector(".background-section");

menu.addEventListener("click", function (evt) {
    evt.preventDefault();
    navList.classList.toggle("show-nav");
    background.classList.toggle("opacity");
});