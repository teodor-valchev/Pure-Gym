export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const isAllFieldsRequired = (...params) =>
    params.every((field) => field !== "");

export const dateTransform = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    const formattedData = {
        year,
        month,
        day,
    };

    return formattedData;
};

export const trimWhiteSpaces = (inputValues) => {
    const trimmedValues = {};

    Object.keys(inputValues).forEach((key) => {
        const value = inputValues[key];
        if (typeof value === "string") {
            trimmedValues[key] = value.trim();
        }
    });

    return trimmedValues
};
