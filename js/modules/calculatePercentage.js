import { list } from './globals';

// Расчет процента выполненных задач

function calculatePercentage () {
    let donePercent = document.querySelector('.todo-header-done-percent'),
        donePercentText = document.querySelector('.todo-header-done-percent p'),
        totalTodo = list.length,
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

export default calculatePercentage;
    
