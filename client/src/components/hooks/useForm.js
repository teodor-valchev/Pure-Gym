import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
    validateUserLoginValues,
    validateUserRegisterValues,
} from "../../utils/validation";
import Path from "../../paths";

function useForm(submitHandler, initialValues) {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialValues);
    const [submitting, setSubmitting] = useState(false);
    const location = useLocation();

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
            // the reason not to be async is because i still haven't made the register auth logic
            if (location.pathname === Path.Register) {
                setErrors(validateUserRegisterValues(values));
            }
            await submitHandler(values);
            setErrors({});
            setSubmitting(true);
        } catch (err) {
            if (location.pathname === Path.Login) {
                setErrors(await validateUserLoginValues(err.message));
            }
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
