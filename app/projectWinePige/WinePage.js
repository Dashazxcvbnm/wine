function form() {
    const formButton = document.querySelector('.form__button');
    formButton.addEventListener('click', ()=> {
        const inputName = document.querySelector('.form__input--name');
        const inputPhone = document.querySelector('.form__input--phone');
        const inputAdds = document.querySelector('.form__input--adds');

        const arrayValid = [];

        const validName = validateName(inputName);
        const validPhone = validatePhone(inputPhone);
        const validAdds = validateAdds(inputAdds);

        arrayValid.push(validName, validPhone, validAdds);

        const control = arrayValid.every(function(elem) {
            if (elem === true) {
                return true;
        }
            else {
                return false;
        }
     });

        if (control) {
            document.querySelector('.form').reset();
            const successModal = document.querySelector('.modal-window');
            successModal.style.display = 'block';
             setTimeout(()=> {
                successModal.style.display = 'none'
             }, 5000)
        }
        return
    })
}

function createErrorMessage(errorText, validationBlockName) {
    let errorMessage = document.querySelector(`.window-error__${validationBlockName}`);
    if (!errorMessage) {
        errorMessage = document.createElement('span');
        errorMessage.classList.add('window-error', `window-error__${validationBlockName}`);
    } 
    errorMessage.innerText = errorText;
    return document.querySelector('.window-error__wrapper').appendChild(errorMessage);
}

function removeErrorMessage(validationBlockName) {
    let errorMessage = document.querySelector(`.window-error__${validationBlockName}`);
    if (!errorMessage) {
        return
    }
    return document.querySelector(`.window-error__${validationBlockName}`).remove(); 
}

function createNameErrorMessage(errorText) {
    return createErrorMessage(errorText, 'name')
}

function createPhoneErrorMessage(errorText) {
    return createErrorMessage(errorText, 'phone')
}

function createAddsErrorMessage(errorText) {
    return createErrorMessage(errorText, 'adds')
}

function validateName(input) {
    const value = input.value;
    if (!value.length) {
        createNameErrorMessage('Заполните поле');
        input.classList.add('form__input_invalid');
        return false
    }
    if (!(/[А-Я][а-я]+/g.test(value)) || (value.length <= 2)) {
        createNameErrorMessage('Имя некорректно');
        input.classList.add('form__input_invalid');
        return false
    } 
    removeErrorMessage('name')
    input.classList.remove('form__input_invalid');
    return true
}

function validatePhone(input) {
    const value = input.value;
    const globalRegex = new RegExp('^[8][0-9]{10}$');
    if (!value.length) {
        createPhoneErrorMessage('Заполните поле');
        input.classList.add('form__input_invalid');
        return false
    }
    if (!globalRegex.test(value)) {
        createPhoneErrorMessage('Телефон некорректный');
        input.classList.add('form__input_invalid');
        return false
    } 
    removeErrorMessage('phone');
    input.classList.remove('form__input_invalid');
    return true
}

function validateAdds(input) {
    const value = input.value;
    if (!value.length) {
        createAddsErrorMessage('Заполните поле');
        input.classList.add('form__input_invalid');
        return false
    } 
    removeErrorMessage('adds');
    input.classList.remove('form__input_invalid');
    return true
}

window.onload = (event) => {
    form()
}

