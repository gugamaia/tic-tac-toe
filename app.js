const gameBoard = document.querySelector('#game-board');
const info = document.querySelector('#info');

const startCells = [
    "", "", "", "", "", "", "", "", ""
];

let go = "cross";
// infoDisplay.textContent = "Cross goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        gameBoard.append(cellElement);
    })
}

createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go == go === "cross" ? "circle" : "cross";
    // infoDisplay.textContent = "it is now " + go + "'s go.";
    e.target.removeEventListener("click", addGo);

    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square");

    const winningScores = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6], [1,5,7]
    ];


    winningScores.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'));
        const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'));

    })
}

