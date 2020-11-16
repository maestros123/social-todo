import getDate from './getDate';

// Если задача является повторяемой, устанавливаем ей опции
function repeatTask(list) {

    let timeNow, fullDate;
    timeNow = new Date(list.date.replace(/-/g, ','));

    if (list.repeat == 'day') {        
        timeNow.setDate(timeNow.getDate() + 1);
        fullDate = getDate(timeNow);
    } else if (list.repeat == 'week') {
        timeNow.setDate(timeNow.getDate() + 7);
        fullDate = getDate(timeNow);   
    } else if (list.repeat == 'month') {
        timeNow.setMonth(timeNow.getMonth() + 1);
        fullDate = getDate(timeNow);
    } else if (list.repeat == 'year') {
        timeNow.setFullYear(timeNow.getFullYear() + 1);
        fullDate = getDate(timeNow);
    } 
    list.date = fullDate;
    list.check = false;
}

export default repeatTask;