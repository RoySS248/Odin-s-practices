const gridContainer = document.querySelector('#grid-container');

let color = false;
createGrid(16);

function createGrid(size) {
  let i = 0;
  let area = size * size;

  while (i < area) {

    const grid = document.createElement('div');
    grid.classList.add('box');
    grid.id = i + 1;
    /*grid.textContent = i+1;*/
    grid.style.padding = ((80 / (size * 2)) - 0.1) + "vh";

    gridContainer.appendChild(grid);
    i++
  }
}


function clearGrid() {

  let i = 0;
  while (i !== gridContainer.children.length) {
    let box = gridContainer.children[i];
    gridContainer.removeChild(box);
  }


  let size = prompt("Tamaño (max 100): ", 16);

  if (isNaN(size * 1)) {
    size = 16;
  }

  if (size > 100) {
    size = 100;
  }

  if (size < 2) {
    size = 2;
  }

  createGrid(size);

}



function randomColor() {
  let colorSelection = Math.floor((Math.random() * 5) + 1);
  switch (colorSelection) {
    case 1:
      return "red";
      break;
    case 2:
      return "green";
      break;
    case 3:
      return "blue";
      break;
    case 4:
      return "yellow";
      break;
    case 5:
      return "purple";
      break;
  }
}


const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
  clearGrid();
});

const btnColor = document.querySelector("#btn-color");
btnColor.addEventListener("click", () => {
  color = true;
});

const btnBlack = document.querySelector("#btn-black");
btnBlack.addEventListener("click", () => {
  color = false;
});

/*------------------------------------------- */

gridContainer.addEventListener('mouseover', function (e) {

  if (e.target.id != "grid-container") {

    if(color){
      e.target.style.background = randomColor();
    }else{
      e.target.style.background = "black";
    }

  }


});