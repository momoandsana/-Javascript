const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');
const btn_4 = document.querySelector('.btn-4');
const btn_5 = document.querySelector('.btn-5');

const div_1 = document.querySelector('.div-1');
const div_2 = document.querySelector('.div-2');
const div_3 = document.querySelector('.div-3');
const div_4 = document.querySelector('.div-4');

btn_1.addEventListener('click', () => {
    div_1.innerText = '대한민국';
})

btn_2.addEventListener('click', () => {
    div_2.innerText = '서울';
})

btn_3.addEventListener('click', () => {
    div_3.innerText = '약 5,000만명';
})

btn_4.addEventListener('click', () => {
    div_4.innerText = '+82';
})

btn_5.addEventListener('click', () => {
    div_1.innerText = '';
    div_2.innerText = '';
    div_3.innerText = '';
    div_4.innerText = '';
})