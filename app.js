const playerHand=document.getElementById("player-hand");
const computerHand=document.getElementById("computer-hand");
const playerRock=document.getElementById("rock");
const playerPaper=document.getElementById("paper");
const playerScissors=document.getElementById("scissors");
const winnerMessage=document.getElementById("winner");
const playButton=document.getElementById("play-button");
const fadein=document.getElementById("fadein");
const intro=document.getElementById("intro");
const playerScore=document.getElementById("player-score");
const computerScore=document.getElementById("computer-score");
let playerChoice;
let computerChoice;
let i=0;
let j=0;
let computerChoices=["rock","paper","scissors"];
function computerChoose(){
    computerChoice=computerChoices[Math.floor(Math.random()*3)];
};
playButton.addEventListener("click",function(){
    console.log("ok");
    fadein.classList.add("fadeIn");
    intro.classList.add("fadeOut");
    // 成功
});
playerRock.addEventListener("click",function(){
    console.log("a");
    computerChoose();
    if(computerChoice=="rock"){
        winnerMessage.innerHTML="no winner";
    };
    if(computerChoice=="paper"){
        winnerMessage.innerHTML="computer wins";
        i++;
        computerScore.innerHTML="<h2>Computer</h2>"
        +`<p>${i}</p>`;
    };
    if(computerChoice=="scissors"){
        winnerMessage.innerHTML="player wins";
        j++;
        playerScore.innerHTML="<h2>Player</h2>"
        +`<p>${j}</p>`;
    };
});
playerPaper.addEventListener("click",function(){
    computerChoose();
    if(computerChoice=="paper"){
        winnerMessage.innerHTML="no winner";
    };
    if(computerChoice=="scissors"){
        winnerMessage.innerHTML="computer wins";
        i++;
        computerScore.innerHTML="<h2>Computer</h2>"
        +`<p>${i}</p>`;
    };
    if(computerChoice=="rock"){
        winnerMessage.innerHTML="player wins";
        j++;
        playerScore.innerHTML="<h2>Player</h2>"
        +`<p>${j}</p>`;
    };
});
playerScissors.addEventListener("click",function(){
    computerChoose();
    if(computerChoice=="scissors"){
        winnerMessage.innerHTML="no winner";
    };
    if(computerChoice=="rock"){
        winnerMessage.innerHTML="computer wins";
        i++;
        computerScore.innerHTML="<h2>Computer</h2>"
        +`<p>${i}</p>`;
    };
    if(computerChoice=="paper"){
        winnerMessage.innerHTML="player wins";
        j++;
        playerScore.innerHTML="<h2>Player</h2>"
        +`<p>${j}</p>`;
    };
});
