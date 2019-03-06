// const toggleMenu1 = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   menu.classList.toggle("menu--open");
// };
//
// // Start Here: Create a reference to the ".menu" class
// // create a reference to the ".menu-button" class
//
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuBtn.addEventListener("click", toggleMenu1);

// Select Dom Items
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

//set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menu.classList.toggle("menu--open");
    //show menu state to true
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menu.classList.remove("menu--open");
    // set menu back to false
    showMenu = false;
  }
}
