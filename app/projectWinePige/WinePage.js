function form() {
    const button = document.querySelector('.form__button');
    button.addEventListener('click', ()=> {
        const inputName = document.querySelector('.form__input--name');
        const inputPhone = document.querySelector('.form__input--phone');
        const inputAdds = document.querySelector('.form__input--adds')

        const { validName, messageName } = validateName(inputName.value);
        const { validPhone, messagePhone } = validatePhone(inputPhone.value);
        const { validAdds, messageAdds } = validateAdds(inputAdds.value);
        if (!validName) {
            inputName.setCustomValidity(messageName);
        } 
        else {
            inputName.setCustomValidity('');
        }
        if(!validPhone) {
            inputPhone.setCustomValidity(messagePhone);
        }
        else {
            inputPhone.setCustomValidity('');
        }  
        if (!validAdds) {
            inputAdds.setCustomValidity(messageAdds);
        }
        else {
            inputAdds.setCustomValidity('');
        }  
        if (validName && validPhone && validAdds) {
            inputName.value = "";
            inputPhone.value = "";
            inputAdds.value = "";
            console.log('Валидная форма');
            let successModal = document.querySelector('.modal-window');
            successModal.style.display = 'block';
             setTimeout(()=> {
                successModal.style.display = 'none'
             }, 5000)
        }
        const inputListener = inputName.addEventListener('input', ()=> {
            inputName.removeEventListener('input', inputListener, false);
        })
        return
    })
}

function validateName(value) {
    if (value.length  === 0) {
        return { validName: false, messageName: 'Заполните поле' }
    }
    if (!(/[А-Я][а-я]+/g.test(value)) || (value.length <= 2)) {
        return { validName: false, messageName: 'Имя некорректно' }
    } 
    return { validName: true, messageName: '' }
}

function validatePhone(value) {
    const globalRegex = new RegExp('^[8][0-9]{10}$');
    if (value.length  === 0) {
        return { validPhone: false, messagePhone: 'Заполните поле' }
    }
    if (!globalRegex.test(value)) {
        return { validPhone: false, messagePhone: 'Телефон некорректный' }
    } 
    return { validPhone: true, messagePhone: '' }
}

function validateAdds(value) {
    if (value.length  === 0) {
        return { validAdds: false, messageAdds: 'Заполните поле' }
    }
    return { validAdds: true, messageAdds: '' }
}

window.onload = (event) => {
    form()
}

