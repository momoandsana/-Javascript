const input_id = document.querySelector('#input_id');
const input_pw = document.querySelector('#input_pw');
const input_btn = document.querySelector('.send');

input_btn.addEventListener('click', () => {
    if (input_id.value == '' || input_pw.value == '') {
        alert('ID, PW를 입력해 주세요.');
        input_id.value = '';
        input_pw.value = '';
    }
    else {
        saveId(input_id.value);
        savePw(input_pw.value);

        setTimeout(() => {
            window.open('../Receive/Receive.html', '_parent');//iframe에서 사용하지 않기 때문에 현재 창에서 연다
        }, 1500);
    }
})

function saveId(send_id) {
    localStorage.setItem('my_id', send_id);
}

function savePw(send_pw) {
    localStorage.setItem('my_pw', send_pw);
}