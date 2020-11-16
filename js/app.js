import addTodoItem from './modules/addTodo';
import createInLocal from './modules/createInLocal';
import calculatePercentage from './modules/calculatePercentage';
import getTime from './modules/getTime';
import showTasks from './modules/showTasks';
import editPersonal from './modules/editPersonal';
import overdueTask from './modules/overdueTask';

addTodoItem();
createInLocal();
calculatePercentage();
getTime();
showTasks();
editPersonal();
overdueTask();

const modalSwitch = document.querySelectorAll('.switch');
modalSwitch.forEach(item => {

    item.addEventListener('click', () => {
        let round = item.querySelector('.switch-round'),
            parent = item.parentElement,
            parentMore = parent.querySelector('.modal-dialog-item-more');

        round.classList.toggle('switched');
        item.classList.toggle('active');
        parent.classList.toggle('active');
        parentMore.classList.toggle('active');
    });
});



setInterval(overdueTask, 60000);

setInterval(getTime, 60000);

