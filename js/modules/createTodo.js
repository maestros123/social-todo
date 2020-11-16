import { todoListComplete, todoList } from './globals';
import addLocal from './addLocal';
import bindEvents from './bindEvents';
import calculatePercentage from './calculatePercentage';
import translateData from './translateData';

// Создание новой задачи

function createTodoItem(title, id, parent, date, time, priority, repeat) {
   
    const item = `<li class="todo-item" data-id=${id}>
                    <input class="todo-item-checkbox" type="checkbox">
                    <div class="todo-item-priority">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 477.867 477.867">
                            <path d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456
                            c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863
                            c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z" />
                        </svg>
                        <p></p>
                    </div>
                    <div class="todo-item-name">
                        <div class="todo-item-title">${title}</div>
                        <div class="todo-item-comment"><div class="todo-item-comment-date"></div><div class="todo-item-comment-time"></div><div class="todo-item-comment-repeat"></div></div>   
                    </div>
                    <div class="todo-item-change">              
                        <div class="todo-item-edit"><img src="img/edit.svg" alt=""></div> 
                        <div class="todo-item-del"><img src="img/delete.svg" alt=""></div>
                    </div>                
                </li>`;

    const position = "beforeend";

    parent.insertAdjacentHTML(position, item);

    let todoItem = parent.lastChild;

    if (parent === todoListComplete) {
        todoItem.classList.add('completed');
        let checkbox = todoItem.querySelector('.todo-item-checkbox');
        checkbox.setAttribute('checked', 'checked');

        addLocal(title, id, true, date, time, priority, repeat);
    } else {
        addLocal(title, id, false, date, time, priority, repeat);
    }
    
    if (time) {
        let timeTodo = todoItem.querySelector('.todo-item-comment-time');
        timeTodo.innerText = time;
    }

    if (date) {
        let fullDate = translateData(date);
        let dateTodo = todoItem.querySelector('.todo-item-comment-date');
        dateTodo.innerText = fullDate;
    }

    let itemPriority = todoItem.querySelector('.todo-item-priority'),
        itemPriorityText = todoItem.querySelector('.todo-item-priority p');

    if (priority) {
        if (priority == 'normal') {
            itemPriority.classList.add('normal');
            itemPriorityText.innerText = '!';
        } else if (priority == 'high') {
            itemPriority.classList.add('high');
            itemPriorityText.innerText = '!!';
        } else {
            itemPriority.classList.remove('normal');
            itemPriority.classList.remove('high');
            itemPriorityText.innerText = '';
        }
    }

    bindEvents(todoItem);
    calculatePercentage ();

}

export default createTodoItem;