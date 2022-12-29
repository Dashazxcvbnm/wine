function form() {
    let successModal = document.querySelector('.modal-window');
    successModal.style.display = 'none'

    const button = document.querySelector('.form__button');
    
    button.addEventListener('click', ()=> {
        const inputs = document.querySelectorAll('.form__input');
        console.log(inputs)
        const inputName = document.querySelector('.form__input--name');
        const inputPhone = document.querySelector('.form__input--phone');
        // const inputAdds = document.querySelector('.form__input--adds')
        
        // const { valid, message } = validate(inputs.arr);
        
        const { validName, messageName } = validateName(inputName.value);
        const { validPhone, messagePhone } = validatePhone(inputPhone.value);
        // if (!(inputs[0].length === 0)) {
        //     inputs.setCustomValidity(message);
        //     inputs.reportValidity();
        //      inputs.setCustomValidity("Заполните поле");
        // }
        if (!validName) {

            inputName.setCustomValidity(messageName);
            inputName.reportValidity();
        } else if (!validPhone) {
            inputPhone.setCustomValidity(messagePhone);
            inputPhone.reportValidity();
        } else {
            inputPhone.setValidity({typeMismatch: false})
            inputName.setValidity({typeMismatch: false})
            console.log('Валидная форма');
            successModal.style.display = 'block';
            // inputName.style.border-bottom = '1px solid rgb(255, 255, 255)';
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

// function validate(arr) {
//     if (arr.items(0)  === 0) {

//         return { valid: false, message: 'Заполните поле' }
//     }
//     return { valid: true, message: '' }
// } 

function validateName(value) {
    const globalRegex = new RegExp('[А-Яа-яЁё]', 'g');
    console.log(globalRegex)
    // if (value.length  === 0) {
    //     return { validName: false, messageName: 'Заполните поле' }
    // }
    if (!globalRegex.test(value) && value.length <= 2 ) {
        return { validName: false, messageName: 'Имя некорректно' }
    } 
    return { validName: true, messageName: '' }
}

function validatePhone(value) {
    const globalRegex = new RegExp('^[8][0-9]{10}$');
    // if (value.length  === 0) {
    //     return { validPhone: false, messagePhone: 'Заполните поле' }
    // }
    if (!globalRegex.test(value)) {
        return { validPhone: false, messagePhone: 'Телефон некорректный' }
    } 
    return { validPhone: true, messagePhone: '' }
}

window.onload = (event) => {
    form()
}

