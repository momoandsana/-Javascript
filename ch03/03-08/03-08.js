const season = ['봄', '여름', '가을', '겨울'];

season.forEach((value) => {
    console.log(`${value}`);
})

// 익명함수 이용->함수 이름 없고, 매개변수만 받는다
// 인덱스 필요없음

function printValue(value)
{
    console.log(`${value}`);
}

season.forEach(printValue);