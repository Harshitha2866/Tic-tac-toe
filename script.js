let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const statusDisplay = document.getElementById("status");

const winningConditions = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
];

function makeMove(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).innerText = currentPlayer;

    if (checkWinner()) {
        statusDisplay.innerText = `Player ${currentPlayer} Wins! 🎉`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusDisplay.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusDisplay.innerText = "Player X's Turn";

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = "";
    }
}
