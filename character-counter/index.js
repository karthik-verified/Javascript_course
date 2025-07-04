let text_area = document.querySelector('.text');

text_area.addEventListener('keydown', function(event) {

    
    let total_text = text_area.value;

    if(event.key!=='Backspace') {
        if (total_text==='') {
        document.querySelector('.number').innerHTML = 1;
        } else {
            document.querySelector('.number').innerHTML = total_text.length+1;
        }
    }else {
        if (total_text==='') {
        document.querySelector('.number').innerHTML = 0;
        } else {
            document.querySelector('.number').innerHTML = total_text.length-1;
        }
    }

    
})

