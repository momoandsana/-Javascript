const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

const cal_btn = document.querySelector('.cal-btn');

function sum_f(_n1, _n2) {
    let sum = _n1 + _n2;
    return sum;
}

function sub_f(_n1, _n2) {
    let sub = _n1 - _n2;
    return sub;
}

function mul_f(_n1, _n2) {
    let mul = _n1 * _n2;
    return mul;
}

function div_f(_n1, _n2) {
    let div = _n1 / _n2;
    return div;
}

cal_btn.addEventListener('click', () => {
    let n1 = parseInt(document.getElementById('number1').value);
    let n2 = parseInt(document.getElementById('number2').value);

    document.getElementById('td-result').innerText =`
${n1} + ${n2} = ${sum_f(n1, n2)}
${n1} - ${n2} = ${sub_f(n1, n2)}
${n1} x ${n2} = ${mul_f(n1, n2)}
${n1} / ${n2} = ${div_f(n1, n2).toFixed(2)}`
})