// 실로폰 버튼 객체 생성
const xy_1 = document.querySelector('.xy-1');
const xy_2 = document.querySelector('.xy-2');
const xy_3 = document.querySelector('.xy-3');
const xy_4 = document.querySelector('.xy-4');
const xy_5 = document.querySelector('.xy-5');
const xy_6 = document.querySelector('.xy-6');
const xy_7 = document.querySelector('.xy-7');
const xy_8 = document.querySelector('.xy-8');

// 실로폰 음 객체 생성
const xy_1_audio = new Audio('sounds/1.wav');
const xy_2_audio = new Audio('sounds/2.wav');
const xy_3_audio = new Audio('sounds/3.wav');
const xy_4_audio = new Audio('sounds/4.wav');
const xy_5_audio = new Audio('sounds/5.wav');
const xy_6_audio = new Audio('sounds/6.wav');
const xy_7_audio = new Audio('sounds/7.wav');
const xy_8_audio = new Audio('sounds/8.wav');

// play-closed 버튼 객체 생성
const play_btn = document.querySelector('.xy-play');
const closed_btn = document.querySelector('.xy-closed');

// 실로폰 버튼 배열 만들기
const xy_btns = [xy_1, xy_2, xy_3, xy_4, xy_5, xy_6, xy_7, xy_8];

// 실포폰 버튼 색갈 배열 만들기
const xy_btn_colors = ['deeppink', 'orange', 'cyan', 'aquamarine',
'darkgreen', 'lightblue', 'blue', 'red'];

// 실로폰 버튼 클릭 후, 음 재생하기
xy_1.addEventListener('click', () => {
    xy_1_audio.currentTime = 0;
    xy_1_audio.play()
})

xy_2.addEventListener('click', () => {
    xy_2_audio.currentTime = 0;
    xy_2_audio.play()
})

xy_3.addEventListener('click', () => {
    xy_3_audio.currentTime = 0;
    xy_3_audio.play()
})

xy_4.addEventListener('click', () => {
    xy_4_audio.currentTime = 0;
    xy_4_audio.play()
})

xy_5.addEventListener('click', () => {
    xy_5_audio.currentTime = 0;
    xy_5_audio.play()
})

xy_6.addEventListener('click', () => {
    xy_6_audio.currentTime = 0;
    xy_6_audio.play()
})

xy_7.addEventListener('click', () => {
    xy_7_audio.currentTime = 0;
    xy_7_audio.play()
})

xy_8.addEventListener('click', () => {
    xy_8_audio.currentTime = 0;
    xy_8_audio.play()
})

// xy-play, xy-closed 이벤트
play_btn.addEventListener('click', () => {
    for (let i=0; i<8; i++) {
        xy_btns[i].disabled = false;
        xy_btns[i].style.backgroundColor = xy_btn_colors[i];
        xy_btns[i].style.color = 'white';
    }
})

closed_btn.addEventListener('click', () => {
    for (const value of xy_btns) {
        value.disabled = true;
        value.style.color = 'black';
        value.style.backgroundColor = 'grey';
    }
})