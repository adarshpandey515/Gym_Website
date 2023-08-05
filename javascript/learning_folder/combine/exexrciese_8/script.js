function fxn(){
    // date month year

let d=new Date();
var mns = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mon=mns[d.getDay()];
let yr=d.getFullYear();
let dt=d.getDate();

// hr 
let hr=d.getHours();
let sft="AM";
if(hr>=12){
sft="PM";
if(hr>12){
hr=hr-12
}
}

// min sec
let min=d.getMinutes();
let sec=d.getSeconds();
detu.innerHTML=dt+" "+mon+" "+yr;
// creation
hour.innerHTML=hr
//setInterval(()=>{hour.innerHTML=hr},1000*60*60)

minute.innerHTML=min;
// setInterval(()=>{minute.innerHTML=min()},1000*60)

second.innerHTML=sec+1;



}
setInterval(fxn,1000)