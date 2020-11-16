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

export default toggleOptions;