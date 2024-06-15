export const validateUserRegisterValues = (serviceError,inputValues) => {
    let inputErrors = {};

    const username = inputValues.username;
    const email = inputValues.email;
    const password = inputValues.password;
    const repeatPass = inputValues.repeatPass;

    if (username.length < 5) {
        inputErrors.Username = "Username must be at least 5 characters!";
    }
    if (email.length < 10) {
        inputErrors.Email = "Email must be at least 10 characters!";
    }
    if (password === "") {
        inputErrors.Password = "Password is empty!";
    }
    if (password !== repeatPass) {
        inputErrors.Password = "Password mismatch!";
    }
    if (serviceError) {
        inputErrors.serviceError = serviceError
    }

    return inputErrors;
};

export const validateUserLoginValues = (errorMsg) => {
    let inputErrors = {};

    if (errorMsg) {
        inputErrors.Email = errorMsg;
        inputErrors.Password = errorMsg;
    }
    return inputErrors;
};
