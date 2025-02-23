let fruits = [];

fruits[0] = 'apple';
fruits[1] = 'banana';
fruits[2] = 'cherry';

console.log(fruits);
console.log(`배열 fruits의 길이는 ${fruits.length}입니다.`)
console.log(`0번째 : ${fruits[0]}, 마지막 번째 : ${fruits.length-1}`);

fruits.shift();// 배열 앞에서부터 항목 제거
fruits.pop();// 배열 끝에 있는 항목 제거
console.log(fruits);

fruits.unshift('mango');// 배열 앞에서부터 항목 추가하기
fruits.push('grape');// 배열 끝에 항목 추가하기기
console.log(fruits);
