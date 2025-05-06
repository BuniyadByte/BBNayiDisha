(function () {
    'use strict'

    const authModal = document.getElementById('authModal');

    // Confirm password validation
    //const registerForm = authModal.querySelector('form[action="/Account/Register"]');
    //const passwordInput = registerForm.querySelector('#registerPassword');
    //const confirmPasswordInput = registerForm.querySelector('#registerConfirmPassword');
    //const confirmPasswordFeedback = registerForm.querySelector('#confirmPasswordFeedback');

    //confirmPasswordInput.addEventListener('input', () => {
    //    if (confirmPasswordInput.value === passwordInput.value) {
    //        confirmPasswordInput.setCustomValidity('');
    //        confirmPasswordFeedback.style.display = 'none';
    //    } else {
    //        confirmPasswordInput.setCustomValidity('Passwords do not match.');
    //        confirmPasswordFeedback.style.display = 'block';
    //    }
    //});

    // Show register tab from link
    const showRegisterLink = authModal.querySelector('#showRegisterLink');
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        const registerTab = new bootstrap.Tab(document.getElementById('register-tab'));
        registerTab.show();
    });

    // Show login tab from link
    const showLoginLink = authModal.querySelector('#showLoginLink');
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        const loginTab = new bootstrap.Tab(document.getElementById('login-tab'));
        loginTab.show();
    });

    // Enable Bootstrap validation styles on submit
    authModal.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}) ();