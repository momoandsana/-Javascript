const btn_name = document.querySelector('.btn_name');
const btn_remove = document.querySelector('.btn_remove');
const div_text = document.querySelector('.div_text');

const div_name = document.createElement('div');
div_name.setAttribute('class', 'name');

btn_name.addEventListener('click', () => {
    const input_name = document.getElementById('name').value;
    div_text.appendChild(div_name);
    div_name.innerHTML = input_name;

    div_name.style.fontSize = '30px';
    div_name.style.color = 'blue';
})

btn_remove.addEventListener('click', () => {
    const div_name = document.querySelector('.name');
    div_text.removeChild(div_name);
})