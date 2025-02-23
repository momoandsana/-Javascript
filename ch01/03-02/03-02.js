function sum_f(_n1, _n2) {
    let sum = _n1 + _n2;
    alert(`${_n1} + ${_n2} = ${sum}`);
}

function sub_f(_n1, _n2) {
    let sub = _n1 - _n2;
    alert(`${_n1} - ${_n2} = ${sub}`);
}

function mul_f(_n1, _n2) {
    let mul = _n1 * _n2;
    alert(`${_n1} x ${_n2} = ${mul}`);
}

function div_f(_n1, _n2) {
    let div = _n1 / _n2;
    alert(`${_n1} / ${_n2} = ${div}`);
}

while (true) {
    let cal = parseInt(prompt(`번호를 입력해주세요.
1. 더하기 2. 빼기 3. 곱하기 4. 나누기 5. 종료`));

    if (cal == 1) {
        let n1 = parseInt(prompt('첫 번째 숫자 입력', 0));
        let n2 = parseInt(prompt('두 번째 숫자 입력', 0));

        sum_f(n1, n2);
    }
    else if (cal == 2) {
        let n1 = parseInt(prompt('첫 번째 숫자 입력', 0));
        let n2 = parseInt(prompt('두 번째 숫자 입력', 0));

        sub_f(n1, n2);
    }
    else if (cal == 3) {
        let n1 = parseInt(prompt('첫 번째 숫자 입력', 0));
        let n2 = parseInt(prompt('두 번째 숫자 입력', 0));

        mul_f(n1, n2);
    }
    else if (cal == 4) {
        let n1 = parseInt(prompt('첫 번째 숫자 입력', 0));
        let n2 = parseInt(prompt('두 번째 숫자 입력', 0));

        div_f(n1, n2);
    }
    else if (cal == 5) {
        alert('종료합니다.');
        break;
    }
}