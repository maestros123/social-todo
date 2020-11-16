//Получение даты

function getDate(date) {
    let timeYear = date.getFullYear(),
        timeMonth = date.getMonth() + 1,
        timeDay = date.getDate();

    if (timeMonth < 10) {
        timeMonth = '0' + timeMonth;
    }

    if (timeDay < 10) {
        timeDay = '0' + timeDay;
    }

    let fullDate = `${timeYear}-${timeMonth}-${timeDay}`;

    return fullDate;
}

export default getDate;