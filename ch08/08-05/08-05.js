const title = document.querySelector('.title');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const pause = document.querySelector('.pause');

const myAudio = new Audio();
myAudio.src= 'music1.mp3';

play.addEventListener('click', () => {
    title.innerHTML = '음악 재생 중입니다.';
    play.disabled = true;
    myAudio.play();
})

stop.addEventListener('click', () => {
    title.innerHTML = '음악이 정지되었습니다.';
    play.disabled = false;
    myAudio.pause();
    myAudio.currentTime = 0;
})

pause.addEventListener('click', () => {
    title.innerHTML = '음악이 일시정지 되었습니다.';
    play.disabled = false;
    myAudio.pause()
})