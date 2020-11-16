
// Переводим дату в более удобочитаемый вид 

function translateData (date) {
    let monthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let year = date.slice(0,4),
        month = date.slice(5,7),
        day = date.slice(8,10);
    
    month = monthName[+month -1];

    let fullDate = ` ${day} ${month} ${year} года`;

    return fullDate;
}

export default translateData;