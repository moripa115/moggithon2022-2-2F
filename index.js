const time = document.getElementById('time');
const greeting =document.getElementById('greeting');
const username=document.getElementById('name');
const focus=document.getElementById('focus');
function show2Digits(num){
    //常に二桁表示
    let tmp;
    if (num<10){
        tmp="0"+num;
    }else{
        tmp=num;
    }
    return tmp;
}
//名前入力
username.innerHTML="[ENTER NAME]";
//改行無効
username.onkeydown=function(e){
    if(e.key=="Enter"){
        return false;
    }
};
focus.innerHTML="[ENTER FOCUS]";
setInterval(function(){
    //0秒ごとに時分秒表示==常に更新
    const currentTime = new Date();
    const currentHour = show2Digits(currentTime.getHours());
    const currentMinute = show2Digits(currentTime.getMinutes());
    const currentSecond = show2Digits(currentTime.getSeconds());
    time.innerHTML=`${currentHour}:${currentMinute}:${currentSecond}`;
    function greetingFunc(){
        if(currentHour>=4&&currentHour<10){
            greeting.innerHTML=`おはようございます。`;
        }
        if(currentHour>=10&&currentHour<19){
            greeting.innerHTML=`こんにちは。`;
        }
        if((currentHour>=19&&currentHour<24)||(currentHour>=0&&currentHour<4)){
            greeting.innerHTML=`こんばんは。`;
        }
    };
    greetingFunc();
},0);