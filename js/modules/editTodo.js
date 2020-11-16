
import editModalOptions from './editModalOptions';
import closeModal from './closeModal';

// Редактировние задачи 

function editTodoItem() {
    const listItem = this.closest('.todo-item');

    let title = listItem.querySelector('.todo-item-title'), 
        dataId = listItem.dataset.id;

    let modal = document.querySelector('.modal'),
        modalDialog = modal.querySelector('.modal-dialog'),
        modalMore = modal.querySelector('.modal-dialog-item-more input');

    editModalOptions(dataId);

    modal.style.display = 'flex';

    setTimeout(() => {
        modalDialog.classList.add('modal-dialog-open');
    }, 100);

    modalMore.value = title.innerText;
    modal.setAttribute('data-modal', dataId);

    closeModal (listItem);
    

}

export default editTodoItem;