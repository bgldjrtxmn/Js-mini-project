let a = document.querySelector('.wrapper');
let c = document.querySelector('.text');
let d = document.querySelector('.color');
let f = document.querySelector('.btn');

let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

f.onclick = () => {
    let g = '';

    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        g += array[random]
    }

    a.style.background = '#' + g;
    d.textContent = '#' + g;
}