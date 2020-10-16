const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = '¡Este es el glorioso contenido de texto!';

container.appendChild(content);


const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "¡Hola soy rojo!";
paragraph.style.color = "red";

content.appendChild(paragraph);

const title3  = document.createElement('h3');
title3.classList.add("title3");
title3.textContent  = "¡Soy un h3 azul!";
title3.style.color = "blue";

content.appendChild(title3);


const divContainer = document.createElement('div');
divContainer.classList.add("div");
divContainer.style.cssText = "background-color: pink; border: black 1px solid;"

const h1DivCont = document.createElement('h1');
h1DivCont.classList.add("h1DivCont");
h1DivCont.textContent = "Estoy en un div";
divContainer.appendChild(h1DivCont);

const paraDivCont = document.createElement('p');
paraDivCont.classList.add('paragraph');
paraDivCont.textContent = "¡YO TAMBIEN!";
divContainer.appendChild(paraDivCont);

content.appendChild(divContainer);
