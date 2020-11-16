//Получение и установка времени слева в планировщике задач

function getTime() {
    const timeNow = new Date();
    const timeHours = timeNow.getHours();
    let timeMinutes = timeNow.getMinutes();

    let hours = document.querySelector('.todo-header-hours');
    let minutes = document.querySelector('.todo-header-minutes');

    if (timeMinutes >= 0 && timeMinutes < 10) {
        timeMinutes = '0' + timeMinutes;
    }

    hours.textContent = timeHours;
    minutes.textContent = timeMinutes;
}
setInterval(getTime, 60000);
export default getTime;