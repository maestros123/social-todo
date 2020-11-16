import {
    list
} from './globals';

// Устанавливаем видимость задач (Все или на 1 день)

function showTasks() {
    let taskItem = document.querySelectorAll('.personal-task-item');

    let timeNow = new Date(),
        timeYear = timeNow.getFullYear(),
        timeMonth = timeNow.getMonth() + 1,
        timeDay = timeNow.getDate();

    taskItem.forEach(task => {
        task.addEventListener('click', () => {

            if (!task.classList.contains('personal-task-item-active')) {
                let taskActive = document.querySelector('.personal-task-item-active');

                taskActive.classList.remove('personal-task-item-active');
                task.classList.add('personal-task-item-active');

                if (task.classList.contains('personal-task-daily')) {
                    list.forEach(item => {
                        if (item.date) {
                            let year = item.date.slice(0, 4),
                                month = item.date.slice(5, 7),
                                day = item.date.slice(8, 10);

                            if (year != timeYear || month != timeMonth || day != timeDay) {
                                let todoItem = document.querySelectorAll('.todo-item');

                                todoItem.forEach(todo => {
                                    if (todo.dataset.id == item.id) {
                                        todo.style.display = "none";
                                    }
                                });
                            }
                        }

                    });
                } else {
                    let todoItem = document.querySelectorAll('.todo-item');

                    todoItem.forEach(todo => {
                        todo.style.display = "flex";
                    });
                }
            }

        });
    });


}

export default showTasks;