import calculatePercentage from './calculatePercentage';
import repeatTask from './repeatTask';
import { todoList, todoListComplete, list } from './globals';

// Переключение элемента в позицию checked

function toggleTodoItem() {
    let listItem = this.closest('.todo-item');
    let listId = listItem.dataset.id;

    if (todoList.contains(listItem)) {
        todoListComplete.appendChild(listItem);
    } else if (todoListComplete.contains(listItem)) {
        todoList.appendChild(listItem);
    }

    listItem.classList.toggle('completed');
    calculatePercentage ();

    for (let i = 0; i < list.length; i++) {
        if (list[i].id == listId) {
            
            if (list[i].check === true) {
                list[i].check = false;
            } else {
                list[i].check = true;
                if (list[i].repeat) {
                    repeatTask(list[i]);
                }
                
            }
            
            localStorage.setItem('ToDo', JSON.stringify(list));
        }
    }
}

export default toggleTodoItem;