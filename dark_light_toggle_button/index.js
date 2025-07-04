let button = document.querySelector('.js-button');
let body = document.body;


button.addEventListener('click', function() {
    body.classList.toggle('light_mode_on');
    body.classList.toggle('dark_mode_on');
})