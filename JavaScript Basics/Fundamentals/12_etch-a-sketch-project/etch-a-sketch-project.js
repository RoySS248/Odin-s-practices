const gridContainer = document.querySelector('#grid-container');

let sizeRow = 16  ;
let sizeColumn = 16;

createGrid();

function createGrid() {
  let i = 0;
  while (i < sizeRow) {

    const row = document.createElement('div');
    row.classList.add('row-grid');

    j = 0
    while (j < sizeColumn) {
      const grid = document.createElement('div');
      grid.classList.add('grid');

      row.appendChild(grid);
      j++
    }

    gridContainer.appendChild(row);
    i++
  }
}


function clearGrid(){

  let i = 0;
  while (i !== gridContainer.children.length) {
    let box = gridContainer.children[i];
    gridContainer.removeChild(box);
  }

  
  sizeRow = parseInt(prompt("Filas: ",16));
  sizeColumn = parseInt(prompt("Columnas: ",16));

  createGrid();

}


const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
  clearGrid();
});

/*------------------------------------------- */

gridContainer.addEventListener('mouseover', function (e) {

  if (e.target.id != "grid-container") {
    e.target.style.background = "blue";
  }


}); 