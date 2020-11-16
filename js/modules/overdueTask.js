import {
    list
} from './globals';

function overdueTask() {
    let timeNow = new Date(),
        timeYear = timeNow.getFullYear(),
        timeMonth = timeNow.getMonth() + 1,
        timeDay = timeNow.getDate(),
        timeHours = timeNow.getHours(),
        timeMinutes = timeNow.getMinutes();

    function addRedBorder(item) {
        let todoItem = document.querySelectorAll('.todo-item');
        todoItem.forEach(todo => {
            if (todo.dataset.id == item.id) {
                todo.style.backgroundColor = '#f3b9b9';
            }
        });
    }

    list.forEach(item => {
        if (item.check != true) {
            if (item.date) {
                let year = item.date.slice(0, 4),
                    month = item.date.slice(5, 7),
                    day = item.date.slice(8, 10);

                if (year >= timeYear) {
                    if (month >= timeMonth) {
                        if (day >= timeDay) {
                            if (day == timeDay && item.time) {
                                
                                let hours = item.time.slice(0, 2),
                                    minutes = item.time.slice(3, 5);

                                if (hours >= timeHours) {
                                    if (hours == timeHours) {
                                        if (minutes >= timeMinutes) {

                                        } else addRedBorder(item);
                                    }
                                    
                                } else addRedBorder(item);
                            }
                        } else addRedBorder(item);
                    } else addRedBorder(item);
                } else addRedBorder(item);
            }
            if (item.time && !item.date) {
                let hours = item.time.slice(0, 2),
                    minutes = item.time.slice(3, 5);

                if (hours >= timeHours) {
                    if (minutes >= timeMinutes) {

                    } else addRedBorder(item);
                } else addRedBorder(item);
            }

        }
    });
}


export default overdueTask;