

document.querySelector('.present_month').innerHTML = dayjs().format('MMMM');

document.querySelector('.present_day').innerHTML = dayjs().format('dddd');

document.querySelector('.present_date').innerHTML = dayjs().date();

document.querySelector('.present_year').innerHTML = dayjs().year();