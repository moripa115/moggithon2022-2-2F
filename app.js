const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const winnerMessage = document.getElementById("winner");
const playButton = document.getElementById("play-button");
const fadein = document.getElementById("fadein");
const intro = document.getElementById("intro");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const hands = document.getElementById("hands");
let playerChoice;
let computerChoice;
let i = 0;
let j = 0;
let computerChoices = ["rock", "paper", "scissors"];
function computerChoose() {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)];
};
playButton.addEventListener("click", function () {
    fadein.classList.add("fadeIn");
    intro.classList.add("fadeOut");
});
playerRock.addEventListener("click", function (resolve, reject) {
    hands.innerHTML = ` <img id="player-hand" class="player-hand" src="./assets/rock.png" alt="" />
    <img id="computer-hand" class="computer-hand" src="./assets/rock.png" alt="" />`;
    let first = new Promise(function (resolve, reject) {
        hands.innerHTML = ` <img id="player-hand" class="player-hand shake-player" src="./assets/rock.png" alt="" />
        <img id="computer-hand" class="computer-hand shake-computer" src="./assets/rock.png" alt="" />`;
        playerRock.style.pointerEvents = "none";
        playerPaper.style.pointerEvents = "none";
        playerScissors.style.pointerEvents = "none";
        setTimeout(function () {
            resolve()
        }, 1000);
    });
    first.then(function () {
        computerChoose();
        hands.innerHTML = ` <img id='player-hand' class='player-hand' src='./assets/rock.png' alt='' />`
            + `<img id='computer-hand' class='computer-hand' src='./assets/${computerChoice}.png' alt='' />`;
        if (computerChoice == "rock") {
            winnerMessage.innerHTML = "no winner";
        };
        if (computerChoice == "paper") {
            winnerMessage.innerHTML = "computer wins";
            i++;
            computerScore.innerHTML = "<h2>Computer</h2>"
                + `<p>${i}</p>`;
        };
        if (computerChoice == "scissors") {
            winnerMessage.innerHTML = "player wins";
            j++;
            playerScore.innerHTML = "<h2>Player</h2>"
                + `<p>${j}</p>`;
        };
        playerRock.style.pointerEvents = "auto";
        playerPaper.style.pointerEvents = "auto";
        playerScissors.style.pointerEvents = "auto";
    })
});
playerPaper.addEventListener("click", function () {
    hands.innerHTML = ` <img id="player-hand" class="player-hand" src="./assets/rock.png" alt="" />`
    + `<img id="computer-hand" class="computer-hand" src="./assets/rock.png" alt="" />`;
    let first = new Promise(function (resolve, reject) {
        hands.innerHTML = ` <img id="player-hand" class="player-hand shake-player" src="./assets/rock.png" alt="" />`
        + `<img id="computer-hand" class="computer-hand shake-computer" src="./assets/rock.png" alt="" />`;
        playerRock.style.pointerEvents = "none";
        playerPaper.style.pointerEvents = "none";
        playerScissors.style.pointerEvents = "none";
        setTimeout(function () {
            resolve()
        }, 1000);
    });
    first.then(function () {
        computerChoose();
        hands.innerHTML = ` <img id='player-hand' class='player-hand' src='./assets/paper.png' alt='' />`
            + `<img id='computer-hand' class='computer-hand' src='./assets/${computerChoice}.png' alt='' />`;
        if (computerChoice == "paper") {
            winnerMessage.innerHTML = "no winner";
        };
        if (computerChoice == "scissors") {
            winnerMessage.innerHTML = "computer wins";
            i++;
            computerScore.innerHTML = "<h2>Computer</h2>"
                + `<p>${i}</p>`;
        };
        if (computerChoice == "rock") {
            winnerMessage.innerHTML = "player wins";
            j++;
            playerScore.innerHTML = "<h2>Player</h2>"
                + `<p>${j}</p>`;
        };
        playerRock.style.pointerEvents = "auto";
        playerPaper.style.pointerEvents = "auto";
        playerScissors.style.pointerEvents = "auto";
    });
});
playerScissors.addEventListener("click", function () {
    hands.innerHTML = ` <img id="player-hand" class="player-hand" src="./assets/rock.png" alt="" />`
    + `<img id="computer-hand" class="computer-hand" src="./assets/rock.png" alt="" />`;
    let first = new Promise(function (resolve, reject) {
        hands.innerHTML = ` <img id="player-hand" class="player-hand shake-player" src="./assets/rock.png" alt="" />`
        + `<img id="computer-hand" class="computer-hand shake-computer" src="./assets/rock.png" alt="" />`;
        playerRock.style.pointerEvents = "none";
        playerPaper.style.pointerEvents = "none";
        playerScissors.style.pointerEvents = "none";
        setTimeout(function () {
            resolve()
        }, 1000);
    });
    first.then(function () {
        computerChoose();
        hands.innerHTML = ` <img id='player-hand' class='player-hand' src='./assets/scissors.png' alt='' />`
            + `<img id='computer-hand' class='computer-hand' src='./assets/${computerChoice}.png' alt='' />`;
        if (computerChoice == "scissors") {
            winnerMessage.innerHTML = "no winner";
        };
        if (computerChoice == "rock") {
            winnerMessage.innerHTML = "computer wins";
            i++;
            computerScore.innerHTML = "<h2>Computer</h2>"
                + `<p>${i}</p>`;
        };
        if (computerChoice == "paper") {
            winnerMessage.innerHTML = "player wins";
            j++;
            playerScore.innerHTML = "<h2>Player</h2>"
                + `<p>${j}</p>`;
        };
        playerRock.style.pointerEvents = "auto";
        playerPaper.style.pointerEvents = "auto";
        playerScissors.style.pointerEvents = "auto";
    })
});
