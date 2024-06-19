import { useState } from "react";

function useUserState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistState = localStorage.getItem(key);

        if (persistState) {
            return JSON.parse(persistState);
        }

        return defaultValue;
    });

    const setPersistanceState = (value) => {
        if (!value) {
            setState({});
            localStorage.clear();
        } else {
            setState(value);
            let serializedValue;

            serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        }
    };

    return [state, setPersistanceState];
}

export default useUserState;
