let hamburgerContainer = document.getElementById("hamburger-container");
let mobileNav = document.getElementById("mob-nav");
let dropDown = document.getElementsByClassName("dropdown");
let footerNav = document.getElementsByClassName("footer-nav-list");
let body = document.getElementsByTagName("BODY")[0];
let dropDownDiv = document.getElementsByClassName("title-icon-container");

hamburgerContainer.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("active");
  mobileNav.classList.toggle("active");
  body.classList.toggle("active");
});

Array.from(dropDownDiv).forEach((d, i) => {
  d.addEventListener("click", () => {
    d.classList.toggle("active");
    footerNav[i].classList.toggle("active");
    dropDown[i].classList.toggle("active");
  });
});
