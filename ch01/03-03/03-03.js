function gugudan_f(_dan) {
    let gugudan_print = '';
    for (let i=1; i<10; i++) {
        let gugudan = `${_dan} x ${i} = ${_dan * i}\n`;
        gugudan_print += gugudan;
    }
    alert(gugudan_print);
}

while (true) {
    let dan = parseInt(prompt(`출력하고 싶은 구구다(2단 ~ 9단)
의 단을 숫자로 입력해 주세요.`));

    if (dan < 2 || 9 < dan) {
        alert('2단 ~ 9단이 아닙니다.\n종료합니다.');
        break;
    }

    gugudan_f(dan);
}