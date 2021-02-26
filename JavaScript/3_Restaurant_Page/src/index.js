import navbar from "./navbar";
import hero from "./sections/hero.js";
import menu from "./sections/menu.js";
import about from "./sections/about.js";

const CONTENT = document.querySelector("#content");


navbar();
hero();

const HOME = document.getElementById("home");
const MENU = document.getElementById("menu");
const ABOUT = document.getElementById("about");


HOME.addEventListener('click', (e) => {
  resetWindow();
  hero();
});

MENU.addEventListener('click', (e) => {
  resetWindow();
  menu();
});

ABOUT.addEventListener('click', (e) => {
  resetWindow();
  about();
});


function resetWindow() {
  
  while (CONTENT.lastChild) {
    if(CONTENT.lastChild.id === "container-navbar"){
      return;
    }
    CONTENT.removeChild(CONTENT.lastChild);
  }
}