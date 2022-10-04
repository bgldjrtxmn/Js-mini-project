let a = document.querySelector('.out');
let b = document.querySelector('.plus');
let c = document.querySelector('.minus');

let t = 0;

function fn1(num) {
    t += num;
    a.innerHTML = t;
    console.log(t)
}