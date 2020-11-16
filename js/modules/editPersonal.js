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


export default editPersonal;