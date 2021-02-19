const gameBoard = (() => {
  const gridBoard = [
    " ", " ", " ",
    " ", " ", " ",
    " ", " ", " ",
  ];

  const resetGameBoard = () => {
    while (gameBoardContainer.firstChild) {
      gameBoardContainer.removeChild(gameBoardContainer.firstChild);
    }
  };

  const drawGameBoard = () => {
    resetGameBoard();
    gridBoard.forEach( (space, i )=> {
      const spaceBoard = document.createElement("div");
      spaceBoard.id = i;
      spaceBoard.classList.add("space-board");
      spaceBoard.textContent = gridBoard[i];
      gameBoardContainer.appendChild(spaceBoard);
    });
  }

  return{gridBoard,drawGameBoard};
})();




const displayController = (()=>{
  const currentPlayer = (figure) => figure;
  const nextPlayer = (figure) => figure;

  const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const checkWinner = () => {
    for (let i = 0; i < winningCombination.length; i++) {
      let checkPos = [false,false,false];
  
      for (let j = 0; j < winningCombination[i].length; j++) {
        let aux = winningCombination[i][j];
        
        if (gameBoard.gridBoard[aux] === displayController.currentPlayer){
          checkPos[j] = true;
        }
        
      }

        if (checkPos[0]&&checkPos[1]&&checkPos[2]){
          console.log(checkPos[0]);
          console.log(checkPos[1]);
          console.log(checkPos[2]);
          console.log("Winner is "+displayController.currentPlayer);
          return;
        }else{
          checkPos[0] = false;
          checkPos[1] = false;
          checkPos[2] = false;
        }

      }
      
    }


  const changePlayer = () => {
    
    let aux = displayController.currentPlayer;
    displayController.currentPlayer = displayController.nextPlayer;
    displayController.nextPlayer = aux;
  }

  const turn = (e)=>{
    const id = e.target.id;
    if (gameBoard.gridBoard[id] !== " "){
      return;
    }
    gameBoard.gridBoard[id] = displayController.currentPlayer;
    gameBoard.drawGameBoard();
    checkWinner();
    changePlayer();
  }

  return{turn};
})();



const player = (figure) => {
  const getFigure = () => figure;

  return {getFigure}
}



const gameBoardContainer = document.querySelector(".game-board-container")
gameBoard.drawGameBoard();
const X = player("x");
const O = player("o");

displayController.currentPlayer = X.getFigure();
displayController.nextPlayer = O.getFigure();

gameBoardContainer.addEventListener('click', (e) => { displayController.turn(e) });