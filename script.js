let choices = [
    0, 1, 2, 3, 4, 5, 6, 7, 8,
];
let playerChoice = [];//playerの選択肢
let computerChoice = [];//computerの選択肢
const text = document.getElementsByClassName("text");
const endgame = document.getElementsByClassName("endgame");
function judge(e) {
    if (e == playerChoice) {
        if (e.includes(0) && e.includes(1) && e.includes(2)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(3) && e.includes(4) && e.includes(5)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(6) && e.includes(7) && e.includes(8)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(0) && e.includes(3) && e.includes(6)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(1) && e.includes(4) && e.includes(7)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(2) && e.includes(5) && e.includes(8)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(0) && e.includes(4) && e.includes(8)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
        if (e.includes(2) && e.includes(4) && e.includes(6)) {
            endgame.style.display="block";
            text.innerHTML = "player wins";
        };
    } else if (e == computerChoice) {
        if (e.includes(0) && e.includes(1) && e.includes(2)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(3) && e.includes(4) && e.includes(5)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(6) && e.includes(7) && e.includes(8)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(0) && e.includes(3) && e.includes(6)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(1) && e.includes(4) && e.includes(7)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(2) && e.includes(5) && e.includes(8)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(0) && e.includes(4) && e.includes(8)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
        if (e.includes(2) && e.includes(4) && e.includes(6)) {
            endgame.style.display="block";
            text.innerHTML="computer wins";
        };
    } else {
        return 0;
    }
}
function player(i) {
    if (choices.length > 0) {
        //各マスクリック時の処理
        document.getElementById(i).innerHTML = "〇";
        //選んだマスに〇つける
        document.getElementById(i).style.pointerEvents = "none";
        //一度クリックしたマスは選べない
        let index = choices.indexOf(i);
        choices.splice(index, 1);
        //choices配列から消す
        playerChoice.push(i);
        //playerChoices配列に選んだマスの番号を追加する
        console.log(`プレイヤー${playerChoice}`);
        console.log(`選択肢一覧${choices}`);
        judge(playerChoice);
    } else if (choices.length = 0 && judge(playerChoice) == 0) {
        endgame.style.display="block";
        text.innerHTML="no winner";
    }
}
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
        console.log(`コンピュータ${computerChoice}`);
        console.log(`選択肢一覧${choices}`);
        judge(computerChoice);
    } else if (choices.length = 0 && judge(playerChoice) == 0) {
        endgame.style.display="block";
        text.innerHTML="no winner";
    }
}
for (let i = 0; i <= 8; i++) {
    document.getElementById(choices[i]).addEventListener("click", function () {
        player(i);
        computer();
    })
}