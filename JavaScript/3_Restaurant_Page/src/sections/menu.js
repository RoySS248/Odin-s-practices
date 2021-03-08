function loadMenu() {
  const lunchItems = [ //Nombre, Descripcion, Precio 
    [
      "Lorem 1",
      "Lorem Pokémon ipsum Dodrio skorupi butterfree spewpa nuzleaf poliwag phione sudowoodo rhyperior feraligatr.",
      45
    ],

    [
      "Lorem 2",
      "Lorem Pokémon ipsum Dodrio skorupi butterfree spewpa nuzleaf poliwag phione sudowoodo rhyperior feraligatr.",
      90
    ]
  ];

  const dinnerItems = [
    ["Lorem 3", "LOREM IPSUM", 36],
    ["Lorem 4", "LOREM IPSUM", 56]
  ];

  const CONTENT = document.querySelector("#content");

  const MENU_TITLE = document.createElement("h1");
  MENU_TITLE.id = "menu-title";
  MENU_TITLE.textContent = "MENU";
  CONTENT.appendChild(MENU_TITLE);

  const CONTAINER = document.createElement("div");
  CONTAINER.id = "container-menu";
  CONTENT.appendChild(CONTAINER);

  getLunch(CONTAINER, lunchItems);

  getDinner(CONTAINER, dinnerItems);

}

// LUNCH
function getLunch(CONTENT, lunchItems) {
  const CONTAINER_LUNCH = document.createElement("div");
  CONTAINER_LUNCH.id = "container-lunch";
  CONTENT.appendChild(CONTAINER_LUNCH);

  const TITLE_LUNCH = document.createElement("h2");
  TITLE_LUNCH.classList.add("title-menu-container");
  TITLE_LUNCH.textContent = "LUNCH";
  CONTAINER_LUNCH.appendChild(TITLE_LUNCH);

  const TIME_LUNCH = document.createElement("h2");
  TIME_LUNCH.classList.add("time-menu-container");
  TIME_LUNCH.textContent = "11:30am - 4:00pm";
  CONTAINER_LUNCH.appendChild(TIME_LUNCH);

  for (let i = 0; i < lunchItems.length; i++) {
    getLunchItems(CONTAINER_LUNCH, lunchItems[i][0], lunchItems[i][1], lunchItems[i][2]);
  }
}


function getLunchItems(CONTAINER_LUNCH, nameFood, descriptionFood, priceFood) {

  const CARD_FOOD = document.createElement("div");
  CARD_FOOD.classList.add("card-food");
  CONTAINER_LUNCH.appendChild(CARD_FOOD);

  const NAME_FOOD = document.createElement("h3");
  NAME_FOOD.classList.add("name-food");
  NAME_FOOD.textContent = nameFood;
  CARD_FOOD.appendChild(NAME_FOOD);

  const DESCRIPTION_FOOD = document.createElement("p");
  DESCRIPTION_FOOD.classList.add("description-food");
  DESCRIPTION_FOOD.textContent = descriptionFood;
  CARD_FOOD.appendChild(DESCRIPTION_FOOD);

  const PRICE_FOOD = document.createElement("p");
  PRICE_FOOD.classList.add("price-food");
  PRICE_FOOD.textContent = "$" + priceFood;
  CARD_FOOD.appendChild(PRICE_FOOD);
}

// DINNER

function getDinner(CONTENT, dinnerItems) {
  const CONTAINER_DINNER = document.createElement("div");
  CONTAINER_DINNER.id = "container-dinner";
  CONTENT.appendChild(CONTAINER_DINNER);

  const TITLE_DINNER = document.createElement("h2");
  TITLE_DINNER.classList.add("title-menu-container");
  TITLE_DINNER.textContent = "DINNER";
  CONTAINER_DINNER.appendChild(TITLE_DINNER);

  const TIME_DINNER = document.createElement("h2");
  TIME_DINNER.classList.add("time-menu-container");
  TIME_DINNER.textContent = "4:00pm - close";
  CONTAINER_DINNER.appendChild(TIME_DINNER);

  for (let i = 0; i < dinnerItems.length; i++) {
    getDinnerItems(CONTAINER_DINNER, dinnerItems[i][0], dinnerItems[i][1], dinnerItems[i][2]);
  }
}


function getDinnerItems(CONTAINER_DINNER, nameFood, descriptionFood, priceFood) {

  const CARD_FOOD = document.createElement("div");
  CARD_FOOD.classList.add("card-food");
  CONTAINER_DINNER.appendChild(CARD_FOOD);

  const NAME_FOOD = document.createElement("h3");
  NAME_FOOD.classList.add("name-food");
  NAME_FOOD.textContent = nameFood;
  CARD_FOOD.appendChild(NAME_FOOD);

  const DESCRIPTION_FOOD = document.createElement("p");
  DESCRIPTION_FOOD.classList.add("description-food");
  DESCRIPTION_FOOD.textContent = descriptionFood;
  CARD_FOOD.appendChild(DESCRIPTION_FOOD);

  const PRICE_FOOD = document.createElement("p");
  PRICE_FOOD.classList.add("price-food");
  PRICE_FOOD.textContent = "$" + priceFood;
  CARD_FOOD.appendChild(PRICE_FOOD);
}

export default loadMenu;