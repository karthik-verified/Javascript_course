const body = document.querySelector('body');

body.addEventListener('mousemove', function(event) {
    let x_position = event.offsetX;
    let y_position = event.offsetY;
    const span = document.createElement('span');
    span.style.left = x_position + 'px';
    span.style.top = y_position + 'px';
    const size = Math.random()*100;
    span.style.width = size +'px';
    span.style.height = size + 'px';
    body.appendChild(span);
    setTimeout(function() {
        span.remove()
    },3000)

})