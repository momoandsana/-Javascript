let pw_1 = document.querySelector('#pw_1');
let pw_2 = document.querySelector('#pw_2');
let pw_3 = document.querySelector('#pw_3');
let pw_4 = document.querySelector('#pw_4');

const btn_setup = document.querySelector('.btn_setup');
const btn_open = document.querySelector('.btn_open');
const btn_clear = document.querySelector('.btn_clear');

let password = '';
let Pw_1 = '';
let Pw_2 = '';
let Pw_3 = '';
let Pw_4 = '';

pw_1.value = '0';
pw_2.value = '0';
pw_3.value = '0';
pw_4.value = '0';

alert('비밀번호를 입력하거나 바꿔주세요.');

btn_setup.addEventListener('click', () => {
    Pw_1 = pw_1.value;
    Pw_2 = pw_2.value;
    Pw_3 = pw_3.value;
    Pw_4 = pw_4.value;

    password = Pw_1 + Pw_2 + Pw_3 + Pw_4;

    localStorage.setItem('password', password);

    pw_1.value = '';
    pw_2.value = '';
    pw_3.value = '';
    pw_4.value = '';
})

btn_open.addEventListener('click', () => {
    Pw_1 = pw_1.value;
    Pw_2 = pw_2.value;
    Pw_3 = pw_3.value;
    Pw_4 = pw_4.value;

    let user_pw = Pw_1 + Pw_2 + Pw_3 + Pw_4;

    password = localStorage.getItem('password');

    if (user_pw == password) {
        alert('비밀번호가 일치합니다.\n가방이 열렸습니다.');
    }
    else {
        alert('비밀번호가 일치하지 않습니다.');
    }
})

btn_clear.addEventListener('click', () => {
    alert('모든 것이 초기화 됩니다.');
    pw_1.value = '0';
    pw_2.value = '0';
    pw_3.value = '0';
    pw_4.value = '0';

    password = '';

    localStorage.clear();
})