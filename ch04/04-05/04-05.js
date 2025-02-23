const div_1 = document.querySelector('.div-1');
const div_2 = document.querySelector('.div-2');
const div_3 = document.querySelector('.div-3');
const div_4 = document.querySelector('.div-4');

const btn_change = document.querySelector('.change');
const btn_init = document.querySelector('.init');

btn_change.addEventListener('click', () => {
    div_1.innerText = 'Student';
    div_2.innerText = 'Rainbow';
    div_3.innerText = 'Car';
    div_4.innerText = 'Bird';
})

btn_init.addEventListener('click', () => {
    div_1.innerText = '';
    div_2.innerText = '';
    div_3.innerText = '';
    div_4.innerText = '';
})