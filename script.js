let choices = [
    0, 1, 2, 3, 4, 5, 6, 7, 8,
];
let playerChoice = [];//playerの選択肢
let computerChoice = [];//computerの選択肢
function player(i) {
    if(choices.length>0){
        //各マスクリック時の処理
        document.getElementById(i).innerHTML = "〇";
        //選んだマスに〇つける
        document.getElementById(i).style.pointerEvents = "none";
        //一度クリックしたマスは選べない
        let index=choices.indexOf(i);
        choices.splice(index, 1);
        //choices配列から消す
        playerChoice.push(i);
        //playerChoices配列に選んだマスの番号を追加する
        console.log(`プレイヤー${playerChoice}`);
        console.log(`選択肢一覧${choices}`);
    }
}
function computer() {
    if(choices.length>0){
        let computerChose=choices[Math.floor(Math.random()*choices.length)];
        let index=choices.indexOf(computerChose);
        document.getElementById(computerChose).innerHTML = "×";
        computerChoice.push(computerChose);
        //残った配列の要素からランダムに選びそれを変数に入れる
        //配列にコンピュータの選んだマスを追加する
        document.getElementById(computerChose).style.pointerEvents = "none";
        choices.splice(index, 1);
        console.log(`コンピュータ${computerChoice}`);
        console.log(`選択肢一覧${choices}`);
    }
}
for (let i = 0; i <= 8; i++) {
    document.getElementById(choices[i]).addEventListener("click", function () {
        player(i);
        computer();
    })
}