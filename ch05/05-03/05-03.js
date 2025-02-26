const com_btn = document.querySelector('.com_btn');
const com_n = document.querySelector('.com_n');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');

com_btn.addEventListener('click', () => {
    let input_num = document.getElementById('input-user').value;
    let com_num = Math.floor(Math.random()*(100-1+1))+1;

    input_num = parseInt(input_num);
    com_n.innerHTML = com_num;

    if (input_num > com_num) {
        result.innerHTML = '승';
    }
    else if (input_num < com_num) {
        result.innerHTML = '패';
    }
    else {
        result.innerHTML = '무';
    }
})

reset.addEventListener('click', () => {
    com_n.innerHTML = '';
    result.innerHTML = '';
    document.getElementById('input-user').value = '';
})