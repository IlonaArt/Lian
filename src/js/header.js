var menu = document.querySelector(".menu-button");
var navList = document.querySelector(".nav-list");

menu.addEventListener("click", function (evt) {
    evt.preventDefault();
    navList.classList.toggle("show-nav");
});