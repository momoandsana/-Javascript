let time = document.querySelector('.time');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const reset = document.querySelector('.reset_btn');

let timer_interval;
let timer = 0;

start.addEventListener('click', () => {
    timer_interval = setInterval(() => {
        timer += 1;
        time.innerHTML = `${timer}`;
    }, 1000);
})

stop.addEventListener('click', () => {
    clearInterval(timer_interval);
})

reset.addEventListener('click', () => {
    clearInterval(timer_interval);
    timer = 0;
    time.innerHTML = `${timer}`;
})