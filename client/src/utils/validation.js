import { isAllFieldsRequired, trimWhiteSpaces } from "./helperFunctions";

export const validateUserRegisterValues = (inputValues) => {
    let inputErrors = {};

    inputValues = trimWhiteSpaces(inputValues);

    const username = inputValues.username;
    const email = inputValues.email;
    const password = inputValues.password;
    const repeatPass = inputValues.repeatPass;
    const phoneNumber = inputValues.phoneNumber;

    if (!isAllFieldsRequired(username, email, password, repeatPass)) {
        inputErrors.AllFieldsRequired = "All fields are required!";
    }

    if (username.length < 5) {
        inputErrors.Username = "Username must be at least 5 characters!";
    }
    if (email.length < 10) {
        inputErrors.Email = "Email must be at least 10 characters!";
    }
    if (phoneNumber.length < 10) {
        inputErrors.PhoneNumber = "Phone Number must be at least 10 characters!";
    }
    if (isNaN(phoneNumber)) {
        inputErrors.PhoneNumber =
            "Phone Number must contain only numbers!";
    }
    if (password === "") {
        inputErrors.Password = "Password is empty!";
    }
    if (password !== repeatPass) {
        inputErrors.Password = "Password mismatch!";
    }

    return inputErrors;
};

export const validateUserLoginValues = (inputValues) => {
    let inputErrors = {};

    inputValues = trimWhiteSpaces(inputValues);

    const email = inputValues.email;
    const password = inputValues.password;

    if (!isAllFieldsRequired(email, password)) {
        inputErrors.AllFieldsRequired = "All fields are required!";
    }
    return inputErrors;
};

export const validateClassValues = (inputValues) => {
    let inputErrors = {};

    inputValues = trimWhiteSpaces(inputValues);

    const title = inputValues.title
    const description = inputValues.description
    const phoneNumber = inputValues["phone-number"]
    const age = inputValues.age
    const image = inputValues.image

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
    if (isNaN(phoneNumber)) {
        inputErrors.PhoneNumber = "Phone Number must consists of digits only";
    }
    if (!image.startsWith("https://")) {
        inputErrors.Image = "Image must start with https://!";
    }
    if (age <= 0) {
        inputErrors.Age = "Age must be a positive number!";
    }

    return inputErrors;
};

export const commentsValidation = (inputValues) => {
    let inputErrors = {};

    inputValues = trimWhiteSpaces(inputValues);

    const username = inputValues.username;
    const comment = inputValues.comment;

    if (!isAllFieldsRequired(username, comment)) {
        inputErrors.AllFieldsRequired = "All fields are required!";
    }
    return inputErrors;
};
