let a = document.querySelector('.btn');
let b = document.querySelector('.inp');
let c = document.querySelector('.text2');
let d = document.querySelector('.text');
let f = document.querySelector('.h1');

a.onclick = () => {
    c.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    d.style.display = 'none';
    f.textContent = 'ВАШ' + ' ' +
        'РОСТ' + ' ' + b.value + 'см'
}