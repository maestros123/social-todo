let todoForm = document.getElementById('todo-form'),
    addInput = document.getElementById('add-input'),
    todoList = document.getElementById('todo-list'),
    todoListComplete = document.getElementById('todo-list-complete'),
    todoItem = document.querySelectorAll('.todo-item');

let list = [];
let id;


let itemInLocal = JSON.parse(localStorage.getItem('ToDo'));


if (itemInLocal == null) {
    id = 0;
} else {
    id = list.length;
    itemInLocal.forEach((item, i) => {
        if (itemInLocal[i].check === false) {
            createTodoItem(item.name, item.id, todoList);
        } else {
            createTodoItem(item.name, item.id, todoListComplete);
        }
    });
};




function createTodoItem(title, id, parent) {
    const item = `<li class="todo-item" data-id=${id}>
                    <input class="checkbox" type="checkbox">
                    <label class="title">${title}</label>
                    <input class="textfield" type="text">
                    <button class="edit">Изменить</button>
                    <button class="delete">Удалить</button>
                </li>`;

    const position = "beforeend";

    parent.insertAdjacentHTML(position, item);

    let todoItem = parent.lastChild;

    if (parent === todoListComplete) {
        todoItem.classList.add('completed');
    }

    bindEvents(todoItem);
    addLocal(title, false);
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);

}

function addTodoItem(event) {
    event.preventDefault();

    const todoItem = addInput.value;

    if (todoItem) {
        createTodoItem(todoItem, id, todoList);

    } else {
        alert('Задача не введена!');
    };

    addInput.value = '';

}

function toggleTodoItem() {
    let listItem = this.parentNode;    
    let listId = listItem.dataset.id;

    if (todoList.contains(listItem)) {
        todoListComplete.appendChild(listItem);
    } else if (todoListComplete.contains(listItem)){
        todoList.appendChild(listItem);
    }
   
    listItem.classList.toggle('completed');

    for (let i = 0; i < list.length; i++) {
        if (list[i].id == listId) {
            list[i].check = true;                
            localStorage.setItem('ToDo', JSON.stringify(list));
        };
    };
}

function editTodoItem() {
    const listItem = this.parentNode;
    let listId = listItem.dataset.id;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value;
        this.innerText = 'Изменить';
    } else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';
    }

    listItem.classList.toggle('editing');
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == listId) {
            list[i].name = title.innerText;                
            localStorage.setItem('ToDo', JSON.stringify(list));
        };
    };

}

function deleteTodoItem() {
    let listItem = this.parentNode;
    let listId = listItem.dataset.id;


    if (todoList.contains(listItem)) {
        todoList.removeChild(listItem);
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {
                list.splice(list[i], 1);
                localStorage.setItem('ToDo', JSON.stringify(list));
            };
        }
    } else if (todoListComplete.contains(listItem)) {
        todoListComplete.removeChild(listItem);
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {
                list.splice(list[i], 1);
                localStorage.setItem('ToDo', JSON.stringify(list));
            };
        }
    } 
}

function addLocal(title, complete) {

    list.push({
        name: title,
        id: id,
        check: complete
    });

    localStorage.setItem('ToDo', JSON.stringify(list));
    id++;
}



todoForm.addEventListener('submit', addTodoItem);