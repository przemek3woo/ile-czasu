let date = " Jul 29, 2024 19:00:00"
let emotions = ["🤍", "🥰", "😘", "😻"]


let clock = document.getElementById("clock")
let my_window = document.getElementById("window")
let enjoy = document.getElementById("enjoy")
let emo = document.getElementById("emotion")

emo.innerText = emotions[Math.floor(Math.random() * (emotions.length))]

const countDownDate = new Date(date).getTime();
const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = now - countDownDate;
    if (duration <= 1) {
        updateDuration(duration)
        clearInterval(interval);
        updateDuration(0);
        return;
    }
    else {
        getEnjoy()
    }
    updateDuration(duration); 
    }, 1000);

function updateDuration (duration) {
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((duration % (1000 * 60)) / 1000);
    clock.innerText = days + "d, " + hours + "g, " + minutes + "m, " + seconds + "s"
}

function getEnjoy() {
    enjoy.style.display = "block"
    enjoy.style.animation = "none";
    setTimeout(() => {
        enjoy.style.transform = "translateY(-100vh)"
    }, 500)
    my_window.style.opacity = 1
    emo.style.opacity = 1
}
