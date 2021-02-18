const gameBoard = (() => {
  const gridBoard = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " ",
  ];

  return{gridBoard};
})();

const displayController = (()=>{

})();

const player = (figure) => {
  const sayFigure = () => console.log(figure)
  return {sayFigure}
}


const gameBoardContainer = document.querySelector(".game-board-container")
drawGameBoard();

gameBoardContainer.addEventListener('click', (e) => { turn(e,"O") });

function turn(e, figure){
  let id = e.target.id;
  gameBoard.gridBoard[id] = figure;
  resetBoard();
  drawGameBoard();
}

function resetBoard(){
  while (gameBoardContainer.firstChild) {
    gameBoardContainer.removeChild(gameBoardContainer.firstChild);
  }
}


function drawGameBoard(){
  gameBoard.gridBoard.forEach( (space, i )=> {

    const spaceBoard = document.createElement("div");
    spaceBoard.id = i;
    spaceBoard.classList.add("space-board");
    spaceBoard.textContent = gameBoard.gridBoard[i];
    gameBoardContainer.appendChild(spaceBoard);

  });
}


