
function currnetTime() {
    let digitclo = document.querySelector(".clock");
    let currDate = new Date();
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    let seconds = currDate.getSeconds();
    let flag = "AM"
    if(hours == 0){ //mid-night
        hours = 12;
    }
    if(hours > 12){ //afternoon
        hours = hours-12;
         flag = "PM"
    }
    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds= `0${seconds}`;
    }
    digitclo.innerHTML = `${hours}:${minutes}:${seconds} ${flag}`

    setTimeout(() => {
        currnetTime();
    }, 1000);
}
currnetTime()