export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const isAllFieldsRequired = (...params) => params.every((field) => field !== "");
