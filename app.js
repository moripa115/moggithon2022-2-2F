<<<<<<< HEAD
=======
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
>>>>>>> 1a6c0ca5611fb879791d8f6e4aea1b1dbeff90aa

{
  let p_Score = 0;
  let c_Score = 0;

  function R_Click(player) {
    let computer = Math.floor( Math.random() * 3);
    const score = () => {
      const p = document.querySelector(".player-score p");
      const c = document.querySelector(".computer-score p");
      p.textContent = p_Score;
      c.textContent = c_Score;
    };

    //勝ち負けの判定
    if (computer === player) {
        Result_end = "あいこ";
    }
    else if(player === 0 && computer === 1) {
        Result_end = "あなたの勝ち";
        p_Score++;
        score();
    }
    else if(player === 1 && computer === 2) {
        Result_end = "あなたの勝ち";
        p_Score++;
        score();
    }
    else if(player === 2 && computer === 0) {
        Result_end = "あなたの勝ち";
        p_Score++;
        score();
    }
    else {
        Result_end = "あなたの負け";
        c_Score++;
        score();
    }
  }

    const match = () => {
      const rock = document.getElementById("rock");
      const paper = document.getElementById("paper");
      const scissors = document.getElementById("scissors");
      rock.addEventListener("click", () => {
        R_Click(0);
      });
      paper.addEventListener("click", () => {
        R_Click(2);
      });
      scissors.addEventListener("click", () => {
        R_Click(1);
      });
    };

    const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match_div = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match_div.classList.add("fadeIn");
      match();
    });
  };
<<<<<<< HEAD

  startGame();
}



=======
  playMatch();
};
//start the game function
game();
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
>>>>>>> 1a6c0ca5611fb879791d8f6e4aea1b1dbeff90aa
