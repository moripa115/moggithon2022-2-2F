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
