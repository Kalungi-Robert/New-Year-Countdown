const dayEL = document.getElementById
("day")
const hourEL = document.getElementById
("hour")
const minuteEL = document.getElementById
("minute")
const secondEL = document.getElementById
("second")

const newYearTime = new Date("july 09, 2024 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now
    
    const second = 1000;
    const minute= second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) /hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    dayEL.innerText = d;
    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s; 
    setTimeout(updateCountdown,1000);

}