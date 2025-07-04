let button = document.querySelector('.js-button');
let body = document.body;
let dark_mode_on = true;

button.addEventListener('click', function() {
    body.classList.toggle('light_mode_on');
    body.classList.toggle('dark_mode_on')
})