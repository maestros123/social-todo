let todoForm = document.getElementById('todo-form'),
    addInput = document.getElementById('add-input'),
    todoList = document.getElementById('todo-list'),
    todoListComplete = document.getElementById('todo-list-complete'),
    todoItem = document.querySelectorAll('.todo-item');

getTime();

let list = [];
let id;


let itemInLocal = JSON.parse(localStorage.getItem('ToDo'));


if (itemInLocal == null) {
    id = 0;
} else {
    id = list.length;
    itemInLocal.forEach((item, i) => {
        if (itemInLocal[i].check === false) {
            createTodoItem(item.name, item.id, todoList, item.timeHours, item.timeMinutes);
        } else {
            createTodoItem(item.name, item.id, todoListComplete, item.timeHours, item.timeMinutes);
        }
    });
};




function createTodoItem(title, id, parent, timeH, timeM) {
    let hours = document.querySelector('.todo-header-hours').textContent;
    let minutes = document.querySelector('.todo-header-minutes').textContent;

    const item = `<li class="todo-item" data-id=${id}>
                    <input class="todo-item-checkbox" type="checkbox">
                    <label class="todo-item-title">${title}</label>
                    <input class="todo-item-textfield" type="text">
                    <div class="todo-item-task-time"><span class="todo-item-task-time-hours">${timeH}</span>:<span class="todo-item-task-time-minutes">${timeM}</span></div>
                    <div class="todo-item-time">
                        <input class="todo-item-time-hours" type="number" min="00" max="23" value="${hours}"> : <input class="todo-item-time-minutes"  type="number" min="00" max="59" value="${minutes}">
                    </div>
                    <button class="todo-item-save">Сохранить</button>
                    <div class="todo-item-dots">
                        <img src="img/more.svg" alt="">
                        <div class="todo-item-dots-more">
                        <div class="todo-item-dots-edit">Изменить</div>
                        <div class="todo-item-dots-time">Установить время</div>
                        <div class="todo-item-dots-delete">Удалить</div>
                        </div>
                    </div>                    
                </li>`;

    const position = "beforeend";

    parent.insertAdjacentHTML(position, item);

    let todoItem = parent.lastChild;

    if (parent === todoListComplete) {
        todoItem.classList.add('completed');
        let checkbox = todoItem.querySelector('.todo-item-checkbox');
        checkbox.setAttribute('checked', 'checked');

        addLocal(title, true, timeH, timeM);
    } else {
        addLocal(title, false, timeH, timeM);
    }
    if (timeH !== undefined && timeM !== undefined) {
        todoItem.querySelector('.todo-item-task-time').classList.add('active');   
    }

    bindEvents(todoItem);

}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.todo-item-checkbox');
    const dots = todoItem.querySelector('.todo-item-dots img'); // Показ опций задачи
    const editButton = todoItem.querySelector('.todo-item-dots-edit');
    const deleteButton = todoItem.querySelector('.todo-item-dots-delete');
    const addTime = todoItem.querySelector('.todo-item-dots-time');

    checkbox.addEventListener('change', toggleTodoItem);
    dots.addEventListener('click', openOptions)
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
    addTime.addEventListener('click', addTimeTodoItem);
}

function openOptions() {
    const dotsMore = this.parentElement.querySelector('.todo-item-dots-more');



    dotsMore.classList.add('active');

    let dotsMoreItems = dotsMore.children;

    for (let i = 0; i < dotsMoreItems.length; i++) {
        dotsMoreItems[i].addEventListener('click', () => {
            dotsMore.classList.remove('active');
        })
    };


}

function addTimeTodoItem() {
    const listItem = this.closest('.todo-item'),
        listId = listItem.dataset.id;
    
    let todoItemTime = listItem.querySelector('.todo-item-time'),
        todoItemTimeHours = listItem.querySelector('.todo-item-time-hours'),
        todoItemTimeMinutes = listItem.querySelector('.todo-item-time-minutes'),
        todoItemTaskTime = listItem.querySelector('.todo-item-task-time'),
        todoItemTaskTimeHours = listItem.querySelector('.todo-item-task-time-hours'),
        todoItemTaskTimeMinutes = listItem.querySelector('.todo-item-task-time-minutes'),
        todoItemSave = listItem.querySelector('.todo-item-save');

    todoItemSave.classList.add('active');
    todoItemTime.classList.add('active');

    todoItemSave.addEventListener('click', () => {
        todoItemTaskTime.classList.add('active');
        todoItemSave.classList.remove('active');
        todoItemTime.classList.remove('active');

        

        if (todoItemTimeHours.value >= 0 && todoItemTimeHours.value < 10 && todoItemTimeHours.value.length !== 2) {
            todoItemTimeHours.value = '0' + todoItemTimeHours.value;
        } 
        if (todoItemTimeMinutes.value >= 0 && todoItemTimeMinutes.value < 10 && todoItemTimeMinutes.value.length !== 2) {
            todoItemTimeMinutes.value = '0' + todoItemTimeMinutes.value;
        }

        todoItemTaskTimeHours.textContent = todoItemTimeHours.value;
            todoItemTaskTimeMinutes.textContent = todoItemTimeMinutes.value;

        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {
                list[i].timeHours = todoItemTaskTimeHours.innerText;
                list[i].timeMinutes = todoItemTaskTimeMinutes.innerText;
                localStorage.setItem('ToDo', JSON.stringify(list));
            };
        };

    })

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
    let listItem = this.closest('.todo-item');
    let listId = listItem.dataset.id;

    if (todoList.contains(listItem)) {
        todoListComplete.appendChild(listItem);
    } else if (todoListComplete.contains(listItem)) {
        todoList.appendChild(listItem);
    }

    listItem.classList.toggle('completed');

    for (let i = 0; i < list.length; i++) {
        if (list[i].id == listId) {
            if (list[i].check === true) {
                list[i].check = false;
            } else {
                list[i].check = true;
            }
            
            localStorage.setItem('ToDo', JSON.stringify(list));
        };
    };
}

function editTodoItem() {
    const listItem = this.closest('.todo-item');
    let listId = listItem.dataset.id;
    const title = listItem.querySelector('.todo-item-title');
    const editInput = listItem.querySelector('.todo-item-textfield'),
        todoItemSave = listItem.querySelector('.todo-item-save');

    listItem.classList.add('editing');
    editInput.value = title.innerText;
    todoItemSave.classList.add('active');
    todoItemSave.addEventListener('click', () => {
        listItem.classList.remove('editing');
        todoItemSave.classList.remove('active');
        title.innerText = editInput.value;

        for (let i = 0; i < list.length; i++) {
            if (list[i].id == listId) {
                list[i].name = title.innerText;
                localStorage.setItem('ToDo', JSON.stringify(list));
            };
        };
    });    

}

function deleteTodoItem() {
    let listItem = this.closest('.todo-item');
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

function addLocal(title, complete, timeH, timeM) {

    list.push({
        name: title,
        id: id,
        check: complete,
        timeHours: timeH, 
        timeMinutes: timeM
    });

    localStorage.setItem('ToDo', JSON.stringify(list));
    id++;
}

function deleteLocal() {
    let clear = document.querySelector('.todo-header-info-clean');

    clear.addEventListener('click', () => {
        let todoItem = document.querySelectorAll('.todo-item');

        todoItem.forEach(item => {
            item.parentElement.removeChild(item);
        });
        localStorage.clear();
        location.reload();
    });
}
deleteLocal();

todoForm.addEventListener('submit', addTodoItem);

// Вывод времени

function getTime() {
    const timeNow = new Date();
    const timeHours = timeNow.getHours();
    let timeMinutes = timeNow.getMinutes();

    let hours = document.querySelector('.todo-header-hours');
    let minutes = document.querySelector('.todo-header-minutes');

    if (timeMinutes >= 0 && timeMinutes < 10) {
        timeMinutes = '0' + timeMinutes;
    }

    hours.textContent = timeHours;
    minutes.textContent = timeMinutes;
};

setInterval(getTime, 60000);