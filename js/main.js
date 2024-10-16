let button = document.querySelector('.button');
let counter = 0;
let clickPower = 1;
let boost1 = document.querySelector('#boost1');
let boost2 = document.querySelector('#boost2');
let boost3 = document.querySelector('#boost3');
let boost4 = document.querySelector('#boost4');
let sidebar = document.querySelector('.sidebar');
let arrow = document.querySelector('.arrow');
let stick1 = document.querySelector('.stick1');
let stick2 = document.querySelector('.stick2');

button.addEventListener('click', () => {
    counter = counter + clickPower
    button.innerHTML = counter
    button.style.transform = 'scale(1.2)'
    setTimeout(() => {
        button.style.transform = 'scale(1.0)'
    }, 100);
});

boost1.addEventListener('click', () => {
    if(counter >= 10) {
        counter -= 10
        clickPower = 2
        button.innerHTML = counter
    } else {
    alert("Для покупки необходимо 10 кликов")
    }
});

boost2.addEventListener('click', () => {
    if(counter >= 50) {
        counter -= 50
        clickPower = 4
        button.innerHTML = counter
    } else {
        alert("Для покупки необходимо 50 кликов")
    }
});

boost3.addEventListener('click', () => {
    if(counter >= 100) {
        counter -= 100
        clickPower = 8
        button.innerHTML = counter
    } else {
        alert("Для покупки необходимо 100 кликов")
    }
})

boost4.addEventListener('click', () => {
    if(counter >= 1000) {
        counter -= 1000
        clickPower = 16
        button.innerHTML = counter
    } else {
        alert("Для покупки необходимо 1000 кликов")
    }
})
