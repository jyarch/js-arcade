let playerO = "O";
let playerX = "X";
let currPlayer = playerO;
//               0   1   2   3   4   5   6   7   8
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameCells;

let winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal winning conditions
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical winning conditions
    [0, 4, 8], [2, 4, 6]             //diagonal winning conditions
];

window.onload = function(){
    gameCells = document.getElementsByClassName("game-cell");
    for(let cell of gameCells){
        cell.addEventListener("click", placeCell);
    }
}

function placeCell(){

    const index = parseInt(this.getAttribute("data-cell-index"));
    if(gameBoard[index] != ""){
        return;
    }

    this.innerText = currPlayer;
    gameBoard[index] = currPlayer;

    currPlayer = (currPlayer == playerO) ? playerX : playerO;

    checkWin();
}

function checkWin(){

    for(winCondition of winningConditions){
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
    }
}

