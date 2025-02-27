let time = document.querySelector('.time');
let time_ms = document.querySelector('.time_ms');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const reset = document.querySelector('.reset_btn');

let timer_interval;
let timer = 0;
let timer_ms = 0;

start.addEventListener('click', () => {
    timer_interval = setInterval(() => {
        time_ms.innerHTML = `${timer_ms}`;
        timer_ms += 1;

        if (timer_ms > 60) {
            timer_ms = 0;
            timer += 1;
            time.innerHTML = `${timer}`;
        }
    }, 17);
})

stop.addEventListener('click', () => {
    clearInterval(timer_interval);
})

reset.addEventListener('click', () => {
    clearInterval(timer_interval);
    timer = 0;
    timer_ms = 0;
    time_ms.innerHTML = `${timer}`;
    time.innerHTML = `${timer}`;
})