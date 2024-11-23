let second=0;
let interval=null;

const time=document.getElementById("time")

function padStart(value)
{
    return String(value).padStart(2,"0")
}

function showtime()
{
    const hours=Math.floor(second/60/60)
    const minutes=Math.floor(second/60)
    const seconds=second%60
    time.innerHTML=`${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

function timer()
{
    second++;
    showtime()
}

function start(){
    if (interval) stop()
    interval=setInterval(timer,1000)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    stop()
    second=0
    showtime()
}