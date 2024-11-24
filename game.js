const gameContainer = document.getElementById("game-container");
const timerEl = document.getElementById("timer");
const movesEl = document.getElementById("moves");
const difficultySelect = document.getElementById("difficulty");

let cardIcons = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍍", "🥝", "🍓"];
let gridSize = 4;
let timer = 0;
let timerInterval = null;
let moves = 0;
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;
let lockBoard = false;

// Shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create cards
function createCards() {
    const numPairs = (gridSize * gridSize) / 2;
    const cards = shuffle(cardIcons.slice(0, numPairs).concat(cardIcons.slice(0, numPairs))); // Duplicate and shuffle

    gameContainer.innerHTML = "";
    gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;

    cards.forEach((icon) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = icon;

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.textContent = "";

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.textContent = icon;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
    });

    resetGameState();
}

// Start the timer
function startTimer() {
    timer = 0;
    timerEl.textContent = timer;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer++;
        timerEl.textContent = timer;
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Reset game state
function resetGameState() {
    firstCard = null;
    secondCard = null;
    moves = 0;
    matchedPairs = 0;
    lockBoard = false;
    movesEl.textContent = moves;
    stopTimer();
    startTimer();
}

// Flip a card
function flipCard() {
    if (lockBoard || this.classList.contains("flipped") || this.classList.contains("matched")) {
        return;
    }

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesEl.textContent = moves;

    checkForMatch();
}

// Check if two cards match
function checkForMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedPairs++;

        if (matchedPairs === (gridSize * gridSize) / 2) {
            stopTimer();
            setTimeout(() => alert(`Congratulations! You completed the game in ${timer} seconds and ${moves} moves.`), 500);
        }

        resetCardSelection();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetCardSelection();
        }, 1000);
    }
}

// Reset card selection
function resetCardSelection() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

// Start the game
function startGame() {
    gridSize = parseInt(difficultySelect.value);
    createCards();
}