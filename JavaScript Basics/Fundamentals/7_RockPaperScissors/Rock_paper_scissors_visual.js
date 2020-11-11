let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const tijeras = document.querySelector("#tijeras");
tijeras.addEventListener("click", () => {
    playRound("tijeras");
});

const papel = document.querySelector("#papel");
papel.addEventListener("click", () => {
    playRound("papel");
});


const piedra = document.querySelector("#piedra");
piedra.addEventListener("click", () => {
    playRound("piedra");
});


function computerPlay() {
    let computerSelection = Math.floor((Math.random() * 3) + 1);
    switch (computerSelection) {
        case 1:
            return "piedra";
            break;
        case 2:
            return "papel";
            break;
        case 3:
            return "tijeras";
            break;
    }
}


function playRound(playerSelection) {
    //playerSelection = prompt("¿Piedra, papel o tijeras? Ingresa tu elecion: ");
    computerSelection = computerPlay();

    if (playerScore > 4 || computerScore > 4) {
        if (playerScore > computerScore) {
            show_msj("GAME OVER, gana: El jugador","J " +playerScore + " - C " + computerScore);
        } else {
            show_msj("GAME OVER, gana: El computador","J " +playerScore + " - C " + computerScore);
        }
        computerScore = 0;
        playerScore = 0;

    } else {

        if (playerSelection === computerSelection) {
            show_msj("Empate!","J " +playerScore + " - C " + computerScore);

        } else if (playerSelection === "piedra" && computerSelection === "tijeras") {
            playerScore++;
            show_msj("Jugador gana 1 punto","J " +playerScore + " - C " + computerScore);

        } else if (playerSelection === "papel" && computerSelection === "piedra") {
            playerScore++;
            show_msj("Jugador gana 1 punto","J " +playerScore + " - C " + computerScore);

        } else if (playerSelection === "tijeras" && computerSelection === "papel") {
            playerScore++;
            show_msj("Jugador gana 1 punto","J " +playerScore + " - C " + computerScore);

        } else if (playerSelection !== "piedra" && playerSelection !== "papel" && playerSelection !== "tijeras") {
            show_msj("Tu seleccion no fue valida, vuelve a intentar","J " +playerScore + " - C " + computerScore);

        } else {
            computerScore++;
            show_msj("Computador gana 1 punto","J " +playerScore + " - C " + computerScore);

        }

    }
}


function show_msj(newMsj,newScore) {
    const paragraph1 = document.querySelector('#msj1');
    paragraph1.innerText = newMsj;  

    const paragraph2 = document.querySelector('#msj2');
    paragraph2.innerText = "Puntuación: " + newScore;    
}


/*
function game() {

    computerScore = 0;
    playerScore = 0;

    for (let i = 1; i <= 5; i++) {

        let winner = playRound();

        console.log("Turno: " + i);

        switch (winner) {
            case "El jugador gana!":
                playerScore++;
                console.log("Player gana: " + playerScore);
                break;

            case "Pierdes!":
                computerScore++;
                console.log("Computadora gana : " + computerScore);
                break;

            case "Empate!":
                console.log("Empate!");
                break;

            case "Tu seleccion no fue valida.":
                console.log("Tu seleccion no fue valida, vuelve a intentar");
                i--;
                break;
        }
    }

    if (playerScore === computerScore) {
        return "Esto fue un empate!"
    } else if (playerScore > computerScore) {
        return "El jugador a ganado!";
    } else if (playerScore < computerScore) {
        return "La computadora a ganado!";
    }
}
*/