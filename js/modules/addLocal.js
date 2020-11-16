import { list } from './globals';

// Добавление задач в переменную из локального хранилища

function addLocal(title, id, complete, date, time, priority, repeat) {
    
    list.push({
        name: title,
        id: id,
        check: complete,
        date: date, 
        time: time,
        priority: priority,
        repeat: repeat
    });
    localStorage.setItem('ToDo', JSON.stringify(list));
}

export default addLocal;