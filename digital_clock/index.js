function update_clock() {
    const now = dayjs();
    const hours = now.hour().toString().padStart(2,'0');
    const minutes = now.minute().toString().padStart(2,'0');
    const seconds = now.second().toString().padStart(2,'0');

    document.body.querySelector('.hour-container').innerHTML = hours;
    document.body.querySelector('.minute-container').innerHTML = minutes;
    document.body.querySelector('.second-container').innerHTML = seconds;
}

setInterval(function() {
    update_clock();
},1000)