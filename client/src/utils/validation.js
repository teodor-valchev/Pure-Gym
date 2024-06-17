import { isAllFieldsRequired } from "./helperFunctions";

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

export const validateClassValues = (inputValues) => {
    let inputErrors = {};

    const title = inputValues.title;
    const description = inputValues.description;
    const phoneNumber = inputValues['phone-number'];
    const age = inputValues.age;
    const image = inputValues.image;

    if (!isAllFieldsRequired(title, description, phoneNumber, age, image)) {
        inputErrors.AllFieldsRequired = "All fields are required!";
    }

    if (title.length < 5) {
        inputErrors.Title = "Title must be at least 5 characters!";
    }
    if (description.length < 10) {
        inputErrors.Description = "Description must be at least 10 characters!";
    }
    if (phoneNumber.length < 10) {
        inputErrors.PhoneNumber = "Phone Number must be at least 10 digits!";
    }
    if (!image.startsWith("https:\/\/")) {
        inputErrors.Image = "Image must start with https:\/\/!";
    }
    if (age <= 0) {
        inputErrors.Age = "Age must be a positive number!";
    }

    return inputErrors;
};
