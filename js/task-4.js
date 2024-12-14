const loginForm = document.querySelector('.login-form');

const handleSubmit = e => {
    e.preventDefault();
    const emailValue = e.target.elements.email.value.trim();
    const passwordValue = e.target.elements.password.value.trim();
    if (emailValue == "" || passwordValue == "") {
        alert("All form fields must be filled in");
    }
    else {
        const credentials = {
            email: emailValue,
            password: passwordValue
        };
        console.log(credentials);
        e.target.reset();
    }
};

loginForm.addEventListener("submit", handleSubmit);