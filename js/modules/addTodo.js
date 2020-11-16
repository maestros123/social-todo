import {todoForm, todoList, addInput, list } from './globals';
import createTodoItem from './createTodo';

// Добавление задачи на страницу

let id;

function addTodoItem() {

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (list.length !== 0) {
            id = list.length + 1;
            list.forEach(item => {
                if (item.id == id) {
                    id++;
                }
            });
        } else {
            id = 1;
        }

        const todoItem = addInput.value;

        if (todoItem) {
            createTodoItem(todoItem, id, todoList);

        } else {
            alert('Задача не введена!');
        }

        addInput.value = '';
    });

}

export default addTodoItem;