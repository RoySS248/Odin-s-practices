function navbar() {

  const CONTENT = document.querySelector("#content");
  const ITEMS = ["HOME", "MENU", "ABOUT"];


  const CONTAINER_NAVBAR = document.createElement("div");
  CONTAINER_NAVBAR.id = "container-navbar";
  CONTENT.appendChild(CONTAINER_NAVBAR);

  const NAVBAR = document.createElement("ul");
  NAVBAR.id = "navbar";
  CONTAINER_NAVBAR.appendChild(NAVBAR);


  for (let i = 0; i < ITEMS.length; i++) {
    createItem(NAVBAR, ITEMS[i]);
  }

}


function createItem(NAVBAR, textA) {
  const ITEM = document.createElement("li");
  ITEM.classList.add("item-navbar");
  ITEM.id = textA.toLowerCase();
  NAVBAR.appendChild(ITEM);

  const A = document.createElement("a");
  A.textContent = textA;
  A.href = "#";
  A.title = textA;
  A.classList.add("item-navbar");
  ITEM.appendChild(A);
}

export default navbar;