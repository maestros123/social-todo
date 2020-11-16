/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTodo */ "./js/modules/addTodo.js");
/* harmony import */ var _modules_createInLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createInLocal */ "./js/modules/createInLocal.js");
/* harmony import */ var _modules_calculatePercentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculatePercentage */ "./js/modules/calculatePercentage.js");
/* harmony import */ var _modules_getTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getTime */ "./js/modules/getTime.js");
/* harmony import */ var _modules_showTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showTasks */ "./js/modules/showTasks.js");
/* harmony import */ var _modules_editPersonal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editPersonal */ "./js/modules/editPersonal.js");
/* harmony import */ var _modules_overdueTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/overdueTask */ "./js/modules/overdueTask.js");
;







(0,_modules_addTodo__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_createInLocal__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_modules_calculatePercentage__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_modules_getTime__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_modules_showTasks__WEBPACK_IMPORTED_MODULE_4__.default)();
(0,_modules_editPersonal__WEBPACK_IMPORTED_MODULE_5__.default)();
(0,_modules_overdueTask__WEBPACK_IMPORTED_MODULE_6__.default)();

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



setInterval(_modules_overdueTask__WEBPACK_IMPORTED_MODULE_6__.default, 60000);

setInterval(_modules_getTime__WEBPACK_IMPORTED_MODULE_3__.default, 60000);



/***/ }),

/***/ "./js/modules/addLocal.js":
/*!********************************!*\
  !*** ./js/modules/addLocal.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
;

// Добавление задач в переменную из локального хранилища

function addLocal(title, id, complete, date, time, priority, repeat) {
    
    _globals__WEBPACK_IMPORTED_MODULE_0__.list.push({
        name: title,
        id: id,
        check: complete,
        date: date, 
        time: time,
        priority: priority,
        repeat: repeat
    });
    localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLocal);

/***/ }),

/***/ "./js/modules/addTodo.js":
/*!*******************************!*\
  !*** ./js/modules/addTodo.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo */ "./js/modules/createTodo.js");
;


// Добавление задачи на страницу

let id;

function addTodoItem() {

    _globals__WEBPACK_IMPORTED_MODULE_0__.todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (_globals__WEBPACK_IMPORTED_MODULE_0__.list.length !== 0) {
            id = _globals__WEBPACK_IMPORTED_MODULE_0__.list.length + 1;
            _globals__WEBPACK_IMPORTED_MODULE_0__.list.forEach(item => {
                if (item.id == id) {
                    id++;
                }
            });
        } else {
            id = 1;
        }

        const todoItem = _globals__WEBPACK_IMPORTED_MODULE_0__.addInput.value;

        if (todoItem) {
            (0,_createTodo__WEBPACK_IMPORTED_MODULE_1__.default)(todoItem, id, _globals__WEBPACK_IMPORTED_MODULE_0__.todoList);

        } else {
            alert('Задача не введена!');
        }

        _globals__WEBPACK_IMPORTED_MODULE_0__.addInput.value = '';
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoItem);

/***/ }),

/***/ "./js/modules/bindEvents.js":
/*!**********************************!*\
  !*** ./js/modules/bindEvents.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _toggleTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleTodo */ "./js/modules/toggleTodo.js");
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTodo */ "./js/modules/editTodo.js");
/* harmony import */ var _delTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delTodo */ "./js/modules/delTodo.js");
;



// Назначение событий на кнопки

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.todo-item-checkbox'),
        editButton = todoItem.querySelector('.todo-item-edit'),
        deleteButton = todoItem.querySelector('.todo-item-del');

    checkbox.addEventListener('change', _toggleTodo__WEBPACK_IMPORTED_MODULE_0__.default);
    editButton.addEventListener('click', _editTodo__WEBPACK_IMPORTED_MODULE_1__.default);
    deleteButton.addEventListener('click', _delTodo__WEBPACK_IMPORTED_MODULE_2__.default);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindEvents);

/***/ }),

/***/ "./js/modules/calculatePercentage.js":
/*!*******************************************!*\
  !*** ./js/modules/calculatePercentage.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
;

// Расчет процента выполненных задач

function calculatePercentage () {
    let donePercent = document.querySelector('.todo-header-done-percent'),
        donePercentText = document.querySelector('.todo-header-done-percent p'),
        totalTodo = _globals__WEBPACK_IMPORTED_MODULE_0__.list.length,
        doneTodo = document.querySelectorAll('.todo-item.completed').length;

    if (totalTodo === 0) {
        donePercentText.textContent = '0%';
        donePercent.style.width = '0%';
    } else {
        let percentTodo = Math.round((100 / totalTodo) * doneTodo);
    
        donePercentText.textContent = `${percentTodo}%`;
        donePercent.style.width = `${percentTodo}%`;
    }

    
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculatePercentage);
    


/***/ }),

/***/ "./js/modules/closeModal.js":
/*!**********************************!*\
  !*** ./js/modules/closeModal.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
/* harmony import */ var _translateData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translateData */ "./js/modules/translateData.js");
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDate */ "./js/modules/getDate.js");
/* harmony import */ var _overdueTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overdueTask */ "./js/modules/overdueTask.js");
;



// Действия при закрытии модального окна

function closeModal(listItem) {
    let modal = document.querySelector('.modal'),
        modalDialog = modal.querySelector('.modal-dialog'),
        modalSwitch = modal.querySelectorAll('.switch');

    const close = modal.querySelector('.modal-close');

    let title = listItem.querySelector('.todo-item-title'),
        priority = listItem.querySelector('.todo-item-priority'),
        priorityText = listItem.querySelector('.todo-item-priority p'),
        dateTodo = listItem.querySelector('.todo-item-comment-date'),
        timeTodo = listItem.querySelector('.todo-item-comment-time');

    close.addEventListener('click', (saveOptions));


    function saveOptions() {
        modalSwitch.forEach(item => {

            if (item.classList.contains('active')) { // Сохранение всех опций 

                if (item.parentElement.querySelector('input') != null) {

                    if (item.parentElement.classList.contains('modal-dialog-name')) { // Название задачи
                        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                                _globals__WEBPACK_IMPORTED_MODULE_0__.list[i].name = item.parentElement.querySelector('input').value;
                                localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                                title.innerText = item.parentElement.querySelector('input').value;
                            }
                        }

                    } else if (item.parentElement.classList.contains('modal-dialog-date')) {// Дата задачи
                        let date = item.parentElement.querySelector('input').value;
                        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                                _globals__WEBPACK_IMPORTED_MODULE_0__.list[i].date = date;
                                localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                                let fullDate = (0,_translateData__WEBPACK_IMPORTED_MODULE_1__.default)(date);
                                dateTodo.innerText = fullDate;
                            }
                        }
                    } else if (item.parentElement.classList.contains('modal-dialog-time')) { // Время задачи
                        let time = item.parentElement.querySelector('input').value;
                        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                                _globals__WEBPACK_IMPORTED_MODULE_0__.list[i].time = item.parentElement.querySelector('input').value;
                                localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                                timeTodo.innerText = time;
                            }
                        }
                    }
                } else {
                    if (item.parentElement.classList.contains('modal-dialog-priority')) { // Приоритет задачи
                        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                                _globals__WEBPACK_IMPORTED_MODULE_0__.list[i].priority = item.parentElement.querySelector('p.priority-active').dataset.priority;
                                localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                                if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].priority == 'normal') {
                                    priority.classList.add('normal');
                                    priority.classList.remove('high');
                                    priorityText.innerText = '!';
                                } else if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].priority == 'high') {
                                    priority.classList.remove('normal');
                                    priority.classList.add('high');
                                    priorityText.innerText = '!!';
                                } else {
                                    priority.classList.remove('normal');
                                    priority.classList.remove('high');
                                    priorityText.innerText = '';
                                }
                            }
                        }
                    } else if (item.parentElement.classList.contains('modal-dialog-repeat')) { // Повторяемость задачи
                        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                                _globals__WEBPACK_IMPORTED_MODULE_0__.list[i].repeat = item.parentElement.querySelector('p.repeat-active').dataset.repeat;
                                if (!_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].date) {
                                    let timeNow = new Date(),
                                        fullDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_2__.default)(timeNow);
                                    (0,_translateData__WEBPACK_IMPORTED_MODULE_1__.default)(fullDate);
                                    _globals__WEBPACK_IMPORTED_MODULE_0__.list[i].date = fullDate;
                                    localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                                    let dateTodo = listItem.querySelector('.todo-item-comment-date');
                                    fullDate = (0,_translateData__WEBPACK_IMPORTED_MODULE_1__.default)(fullDate);
                                    dateTodo.innerText = fullDate;
                                }
                            }
                        }
                    }

                }
            } else { // Удалить опции, при их выключении
                if (item.parentElement.classList.contains('modal-dialog-name')) {

                } else if (item.parentElement.classList.contains('modal-dialog-date')) {

                    for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                        if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                            delete(_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].date);
                            localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                            dateTodo.innerText = '';
                        }
                    }
                } else if (item.parentElement.classList.contains('modal-dialog-time')) {
                    for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                        if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                            delete(_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].time);
                            localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                            timeTodo.innerText = '';
                        }
                    }
                } else if (item.parentElement.classList.contains('modal-dialog-priority')) {
                    for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                        if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                            delete(_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].priority);
                            localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                            priority.classList.remove('normal');
                            priority.classList.remove('high');
                            priorityText.innerText = '';
                        }
                    }
                } else if (item.parentElement.classList.contains('modal-dialog-repeat')) {
                    for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
                        if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == modal.dataset.modal) {
                            delete(_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].repeat);
                            localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
                        }
                    }
                }
            }

            (0,_overdueTask__WEBPACK_IMPORTED_MODULE_3__.default)();

        });
        close.removeEventListener('click', (saveOptions));
        modalDialog.classList.remove('modal-dialog-open');
        setTimeout(() => {
            modal.style.display = '';
        }, 300);
    }






}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModal);

/***/ }),

/***/ "./js/modules/createInLocal.js":
/*!*************************************!*\
  !*** ./js/modules/createInLocal.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./js/modules/createTodo.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");

;


// Добавление элементов на страницу из локального хранилища

function createInLocal () {
    let itemInLocal = JSON.parse(localStorage.getItem('ToDo'));

    let id = _globals__WEBPACK_IMPORTED_MODULE_1__.list.length;

if (itemInLocal == null) {
    id = 0;
} else {
    id = _globals__WEBPACK_IMPORTED_MODULE_1__.list.length;
    itemInLocal.forEach((item, i) => {
        if (itemInLocal[i].check === false) {
            (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__.default)(item.name, item.id, _globals__WEBPACK_IMPORTED_MODULE_1__.todoList, item.date, item.time, item.priority, item.repeat);
        } else {
            (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__.default)(item.name, item.id, _globals__WEBPACK_IMPORTED_MODULE_1__.todoListComplete, item.date, item.time, item.priority, item.repeat);
        }
    }); 
}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInLocal);

/***/ }),

/***/ "./js/modules/createTodo.js":
/*!**********************************!*\
  !*** ./js/modules/createTodo.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
/* harmony import */ var _addLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLocal */ "./js/modules/addLocal.js");
/* harmony import */ var _bindEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindEvents */ "./js/modules/bindEvents.js");
/* harmony import */ var _calculatePercentage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculatePercentage */ "./js/modules/calculatePercentage.js");
/* harmony import */ var _translateData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateData */ "./js/modules/translateData.js");
;





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

    if (parent === _globals__WEBPACK_IMPORTED_MODULE_0__.todoListComplete) {
        todoItem.classList.add('completed');
        let checkbox = todoItem.querySelector('.todo-item-checkbox');
        checkbox.setAttribute('checked', 'checked');

        (0,_addLocal__WEBPACK_IMPORTED_MODULE_1__.default)(title, id, true, date, time, priority, repeat);
    } else {
        (0,_addLocal__WEBPACK_IMPORTED_MODULE_1__.default)(title, id, false, date, time, priority, repeat);
    }
    
    if (time) {
        let timeTodo = todoItem.querySelector('.todo-item-comment-time');
        timeTodo.innerText = time;
    }

    if (date) {
        let fullDate = (0,_translateData__WEBPACK_IMPORTED_MODULE_4__.default)(date);
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

    (0,_bindEvents__WEBPACK_IMPORTED_MODULE_2__.default)(todoItem);
    (0,_calculatePercentage__WEBPACK_IMPORTED_MODULE_3__.default) ();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoItem);

/***/ }),

/***/ "./js/modules/delTodo.js":
/*!*******************************!*\
  !*** ./js/modules/delTodo.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
/* harmony import */ var _calculatePercentage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatePercentage */ "./js/modules/calculatePercentage.js");
;


// Удаление выбранной задачи

function deleteTodoItem() {
    let listItem = this.closest('.todo-item');
    let listId = listItem.dataset.id;


    if (_globals__WEBPACK_IMPORTED_MODULE_0__.todoList.contains(listItem)) {
        _globals__WEBPACK_IMPORTED_MODULE_0__.todoList.removeChild(listItem);
        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == listId) {

                _globals__WEBPACK_IMPORTED_MODULE_0__.list.splice(i, 1);
                localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
            }
        }
    } else if (_globals__WEBPACK_IMPORTED_MODULE_0__.todoListComplete.contains(listItem)) {
        _globals__WEBPACK_IMPORTED_MODULE_0__.todoListComplete.removeChild(listItem);
        for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_0__.list.length; i++) {
            if (_globals__WEBPACK_IMPORTED_MODULE_0__.list[i].id == listId) {
                _globals__WEBPACK_IMPORTED_MODULE_0__.list.splice(_globals__WEBPACK_IMPORTED_MODULE_0__.list[i], 1);
                localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_0__.list));
            }
        }
    }
    (0,_calculatePercentage__WEBPACK_IMPORTED_MODULE_1__.default) ();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTodoItem);

/***/ }),

/***/ "./js/modules/editModalOptions.js":
/*!****************************************!*\
  !*** ./js/modules/editModalOptions.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
/* harmony import */ var _toggleOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleOptions */ "./js/modules/toggleOptions.js");
;


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
    _globals__WEBPACK_IMPORTED_MODULE_0__.list.forEach(item => {
        if (item.id == dataId) {
            if (item.time) {
                (0,_toggleOptions__WEBPACK_IMPORTED_MODULE_1__.default) ('.modal-dialog-time', item.time);
            }
            if (item.date) {
                (0,_toggleOptions__WEBPACK_IMPORTED_MODULE_1__.default) ('.modal-dialog-date', item.date);
            }
            if (item.priority) {
                (0,_toggleOptions__WEBPACK_IMPORTED_MODULE_1__.default) ('.modal-dialog-priority', item.priority);
            }
            if (item.repeat) {
                (0,_toggleOptions__WEBPACK_IMPORTED_MODULE_1__.default) ('.modal-dialog-repeat', item.repeat);
            }
        }
    });


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editModalOptions);

/***/ }),

/***/ "./js/modules/editPersonal.js":
/*!************************************!*\
  !*** ./js/modules/editPersonal.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
 // Установка аватарки и имени

function editPersonal() {
    let avatar = document.querySelector('.personal-avatar-active img'),
        avatarInLocal = localStorage.getItem('avatar'),
        personalName = document.querySelector('.personal-info-title h2'),
        personalNameInput = document.querySelector('.personal-info-title input'),
        nameInLocal = localStorage.getItem('Name');

        if (avatarInLocal) {
            avatar.src = avatarInLocal;
        }

        if (nameInLocal) {
            personalName.innerText = nameInLocal;
        }

    const personalEdit = document.querySelector('.personal-edit'),
        personalAvatar = document.querySelector('.personal-avatar'),
        personalAvatarActive = document.querySelector('.personal-avatar-active'),
        personalAvatarImg = document.querySelector('.personal-avatar-active img'),
        personalAvatarChoice = document.querySelector('.personal-avatar-choice'),
        personalAvatars = document.querySelectorAll('.personal-avatar-choice-item img');

    personalEdit.addEventListener('click', () => {
        personalAvatar.style.width = '100%';
        personalAvatarActive.style.display = 'none';
        personalAvatarChoice.style.display = 'flex';

        personalAvatars.forEach(item => {
            item.addEventListener('click', () => {
                personalAvatarImg.src = item.src;
                personalAvatarChoice.style.display = 'none';
                personalAvatarActive.style.display = 'block';
                personalAvatar.style.width = '30%';

                localStorage.setItem('avatar', item.src);
            });
        });
    });

    personalName.addEventListener('click', () => {
        personalName.style.display = 'none';
        personalNameInput.value = personalName.innerText;
        personalNameInput.style.display = 'block';
    });

    personalNameInput.addEventListener('change', () => {
        personalNameInput.style.display = 'none';
        personalName.innerText = personalNameInput.value;
        personalName.style.display = 'block';
        localStorage.setItem('Name', personalName.innerText);
    });
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editPersonal);

/***/ }),

/***/ "./js/modules/editTodo.js":
/*!********************************!*\
  !*** ./js/modules/editTodo.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _editModalOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editModalOptions */ "./js/modules/editModalOptions.js");
/* harmony import */ var _closeModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeModal */ "./js/modules/closeModal.js");

;


// Редактировние задачи 

function editTodoItem() {
    const listItem = this.closest('.todo-item');

    let title = listItem.querySelector('.todo-item-title'), 
        dataId = listItem.dataset.id;

    let modal = document.querySelector('.modal'),
        modalDialog = modal.querySelector('.modal-dialog'),
        modalMore = modal.querySelector('.modal-dialog-item-more input');

    (0,_editModalOptions__WEBPACK_IMPORTED_MODULE_0__.default)(dataId);

    modal.style.display = 'flex';

    setTimeout(() => {
        modalDialog.classList.add('modal-dialog-open');
    }, 100);

    modalMore.value = title.innerText;
    modal.setAttribute('data-modal', dataId);

    (0,_closeModal__WEBPACK_IMPORTED_MODULE_1__.default) (listItem);
    

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodoItem);

/***/ }),

/***/ "./js/modules/getDate.js":
/*!*******************************!*\
  !*** ./js/modules/getDate.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//Получение даты

function getDate(date) {
    let timeYear = date.getFullYear(),
        timeMonth = date.getMonth() + 1,
        timeDay = date.getDate();

    if (timeMonth < 10) {
        timeMonth = '0' + timeMonth;
    }

    if (timeDay < 10) {
        timeDay = '0' + timeDay;
    }

    let fullDate = `${timeYear}-${timeMonth}-${timeDay}`;

    return fullDate;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDate);

/***/ }),

/***/ "./js/modules/getTime.js":
/*!*******************************!*\
  !*** ./js/modules/getTime.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//Получение и установка времени слева в планировщике задач

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
}
setInterval(getTime, 60000);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTime);

/***/ }),

/***/ "./js/modules/globals.js":
/*!*******************************!*\
  !*** ./js/modules/globals.js ***!
  \*******************************/
/*! namespace exports */
/*! export addInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! export list [provided] [no usage info] [missing usage info prevents renaming] */
/*! export todoForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export todoItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export todoList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export todoListComplete [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => /* binding */ list,
/* harmony export */   "todoForm": () => /* binding */ todoForm,
/* harmony export */   "addInput": () => /* binding */ addInput,
/* harmony export */   "todoList": () => /* binding */ todoList,
/* harmony export */   "todoListComplete": () => /* binding */ todoListComplete,
/* harmony export */   "todoItem": () => /* binding */ todoItem
/* harmony export */ });
// Установка глобальных переменных

let list = [],
    todoForm = document.querySelector('#todo-form'),
    addInput = document.querySelector('#add-input'),
    todoList = document.querySelector('#todo-list'),
    todoListComplete = document.querySelector('#todo-list-complete'),
    todoItem = document.querySelectorAll('.todo-item');

/***/ }),

/***/ "./js/modules/overdueTask.js":
/*!***********************************!*\
  !*** ./js/modules/overdueTask.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
;

function overdueTask() {
    let timeNow = new Date(),
        timeYear = timeNow.getFullYear(),
        timeMonth = timeNow.getMonth() + 1,
        timeDay = timeNow.getDate(),
        timeHours = timeNow.getHours(),
        timeMinutes = timeNow.getMinutes();

    function addRedBorder(item) {
        let todoItem = document.querySelectorAll('.todo-item');
        todoItem.forEach(todo => {
            if (todo.dataset.id == item.id) {
                todo.style.backgroundColor = '#f3b9b9';
            }
        });
    }

    _globals__WEBPACK_IMPORTED_MODULE_0__.list.forEach(item => {
        if (item.check != true) {
            if (item.date) {
                let year = item.date.slice(0, 4),
                    month = item.date.slice(5, 7),
                    day = item.date.slice(8, 10);

                if (year >= timeYear) {
                    if (month >= timeMonth) {
                        if (day >= timeDay) {
                            if (day == timeDay && item.time) {
                                
                                let hours = item.time.slice(0, 2),
                                    minutes = item.time.slice(3, 5);

                                if (hours >= timeHours) {
                                    if (hours == timeHours) {
                                        if (minutes >= timeMinutes) {

                                        } else addRedBorder(item);
                                    }
                                    
                                } else addRedBorder(item);
                            }
                        } else addRedBorder(item);
                    } else addRedBorder(item);
                } else addRedBorder(item);
            }
            if (item.time && !item.date) {
                let hours = item.time.slice(0, 2),
                    minutes = item.time.slice(3, 5);

                if (hours >= timeHours) {
                    if (minutes >= timeMinutes) {

                    } else addRedBorder(item);
                } else addRedBorder(item);
            }

        }
    });
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overdueTask);

/***/ }),

/***/ "./js/modules/repeatTask.js":
/*!**********************************!*\
  !*** ./js/modules/repeatTask.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ "./js/modules/getDate.js");
;

// Если задача является повторяемой, устанавливаем ей опции
function repeatTask(list) {

    let timeNow, fullDate;
    timeNow = new Date(list.date.replace(/-/g, ','));

    if (list.repeat == 'day') {        
        timeNow.setDate(timeNow.getDate() + 1);
        fullDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__.default)(timeNow);
    } else if (list.repeat == 'week') {
        timeNow.setDate(timeNow.getDate() + 7);
        fullDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__.default)(timeNow);   
    } else if (list.repeat == 'month') {
        timeNow.setMonth(timeNow.getMonth() + 1);
        fullDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__.default)(timeNow);
    } else if (list.repeat == 'year') {
        timeNow.setFullYear(timeNow.getFullYear() + 1);
        fullDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__.default)(timeNow);
    } 
    list.date = fullDate;
    list.check = false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repeatTask);

/***/ }),

/***/ "./js/modules/showTasks.js":
/*!*********************************!*\
  !*** ./js/modules/showTasks.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
;

// Устанавливаем видимость задач (Все или на 1 день)

function showTasks() {
    let taskItem = document.querySelectorAll('.personal-task-item');

    let timeNow = new Date(),
        timeYear = timeNow.getFullYear(),
        timeMonth = timeNow.getMonth() + 1,
        timeDay = timeNow.getDate();

    taskItem.forEach(task => {
        task.addEventListener('click', () => {

            if (!task.classList.contains('personal-task-item-active')) {
                let taskActive = document.querySelector('.personal-task-item-active');

                taskActive.classList.remove('personal-task-item-active');
                task.classList.add('personal-task-item-active');

                if (task.classList.contains('personal-task-daily')) {
                    _globals__WEBPACK_IMPORTED_MODULE_0__.list.forEach(item => {
                        if (item.date) {
                            let year = item.date.slice(0, 4),
                                month = item.date.slice(5, 7),
                                day = item.date.slice(8, 10);

                            if (year != timeYear || month != timeMonth || day != timeDay) {
                                let todoItem = document.querySelectorAll('.todo-item');

                                todoItem.forEach(todo => {
                                    if (todo.dataset.id == item.id) {
                                        todo.style.display = "none";
                                    }
                                });
                            }
                        }

                    });
                } else {
                    let todoItem = document.querySelectorAll('.todo-item');

                    todoItem.forEach(todo => {
                        todo.style.display = "flex";
                    });
                }
            }

        });
    });


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTasks);

/***/ }),

/***/ "./js/modules/toggleOptions.js":
/*!*************************************!*\
  !*** ./js/modules/toggleOptions.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function toggleOptions(parent, listKey) {
    let modal = document.querySelector('.modal');
    let modalElement = document.querySelector(`${parent}`);

    // Если опции были выбраны ранее, модальное окно открывается с ними
    if (modalElement.querySelector('input') != null) {
        modal.querySelector(`${parent}`).classList.add('active');
        modal.querySelector(`${parent} .switch`).classList.add('active');
        modal.querySelector(`${parent} .switch-round`).classList.add('switched');
        modal.querySelector(`${parent} .modal-dialog-item-more`).classList.add('active');
        modal.querySelector(`${parent} input`).value = listKey;
    } else {
        if (modalElement.classList.contains('modal-dialog-priority')) {
            modal.querySelector(`${parent}`).classList.add('active');
            modal.querySelector(`${parent} .switch`).classList.add('active');
            modal.querySelector(`${parent} .switch-round`).classList.add('switched');
            modal.querySelector(`${parent} .modal-dialog-item-more`).classList.add('active');

            let items = modal.querySelectorAll(`${parent} p`);
            items.forEach(item => {
                let active = modalElement.querySelector('.priority-active');

                if (listKey == item.dataset.priority) {
                    active.classList.remove('priority-active');
                    item.classList.add('priority-active');
                }
            });
        } else {
            modal.querySelector(`${parent}`).classList.add('active');
            modal.querySelector(`${parent} .switch`).classList.add('active');
            modal.querySelector(`${parent} .switch-round`).classList.add('switched');
            modal.querySelector(`${parent} .modal-dialog-item-more`).classList.add('active');

            let items = modal.querySelectorAll(`${parent} p`);
            items.forEach(item => {
                let active = modalElement.querySelector('.repeat-active');
                if (listKey == item.dataset.repeat) {
                    active.classList.remove('repeat-active');
                    item.classList.add('repeat-active');
                }
            });
        }

    }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleOptions);

/***/ }),

/***/ "./js/modules/toggleTodo.js":
/*!**********************************!*\
  !*** ./js/modules/toggleTodo.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _calculatePercentage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatePercentage */ "./js/modules/calculatePercentage.js");
/* harmony import */ var _repeatTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeatTask */ "./js/modules/repeatTask.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./js/modules/globals.js");
;



// Переключение элемента в позицию checked

function toggleTodoItem() {
    let listItem = this.closest('.todo-item');
    let listId = listItem.dataset.id;

    if (_globals__WEBPACK_IMPORTED_MODULE_2__.todoList.contains(listItem)) {
        _globals__WEBPACK_IMPORTED_MODULE_2__.todoListComplete.appendChild(listItem);
    } else if (_globals__WEBPACK_IMPORTED_MODULE_2__.todoListComplete.contains(listItem)) {
        _globals__WEBPACK_IMPORTED_MODULE_2__.todoList.appendChild(listItem);
    }

    listItem.classList.toggle('completed');
    (0,_calculatePercentage__WEBPACK_IMPORTED_MODULE_0__.default) ();

    for (let i = 0; i < _globals__WEBPACK_IMPORTED_MODULE_2__.list.length; i++) {
        if (_globals__WEBPACK_IMPORTED_MODULE_2__.list[i].id == listId) {
            
            if (_globals__WEBPACK_IMPORTED_MODULE_2__.list[i].check === true) {
                _globals__WEBPACK_IMPORTED_MODULE_2__.list[i].check = false;
            } else {
                _globals__WEBPACK_IMPORTED_MODULE_2__.list[i].check = true;
                if (_globals__WEBPACK_IMPORTED_MODULE_2__.list[i].repeat) {
                    (0,_repeatTask__WEBPACK_IMPORTED_MODULE_1__.default)(_globals__WEBPACK_IMPORTED_MODULE_2__.list[i]);
                }
                
            }
            
            localStorage.setItem('ToDo', JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_2__.list));
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTodoItem);

/***/ }),

/***/ "./js/modules/translateData.js":
/*!*************************************!*\
  !*** ./js/modules/translateData.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// Переводим дату в более удобочитаемый вид 

function translateData (date) {
    let monthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let year = date.slice(0,4),
        month = date.slice(5,7),
        day = date.slice(8,10);
    
    month = monthName[+month -1];

    let fullDate = ` ${day} ${month} ${year} года`;

    return fullDate;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translateData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map