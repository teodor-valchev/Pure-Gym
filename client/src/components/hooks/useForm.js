import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { validateUserLoginValues, validateUserRegisterValues } from "../../utils/validation";
import Path from "../../paths";

function useForm(submitHandler, initialValues) {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialValues);
    const [submitting, setSubmitting] = useState(false);
    const location = useLocation()
 
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
        
        if (location.pathname === Path.Register) {
            setErrors(validateUserRegisterValues(values));
        } else if (location.pathname === Path.Login) {
            setErrors(validateUserLoginValues(values));
        }

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

export default useForm;
