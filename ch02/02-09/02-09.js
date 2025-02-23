let age = parseInt(prompt('1. 어른 2. 청소년 3. 어린이', 1));

if (age == 1) {
    alert('어른은 현금 1,300원입니다.');
}
else if (age == 2) {
    alert('청소년은 현금 1,000원입니다.');
}
else if (age == 3) {
    alert('어린이는 현금 450원입니다.');
}
else {
    alert('번호를 잘못 입력하셨습니다.');
}