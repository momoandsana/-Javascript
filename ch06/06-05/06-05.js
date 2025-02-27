let current_hours = document.querySelector('.c_hours');
let current_minutes = document.querySelector('.c_minutes');
let current_seconds = document.querySelector('.c_seconds');
let current_meridiem = document.querySelector('.c_meridiem');

let hours, minutes, seconds = "";

function current_clock() {
    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    current_meridiem.innerHTML = `${hours < 12 ? '오전' : '오후'}`;

    if (hours > 12) {
        if (hours - 12 > 9) {
            current_hours.innerHTML = `${hours}`;
        }
        // 밤 10시는 10시
        else {
            current_hours.innerHTML = `0${hours - 12}`;
        }
    }
    // 14시라면 02시
    
    else {
        if (hours > 9) {
            current_hours.innerHTML = `${hours}`;
        }
        else {
            current_hours.innerHTML = `0${hours}`;
        }
    }

    current_minutes.innerHTML = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
    
    current_seconds.innerHTML = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

current_clock();

/*
시, 분, 초에 0을 넣어서 표현을 해야 한다

12시 기준으로 오전, 오후
오전에서도 9시->09시

오후에서도 10시->10시


*/