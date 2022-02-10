const time = document.getElementById('time');
function show2digits(num){
    //常に二桁表示
    let tmp;
    if (num<10){
        tmp="0"+num;
    }else{
        tmp=num;
    }
    return tmp;
}
setInterval(function(){
    //一秒ごとに時分秒表示
    let currentTime = new Date();
    let currentHour = show2digits(currentTime.getHours());
    let currentMinute = show2digits(currentTime.getMinutes());
    let currentSecond = show2digits(currentTime.getSeconds());
    time.innerHTML=`${currentHour}:${currentMinute}:${currentSecond}`;
},1000)
