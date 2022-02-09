
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

  startGame();
}



