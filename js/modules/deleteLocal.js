import { list } from './globals';
import calculatePercentage from './calculatePercentage';

// Удаление всех элементов из планировщика задач

function deleteLocal() {
    let clear = document.querySelector('.todo-header-info-clean');

    clear.addEventListener('click', () => {
        let todoItem = document.querySelectorAll('.todo-item');

        todoItem.forEach(item => {
            item.parentElement.removeChild(item);
        });

        list.length = 0; // Очищаем переменную
        calculatePercentage(); 
        localStorage.removeItem('ToDo');
    });
}

export default deleteLocal;