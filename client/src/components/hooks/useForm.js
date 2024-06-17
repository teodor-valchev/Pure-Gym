import { useEffect, useState } from "react";

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

    const OnFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await submitHandler(values);
            setErrors({});
            setSubmitting(true);
        } catch (errorMsg) {
            setErrors(errorMsg)
        }
    };

    return {
        values,
        errors,
        submitting,
        onChange,
        OnFormSubmit,
    };
}

export default useForm;
