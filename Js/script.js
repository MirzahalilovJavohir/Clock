const sec = document.querySelector(".s"),
    min = document.querySelector(".m"),
    hours = document.querySelector(".h"),
    hourNum = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    secondNum = document.querySelector(".second");

function clock () {
    let time = new Date(),
    second =  time.getSeconds()*6,
    minut = time.getMinutes()*6,
    hour = time.getHours()*30
    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minut}deg)`
    hours.style.transform = `rotate(${hour}deg)`
    setTimeout(() => {
        clock()
    }, 300);
    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    secondNum.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
}
clock()

const tabsItem = document.querySelectorAll(".tabsItem"),
    tabs = document.querySelectorAll(".tabsContentItem")

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', ()=> {
        for(let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove("active")
            tabs[j].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        tabs[i].classList.add("active")
    })
}

const btn = document.querySelector(".stopwatch__btn")
const secSek = document.querySelector(".stopwatch__seconds")
const secMin = document.querySelector(".stopwatch__minutes")
const secHour = document.querySelector(".stopwatch__hours")
const milliSeconds = document.querySelector(".stopwatch__milliseconds")

let interval;
let hour = 0;
let minute = 0;
let seconds = 0;
let milliseconds = 0;


const startTimer = () => {
    milliseconds++;
    milliSeconds.innerHTML = milliseconds;

    if (milliseconds > 99) {
        seconds++;
        secSek.innerHTML = '0' + seconds;
        milliseconds = 0;
    }
    if ( seconds > 9) {
        secSek.innerHTML = seconds;
    }
    if ( seconds > 59) {
        minute++;
        secMin.innerHTML = '0' + minute;
        seconds = 0;
    }
    if (minute > 9) {
        secMin.innerHTML = minute;
    }
    if (minute > 59) {
        hour++;
        secHour.innerHTML = '0' + hour;
        minute = 0;
    }
    if (hour > 9) {
        secHour.innerHTML = hour;
    }
}

btn.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
    if (btn.innerHTML == "Start") {
        btn.innerHTML = "Stop"
    }
    else if (btn.innerHTML == "Stop") {
        btn.innerHTML = "Clear";
        clearInterval(interval)
    }
    else if (btn.innerHTML == "Clear") {
        btn.innerHTML = "Start"
        clearInterval(interval)
        hour = 0;
        minute = 0;
        seconds = 0;
        milliseconds = 0;

        milliSeconds.innerHTML = '0'
        secSek.innerHTML = '0'
        secMin.innerHTML = '0'
        secHour.innerHTML = '0'
    }
})

