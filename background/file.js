let a = document.querySelector('.wrapper');
let b = document.querySelector('.btn');

let h = ['red', 'blue', 'yellow', 'pink', 'black', ];



b.onclick = () => {
    let t = Math.floor(Math.random() * 5);
    a.style.background = h[t];
}