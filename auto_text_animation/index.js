const content = ['Developer','Coder','Reader','Detective','Gamer'];

let totalDelay = 0;

for(let i = 0; i<=100 ; i++) {
    content.forEach(function(item) {
    let html ='';
    for(let i = 0; i<item.length ; i++) {
        totalDelay += 165;
        
        setTimeout(function() {
            html += item[i];
            document.querySelector('.content').innerHTML = html;
        },totalDelay);
    }

    totalDelay += 1000;
    setTimeout(function() {
        document.querySelector('.content'),innerHTML = '';
    },totalDelay);
});
}