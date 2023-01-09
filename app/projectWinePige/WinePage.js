function form() {
    const formButton = document.querySelector('.form__button');
    formButton.addEventListener('click', ()=> {
        const inputName = document.querySelector('.form__input--name');
        const inputPhone = document.querySelector('.form__input--phone');
        const inputAdds = document.querySelector('.form__input--adds')
    
        const validName = validateName(inputName);
        const validPhone = validatePhone(inputPhone);
        const validAdds = validateAdds(inputAdds);

        if (validName && validPhone && validAdds) {
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

function validateName(input) {
    const value = input.value;
    if (!value.length) {
        input.setCustomValidity('Заполните поле');
        return false
    }
if (!(/[А-Я][а-я]+/g.test(value)) || (value.length <= 2)) {
        input.setCustomValidity('Имя некорректно');
        return false
    } 
    input.setCustomValidity('');
    return true
}

function validatePhone(input) {
    const value = input.value;
    const globalRegex = new RegExp('^[8][0-9]{10}$');
    if (!value.length) {
        input.setCustomValidity('Заполните поле');
        return false
    }
    if (!globalRegex.test(value)) {
        input.setCustomValidity('Телефон некорректный');
        return false
    } 
    input.setCustomValidity('');
    return true
}

function validateAdds(input) {
    const value = input.value;
    if (!value.length) {
        input.setCustomValidity('Заполните поле');
        return false
    }
    input.setCustomValidity('');
    return true
}

window.onload = (event) => {
    form()
}

