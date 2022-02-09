// document.getElementById("mainpart").style.display="none"

const playButton=document.getElementById('play-button'); 
const intro=document.getElementById('intro');
const match=document.getElementById('match');
console.log('かき');

playButton.addEventListener('click',function(){
  console.log('アイウエ');
 intro.classList.add('fadeOut'); //introにfadeoutのclassを追加
  match.classList.remove('fadeOut'); //matchからfadeoutのclassを削除
 
})

