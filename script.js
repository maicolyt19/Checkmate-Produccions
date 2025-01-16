
let board = document.getElementById('chessboard');
let stockfish = new Worker('stockfish.js'); // Ensure Stockfish is available

function setupBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let square = document.createElement('div');
            square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            board.appendChild(square);
        }
    }
}

function playWithBot() {
    stockfish.onmessage = function (event) {
        console.log('Stockfish says:', event.data);
    };
    stockfish.postMessage('uci');
}

document.addEventListener('DOMContentLoaded', () => {
    setupBoard();
    playWithBot();
});
