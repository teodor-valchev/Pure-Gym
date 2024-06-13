const BASE_URL = "http://localhost:3030/users";

export const login = async (userData) => {

    try {
        
        const fetchData = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
    
        const data = await fetchData.json();
    
        return data;
    } catch (err) {
        console.log(err);
    }
};
