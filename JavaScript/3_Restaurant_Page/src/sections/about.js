function loadAbout(){
  const CONTENT = document.querySelector("#content");

  const CONTAINER_ABOUT = document.createElement("div");
  CONTAINER_ABOUT.id = "container-about";
  CONTENT.appendChild(CONTAINER_ABOUT);

  const ABOUT_TITLE = document.createElement("h1");
  ABOUT_TITLE.id = "about-title";
  ABOUT_TITLE.textContent = "About us";
  CONTAINER_ABOUT.appendChild(ABOUT_TITLE);

  const ABOUT_P = document.createElement("p");
  ABOUT_P.id = "about-p";
  ABOUT_P.textContent = "Lorem Pokémon ipsum Dodrio skorupi butterfree spewpa nuzleaf poliwag phione sudowoodo rhyperior feraligatr, gliscor gastly mew kartana. Meowth kirlia fletchling kommo-o beautifly vespiquen, finneon shiinotic espeon drampa charmeleon bouffalant omanyte turtwig necrozma sigilyph. Electabuzz gloom poliwrath rattata parasect. Registeel snivy cubchoo meltan type: null salazzle. Sunkern spheal hydreigon skitty. Zekrom virizion lairon azelf simisage cofagrigus scyther grovyle. Poliwhirl litwick shiinotic pidgey, deino shiinotic murkrow piplup. Excadrill gliscor zangoose starmie torterra pancham grumpig eevee croagunk infernape, doduo noibat lickitung yveltal servine cherrim.";
  CONTAINER_ABOUT.appendChild(ABOUT_P);
}

export default loadAbout;