let random_n = Math.floor(Math.random()*(100-1+1)) + 1;
let cnt = 0;

alert('Up And Down 게임을 시작합니다.\n숫자 범위는 1 ~ 100 사이입니다.');

while (true) {
    let player_n = parseInt(prompt('숫자 입력', 0));
    cnt += 1;
    if (random_n > player_n) {
        alert('Up 입니다.');
    }
    else if (random_n < player_n) {
        alert('Down 입니다.');
    }
    else {
        alert(`정답입니다.\n총 ${cnt}번 시도했습니다.`);
        break;
    }
}