import { list } from './globals';
import translateData from './translateData';
import getDate from './getDate';
import overdueTask from './overdueTask';
// Действия при закрытии модального окна

function closeModal(listItem) {
    let modal = document.querySelector('.modal'),
        modalDialog = modal.querySelector('.modal-dialog'),
        modalSwitch = modal.querySelectorAll('.switch');

    const close = modal.querySelector('.modal-close');

    let title = listItem.querySelector('.todo-item-title'),
        priority = listItem.querySelector('.todo-item-priority'),
        priorityText = listItem.querySelector('.todo-item-priority p'),
        dateTodo = listItem.querySelector('.todo-item-comment-date'),
        timeTodo = listItem.querySelector('.todo-item-comment-time');

    close.addEventListener('click', (saveOptions));


    function saveOptions() {
        modalSwitch.forEach(item => {

            if (item.classList.contains('active')) { // Сохранение всех опций 

                if (item.parentElement.querySelector('input') != null) {

                    if (item.parentElement.classList.contains('modal-dialog-name')) { // Название задачи
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id == modal.dataset.modal) {
                                list[i].name = item.parentElement.querySelector('input').value;
                                localStorage.setItem('ToDo', JSON.stringify(list));
                                title.innerText = item.parentElement.querySelector('input').value;
                            }
                        }

                    } else if (item.parentElement.classList.contains('modal-dialog-date')) {// Дата задачи
                        let date = item.parentElement.querySelector('input').value;
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id == modal.dataset.modal) {
                                list[i].date = date;
                                localStorage.setItem('ToDo', JSON.stringify(list));
                                let fullDate = translateData(date);
                                dateTodo.innerText = fullDate;
                            }
                        }
                    } else if (item.parentElement.classList.contains('modal-dialog-time')) { // Время задачи
                        let time = item.parentElement.querySelector('input').value;
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id == modal.dataset.modal) {
                                list[i].time = item.parentElement.querySelector('input').value;
                                localStorage.setItem('ToDo', JSON.stringify(list));
                                timeTodo.innerText = time;
                            }
                        }
                    }
                } else {
                    if (item.parentElement.classList.contains('modal-dialog-priority')) { // Приоритет задачи
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id == modal.dataset.modal) {
                                list[i].priority = item.parentElement.querySelector('p.priority-active').dataset.priority;
                                localStorage.setItem('ToDo', JSON.stringify(list));
                                if (list[i].priority == 'normal') {
                                    priority.classList.add('normal');
                                    priority.classList.remove('high');
                                    priorityText.innerText = '!';
                                } else if (list[i].priority == 'high') {
                                    priority.classList.remove('normal');
                                    priority.classList.add('high');
                                    priorityText.innerText = '!!';
                                } else {
                                    priority.classList.remove('normal');
                                    priority.classList.remove('high');
                                    priorityText.innerText = '';
                                }
                            }
                        }
                    } else if (item.parentElement.classList.contains('modal-dialog-repeat')) { // Повторяемость задачи
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id == modal.dataset.modal) {
                                list[i].repeat = item.parentElement.querySelector('p.repeat-active').dataset.repeat;
                                if (!list[i].date) {
                                    let timeNow = new Date(),
                                        fullDate = getDate(timeNow);
                                    translateData(fullDate);
                                    list[i].date = fullDate;
                                    localStorage.setItem('ToDo', JSON.stringify(list));
                                    let dateTodo = listItem.querySelector('.todo-item-comment-date');
                                    fullDate = translateData(fullDate);
                                    dateTodo.innerText = fullDate;
                                }
                            }
                        }
                    }

                }
            } else { // Удалить опции, при их выключении
                if (item.parentElement.classList.contains('modal-dialog-name')) {

                } else if (item.parentElement.classList.contains('modal-dialog-date')) {

                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id == modal.dataset.modal) {
                            delete(list[i].date);
                            localStorage.setItem('ToDo', JSON.stringify(list));
                            dateTodo.innerText = '';
                        }
                    }
                } else if (item.parentElement.classList.contains('modal-dialog-time')) {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id == modal.dataset.modal) {
                            delete(list[i].time);
                            localStorage.setItem('ToDo', JSON.stringify(list));
                            timeTodo.innerText = '';
                        }
                    }
                } else if (item.parentElement.classList.contains('modal-dialog-priority')) {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id == modal.dataset.modal) {
                            delete(list[i].priority);
                            localStorage.setItem('ToDo', JSON.stringify(list));
                            priority.classList.remove('normal');
                            priority.classList.remove('high');
                            priorityText.innerText = '';
                        }
                    }
                } else if (item.parentElement.classList.contains('modal-dialog-repeat')) {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id == modal.dataset.modal) {
                            delete(list[i].repeat);
                            localStorage.setItem('ToDo', JSON.stringify(list));
                        }
                    }
                }
            }

            overdueTask();

        });
        close.removeEventListener('click', (saveOptions));
        modalDialog.classList.remove('modal-dialog-open');
        setTimeout(() => {
            modal.style.display = '';
        }, 300);
    }






}

export default closeModal;