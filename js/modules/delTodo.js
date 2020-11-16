import { todoListComplete, todoList, list } from './globals';
import calculatePercentage from './calculatePercentage';

// Удаление выбранной задачи

function deleteTodoItem() {
    let listItem = this.closest('.todo-item');
    let listId = listItem.dataset.id;


    if (todoList.contains(listItem)) {
        todoList.removeChild(listItem);
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {

                list.splice(i, 1);
                localStorage.setItem('ToDo', JSON.stringify(list));
            }
        }
    } else if (todoListComplete.contains(listItem)) {
        todoListComplete.removeChild(listItem);
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {
                list.splice(list[i], 1);
                localStorage.setItem('ToDo', JSON.stringify(list));
            }
        }
    }
    calculatePercentage ();
}

export default deleteTodoItem;