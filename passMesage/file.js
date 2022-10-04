let a = document.querySelector('.inp');
let b = document.querySelector('.btn');
let c = document.querySelector('.out');

function fn() {
    c.textContent = a.value;

    a.value = ''
}

a.addEventListener("keydown", function(event) {
    if (event.key == "Enter")
        fn()
})



