let x = parseInt(prompt('첫 번째 변의 길이는'));
let y = parseInt(prompt('두 번째 변의 길이는'));
let z = parseInt(prompt('세 번째 변의 길이는'));

let result = (x + y + z) + x + (y + z);

console.log(`둘레의 길이는 ${result}입니다.`);