let choices = [
    0, 1, 2, 3, 4, 5, 6, 7, 8,
];
let playerChoice = [];//playerの選択肢
let computerChoice = [];//computerの選択肢
const text = document.getElementById("text");
const endgame = document.getElementById("endgame");
let winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
function judge(e) {
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 7; j++) {
            if (e == playerChoice) {
                if (e.includes(winningCombination[j][0]) && e.includes(winningCombination[j][1]) && e.includes(winningCombination[j][2])) {
                    endgame.style.display = "block";
                    text.innerHTML = "player wins";
                    document.getElementById(i).style.pointerEvents = "none";
                } else if (choices.length <= 0) {
                    endgame.style.display = "block";
                    text.innerHTML = "no winner";
                }
            } else if (e == computerChoice) {
                if (e.includes(winningCombination[j][0]) && e.includes(winningCombination[j][1]) && e.includes(winningCombination[j][2])) {
                    endgame.style.display = "block";
                    text.innerHTML = "computer wins";
                    document.getElementById(i).style.pointerEvents = "none";
                } else if (choices.length <= 0) {
                    endgame.style.display = "block";
                    text.innerHTML = "no winner";
                }
            }
        }
    }
}
function player(i) {
    if (choices.length > 0) {
        //各マスクリック時の処り
        document.getElementById(i).innerHTML = "〇";
        //選んだマスに〇つける
        document.getElementById(i).style.pointerEvents = "none";
        //一度クリックしたマスは選べない
        let index = choices.indexOf(i);
        choices.splice(index, 1);
        //choices配列から消す
        playerChoice.push(i);
        //playerChoices配列に選んだマスの番号を追加する
        judge(playerChoice);
    }
}
//コンピュータのアルゴリズム
//可能な動きをすべて試す。
//この時点でプレイヤーがあと一手で勝てる状態の場合コンピュータがこのターンで勝てる動きには10をつける。
//このターンで勝てなかった場合、プレーヤーが次のターンで勝てるか判断するために可能な動きをすべて試す。
//プレーヤーが勝ったら-10のスコア。プレーヤーが勝たなかったら0でコンピュータはランダム。
//スコアが0か10になるような選択をするようにする。if(10){配列random}else if(0){配列random}else if(-10){配列random}
function computer() {
    if (choices.length > 0) {

        let computerChose = choices[Math.floor(Math.random() * choices.length)];
        let index = choices.indexOf(computerChose);
        document.getElementById(computerChose).innerHTML = "×";
        computerChoice.push(computerChose);
        //残った配列の要素からランダムに選びそれを変数に入れる
        //配列にコンピュータの選んだマスを追加する
        document.getElementById(computerChose).style.pointerEvents = "none";
        choices.splice(index, 1);
        judge(computerChoice);
    }
}
for (let i = 0; i <= 8; i++) {
    document.getElementById(choices[i]).addEventListener("click", function () {
        player(i);
        computer();
    })
}
function startGame() {
    choices = [0, 1, 2, 3, 4, 5, 6, 7, 8,];
    playerChoice = [];
    computerChoice = [];
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.pointerEvents = "auto";
    }
    text.innerHTML = "";
    endgame.style.display = "none";
};