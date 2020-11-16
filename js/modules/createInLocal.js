
import createTodoItem from './createTodo';
import { list, todoList, todoListComplete } from './globals';

// Добавление элементов на страницу из локального хранилища

function createInLocal () {
    let itemInLocal = JSON.parse(localStorage.getItem('ToDo'));

    let id = list.length;

if (itemInLocal == null) {
    id = 0;
} else {
    id = list.length;
    itemInLocal.forEach((item, i) => {
        if (itemInLocal[i].check === false) {
            createTodoItem(item.name, item.id, todoList, item.date, item.time, item.priority, item.repeat);
        } else {
            createTodoItem(item.name, item.id, todoListComplete, item.date, item.time, item.priority, item.repeat);
        }
    }); 
}

}

export default createInLocal;