let choices = [
    0, 1, 2, 3, 4, 5, 6, 7, 8,
];
const playerChoice = [];//playerの選択肢
const computerChoice = [];//computerの選択肢
function player(i) {
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
    console.log(choices);
}
// function computer() {
//     document.getElementById(choices[Math.floor(Math.random() * choices.length)]).innerHTML = "×"
//     computerChoice.push(choices[Math.floor(Math.random() * choices.length)]);
//     //残った配列の要素からランダムに選びそれを変数に入れる
//     //配列にコンピュータの選んだマスを追加する
//     document.getElementById(choices[Math.floor(Math.random() * choices.length)]).style.pointerEvents = "none";
//     choices.splice(choices[Math.floor(Math.random * choices.length)], 1);
//     console.log(`コンピュータ${computerChoice}`);
// }
for (let i = 0; i <= 8; i++) {
    document.getElementById(choices[i]).addEventListener("click", function () {
        player(i);
        // computer();
    })
}