setInterval(function updateTime(){
    let now     = new Date();
    let hours   = now.getHours().toString().padStart(2, '0');
    let mins    = now.getMinutes().toString().padStart(2, '0');
    let secs    = now.getSeconds().toString().padStart(2, '0');
    let time    = hours+":"+mins+":"+secs;
    document.getElementById("time").innerHTML = time;
}, 1000);
updateTime();