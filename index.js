// Form Validation Script
const form = document.getElementById('signupForm');
const inputs = document.querySelectorAll('input');
const errorMsgs = document.querySelectorAll('.error-msg');
const errorIcons = document.querySelectorAll('.error-icon');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    // Prevent default browser validation and submission
    e.preventDefault();

    // Remove HTML5 validation message
    inputs.forEach(input => input.setCustomValidity(''));

    // My validation logic
    let formIsValid = true;

    inputs.forEach((input, index) => {
        const isValid = input.type === 'email' ? validateEmail(input.value) : input.value.trim() !== '';
        

        if(!isValid) {
            formIsValid = false;
            input.classList.add('error');
            errorMsgs[index].style.display = 'block';
            errorIcons[index].style.display = 'block';

            // Prevent HTML5 validation message
            input.setCustomValidity('invalid');
        }else {
            input.classList.remove('error');
            errorMsgs[index].style.display = 'none';
            errorIcons[index].style.display = 'none';
            input.setCustomValidity('');
        }
    });
    if(formIsValid) {
        // Submit form programmatically
        form.submit();
    }
});

// Clear Errors on Input
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.remove('error');
            errorMsgs[index].style.display = 'none';
            errorIcons[index].style.display = 'none';
        }
    });
});