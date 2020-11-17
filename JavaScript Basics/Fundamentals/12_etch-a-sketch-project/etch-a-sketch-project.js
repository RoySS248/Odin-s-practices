const gridContainer = document.querySelector('#grid-container');

let i = 0;
while (i < 16) {

  const row = document.createElement('div');
  row.classList.add('row-grid');
  
  j = 0
    while (j < 16) {
      const grid = document.createElement('div');
      grid.classList.add('grid');

      row.appendChild(grid);
      j++
    }

  gridContainer.appendChild(row);
  i++
}


const hovering = document.querySelector('.grid');


gridContainer .addEventListener('mouseover', function (e) {

  if (e.target.id != "grid-container"){
    e.target.style.background = "blue";
  }


});