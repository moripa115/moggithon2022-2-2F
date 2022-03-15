const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const winnerMessage = document.getElementById("winner");
const playButton = document.getElementById("play-button");
const fadeIn = document.getElementById("fade-in");
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
    fadeIn.classList.add("fadeIn");
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
// 三つの選択肢のどれか選んだら手が動いて何回か上下して手の形の画像入れ替え
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    //グーチョキパーの3つのボタンを受取る
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
        //shakeの動きが終わったときに、停止
      });
    });

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        
        setTimeout(() => {
          //押したボタンに合わせて画像変更
          playerHand.src = `./assets/${this.textContent}.png`;
            //thisにはグーかチョキかパーが入る、それを.textContentで文字列として取得する
          computerHand.src = `./assets/${computerChoice}.png`;
        },2000);

        //shake CSSと連動させる
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  playMatch();
};
//start the game function
game();
