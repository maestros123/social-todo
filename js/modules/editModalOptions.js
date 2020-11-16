import { list } from './globals';
import toggleOptions from './toggleOptions';

// Редактирование опций задачи 

function editModalOptions(dataId) {
    let modal = document.querySelector('.modal'),
        modalPriority = modal.querySelectorAll('.modal-dialog-priority p'),
        modalRepeat = modal.querySelectorAll('.modal-dialog-repeat p');



    modalPriority.forEach(item => {
        item.addEventListener('click', () => {
            let active = modal.querySelector('.priority-active');

            if (!item.classList.contains('priority-active')) {
                active.classList.remove('priority-active');
                item.classList.add('priority-active');
            } 
        });
    });

    modalRepeat.forEach(item => {
        item.addEventListener('click', () => {
            let active = modal.querySelector('.repeat-active');

            if (!item.classList.contains('repeat-active')) {
                active.classList.remove('repeat-active');
                item.classList.add('repeat-active');
            } 
        });
    });

    // Очищаем все опции
    let modalItem = modal.querySelectorAll('.modal-dialog-item'),
        switchItem = modal.querySelectorAll('.switch'),
        switchRound = modal.querySelectorAll('.switch-round'),
        modalMore = modal.querySelectorAll('.modal-dialog-item-more');

    switchItem.forEach(el => el.classList.remove('active'));
    switchRound.forEach(el => el.classList.remove('switched'));
    modalMore.forEach(el => el.classList.remove('active'));
    modalItem.forEach(el => {
        el.classList.remove('active');
        let itemMore =  el.querySelector('.modal-dialog-item-more');
        if (itemMore.querySelector('input') != null) {
            itemMore.querySelector('input').value = '';
        } else {
            if (el.classList.contains('modal-dialog-priority')) {
                let priority = itemMore.querySelectorAll('p');
                priority.forEach(item => {
                    if (item.dataset.priority == 'low') {
                        item.classList.add('priority-active');
                    } else {
                        item.classList.remove('priority-active');
                    }
                });
            } else if (el.classList.contains('modal-dialog-repeat')) {
                let repeat = itemMore.querySelectorAll('p'); 
                repeat.forEach(item => {
                    if (item.dataset.repeat == 'day') {
                        item.classList.add('priority-active');
                    } else {
                        item.classList.remove('priority-active');
                    }
                });
            }
        }
    });
    
    // Устанавливаем опции, если они уже были выбраны 
    list.forEach(item => {
        if (item.id == dataId) {
            if (item.time) {
                toggleOptions ('.modal-dialog-time', item.time);
            }
            if (item.date) {
                toggleOptions ('.modal-dialog-date', item.date);
            }
            if (item.priority) {
                toggleOptions ('.modal-dialog-priority', item.priority);
            }
            if (item.repeat) {
                toggleOptions ('.modal-dialog-repeat', item.repeat);
            }
        }
    });


}
export default editModalOptions;