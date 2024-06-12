
function set2fig(num){
    var ret;
    if(num < 10){
        ret = "0" + num;
    }
    else{ret = num;}
    return ret;
}
//現在時刻取得
function clock(){
    var nowtime = new Date();
    if(Math.floor(nowtime.getMilliseconds()/500)%2 == 0){
        var nowHour = set2fig(nowtime.getHours());
        var nowMin = set2fig(nowtime.getMinutes());
        var nowSec = set2fig(nowtime.getSeconds());
        var disptime = nowHour + ":" + nowMin + ":" + nowSec;
    }
    else{
        var nowHour = set2fig(nowtime.getHours());
        var nowMin = set2fig(nowtime.getMinutes());
        var nowSec = set2fig(nowtime.getSeconds());
        var disptime = nowHour + " " + nowMin + " " + nowSec;
    }
    if(nowMin == "00" && nowSec=="00"){
        var timeElement=document.getElementById("time_signal_"+nowHour+"00");
        if(timeElement){
            timeElementplay();
        }
    }


    
    document.getElementById("clock").innerHTML=disptime;
}
setInterval("clock()",500);