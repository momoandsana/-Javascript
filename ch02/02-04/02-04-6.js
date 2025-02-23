let fruits = [];

fruits[0] = 'apple';
fruits[1] = 'banana';
fruits[2] = 'cherry';

console.log(fruits);
console.log(`배열 fruits의 길이는 ${fruits.length}입니다.`)
console.log(`0번째 : ${fruits[0]}, 마지막 번째 : ${fruits.length-1}`);

fruits.shift();// 배열 앞에서부터 항목 제거
fruits.pop();// 배열 끝에서부터 항목 제거
console.log(fruits);

fruits.unshift('mango');// 배열 앞에서부터 항목 추가
fruits.push('grape');// 배열 뒤에부터 항목 추가
console.log(fruits);
console.log(`banana는 ${fruits.indexOf('banana')}번째에 있습니다.`);