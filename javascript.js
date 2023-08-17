const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone-number')

email.addEventListener('input', validateContact)
phoneNumber.addEventListener('input', validateContact)

function validateContact (event) {
    if (document.querySelector(`#${event.target.id}:valid`)) {
        document.querySelector(`#${event.target.id}:valid`).style.border = '1px solid rgb(0, 255, 0)';
        document.querySelector(`#${event.target.id}-message`).textContent = ''
    } else if (document.querySelector(`#${event.target.id}:invalid`)) {
        document.querySelector(`#${event.target.id}:invalid`).style.border = '1px solid red';
        switch (event.target.id) {
            case 'email':
                message = 'Please enter a valid email';
                break;
            case 'phone-number':
                message = 'Please enter a valid number';
        }
        document.querySelector(`#${event.target.id}-message`).textContent = message
    } 
}

const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

password.addEventListener('input', validatePassword)
confirmPassword.addEventListener('input', validatePassword)

function validatePassword () {
    if (document.getElementById('confirm-password').value == document.getElementById('password').value) {
        document.getElementById('password').style.border = '1px solid rgb(0, 255, 0)';
        document.getElementById('confirm-password').style.border = '1px solid rgb(0, 255, 0)';
        document.getElementById('confirm-password-message').textContent = '';
    } else {
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('confirm-password').style.border = '1px solid red';
        document.getElementById('confirm-password-message').textContent = 'Password does not match';
    }
    
}

const submit = document.getElementById('submit')

submit.addEventListener('submit', )