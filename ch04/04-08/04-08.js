const btn_food = document.querySelector('.btn-1');
const btn_season = document.querySelector('.btn-2');
const btn_color = document.querySelector('.btn-3');
const btn_animal = document.querySelector('.btn-4');
const div_info = document.querySelector('.div-info')

let info = '';
let num = 0;

btn_food.addEventListener('click', () => {
    let food = prompt('좋아하는 음식은?');
    info += `좋아하는 음식은 ${food}\n`;
    num += 1;
    if (num == 4) {
        div_info.innerText = info;
    }
})

btn_season.addEventListener('click', () => {
    let season = prompt('좋아하는 계절은?');
    info += `좋아하는 계절은 ${season}\n`;
    num += 1;
    if (num == 4) {
        div_info.innerText = info;
    }
})

btn_color.addEventListener('click', () => {
    let color = prompt('좋아하는 색깔은?');
    info += `좋아하는 음식은 ${color}\n`;
    num += 1;
    if (num == 4) {
        div_info.innerText = info;
    }
})

btn_animal.addEventListener('click', () => {
    let animal = prompt('좋아하는 동물은?');
    info += `좋아하는 동물은 ${animal}\n`;
    num += 1;
    if (num == 4) {
        div_info.innerText = info;
    }
})