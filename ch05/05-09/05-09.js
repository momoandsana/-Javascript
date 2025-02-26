const btn = document.querySelector('.btn');
const section= document.querySelector('.container');

btn.style.fontSize = '30px';
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';

btn.addEventListener('click', () => {
    const my_name = document.createElement('div');
    const my_school = document.createElement('div');
    const my_hobby = document.createElement('div');
    const my_coding = document.createElement('div');

    section.appendChild(my_name);
    section.appendChild(my_school);
    section.appendChild(my_hobby);
    section.appendChild(my_coding);

    my_name.textContent = '이름: 호야';
    my_name.style.fontSize = '30px';
    my_name.style.color = 'violet';

    my_school.textContent = '학교: 디랩';
    my_school.style.fontSize = '30px';
    my_school.style.color = 'red';

    my_hobby.textContent = '취미: 코딩하기';
    my_hobby.style.fontSize = '30px';
    my_hobby.style.color = 'skyblue';

    my_coding.textContent = '코딩: 자바스크립트';
    my_coding.style.fontSize = '30px';
    my_coding.style.color = 'hotpink';
})