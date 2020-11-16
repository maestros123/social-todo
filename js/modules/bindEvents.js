import toggleTodoItem from './toggleTodo';
import editTodoItem from './editTodo';
import deleteTodoItem from './delTodo';

// Назначение событий на кнопки

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.todo-item-checkbox'),
        editButton = todoItem.querySelector('.todo-item-edit'),
        deleteButton = todoItem.querySelector('.todo-item-del');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

export default bindEvents;