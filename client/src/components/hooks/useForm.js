import { useEffect, useState } from "react";

import { validateRegistrationValues } from "../../utils/validation";

function useForm(submitHandler, initialValues) {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialValues);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            setValues(initialValues);
        }
    }, [errors]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((state) => ({ ...state, [name]: value }));
    };

    const OnFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validateRegistrationValues(values));
        setSubmitting(true);
        submitHandler(values);
    };

    return {
        values,
        errors,
        submitting,
        onChange,
        OnFormSubmit,
    };
}

export default useForm
