function loadHero(){
  const CONTENT = document.querySelector("#content");

  const CONTAINER_HERO = document.createElement("div");
  CONTAINER_HERO.id = "container-hero";
  CONTENT.appendChild(CONTAINER_HERO);


  const CONTAINER_IMG = document.createElement("div");
  CONTAINER_IMG.id = "container-img";
  CONTAINER_HERO.appendChild(CONTAINER_IMG);


  const IMG_HERO = document.createElement("img");
  IMG_HERO.classList.add("img-hero");
  IMG_HERO.src = "back.jpg";
  CONTAINER_IMG.appendChild(IMG_HERO);


  const CONTAINER_TEXT = document.createElement("div");
  CONTAINER_TEXT.id = "container-text";
  CONTAINER_HERO.appendChild(CONTAINER_TEXT);

  const HERO_TITLE = document.createElement("h1");
  HERO_TITLE.id = "hero-title";
  HERO_TITLE.textContent = "Welcome to restaurant";
  CONTAINER_TEXT.appendChild(HERO_TITLE);

  const HERO_SUBTITLE = document.createElement("h2");
  HERO_SUBTITLE.id = "hero-subtitle";
  HERO_SUBTITLE.textContent = "Great food";
  CONTAINER_TEXT.appendChild(HERO_SUBTITLE);

  const HERO_P = document.createElement("p");
  HERO_P.id = "hero-p";
  HERO_P.textContent = "Lorem Pokémon ipsum Dodrio skorupi butterfree spewpa nuzleaf poliwag phione sudowoodo rhyperior feraligatr, gliscor gastly mew kartana. Meowth kirlia fletchling kommo-o beautifly vespiquen, finneon shiinotic espeon drampa charmeleon bouffalant omanyte turtwig necrozma sigilyph. Electabuzz gloom poliwrath rattata parasect. Registeel snivy cubchoo meltan type: null salazzle. Sunkern spheal hydreigon skitty. Zekrom virizion lairon azelf simisage cofagrigus scyther grovyle. Poliwhirl litwick shiinotic pidgey, deino shiinotic murkrow piplup. Excadrill gliscor zangoose starmie torterra pancham grumpig eevee croagunk infernape, doduo noibat lickitung yveltal servine cherrim.";
  CONTAINER_TEXT.appendChild(HERO_P);
}

export default loadHero;