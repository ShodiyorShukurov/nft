const burgerMenu = document.querySelector(".site-header__mobile");
const mobileHeader = document.querySelector(".site-header__list-mobile");
const accordionBtn = document.querySelector(".site-header__accordion-btn");
const line = document.querySelector("#line");

let menu = false;

burgerMenu.addEventListener("click", function () {
  if (!menu) {
    burgerMenu.src = "../images/icons/close.svg";
    mobileHeader.style.display = "flex";
    menu = true;
  } else {
    burgerMenu.src = "../images/icons/burger.svg";
    mobileHeader.style.display = "none";
    menu = false;
  }
  //   burgerMenu.src = '../images/icons'
});

let linebtn = false;
accordionBtn.addEventListener("click", function () {
  if (!linebtn) {
    line.style.rotate = "180deg";
    linebtn = true;
  } else {
    line.style.rotate = "0deg";
    linebtn = false;
  }
  //   burgerMenu.src = '../images/icons'
});


