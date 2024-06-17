export const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};

export const isAllFieldsRequired = (
    title,
    description,
    phoneNumber,
    age,
    image
) => {
    return title && description && phoneNumber && age && image;
};
