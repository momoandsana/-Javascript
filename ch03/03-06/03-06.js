let sign_up_id = '';
let sign_up_pw = '';
let confirm_pw = '';

let login_id = '';
let login_pw = '';

alert('회원가입 프로그램입니다.');

sign_up_id = prompt('ID를 입력해 주세요.');
sign_up_pw = prompt('PW를 입력해 주세요.');

while (true) {
    confirm_pw = prompt('다시 한 번 PW를 입력해 주세요.');
    if (sign_up_pw == confirm_pw) {
        alert('PW가 일치합니다.');
        break;
    }
}

alert('로그인 프로그램입니다.');

login_id = prompt('가입하신 ID를 입력해 주세요.');
login_pw = prompt('가입하신 PW를 입력해 주세요.');

if (sign_up_id == login_id && sign_up_pw == login_pw) {
    alert('로그인 되었습니다. 환영합니다!!');
}
else {
    alert('ID 또는 PW가 틀립니다.');
}