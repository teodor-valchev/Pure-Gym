export const validateUserRegisterValues = (inputValues) => {
    const username = inputValues.username;
    const email = inputValues.email;
    const password = inputValues.password;
    const repeatPass = inputValues.repeatPass;

    let inputErrors = {};

    if (username.length < 5) {
        inputErrors.Username = "Username must be at least 5 characters!";
    }
    if (email.length < 5) {
        inputErrors.Email = "Email must be at least 5 characters!";
    }
    if (password === "") {
        inputErrors.Password = "Password is empty!";
    }
    if (password !== repeatPass) {
        inputErrors.Password = "Password mismatch!";
    }
    return inputErrors;
};

// need to check the user and than show appropriate message
export const validateUserLoginValues = (inputValues) => {
    const email = inputValues.email;
    const password = inputValues.password;

    let inputErrors = {};

    if (email.length < 5) {
        inputErrors.Email = "Email must be at least 5 characters!";
    }
    if (password === "") {
        inputErrors.Password = "Password is empty!";
    }
    return inputErrors;
};
