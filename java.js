document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("loader");
    var main = document.querySelector("main");
    var footer = document.querySelector("footer");

    loader.addEventListener("animationend", function () {
        loader.style.display = "none";
        main.style.animation = "none";
        footer.style.animation = "none";
    });
});