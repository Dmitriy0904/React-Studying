import { useState } from "react";

function useInput(initial="", required=true){

    const [value, setValue] = useState(initial);
    const [error, setError] = useState(null);


    return {
        value: value,
        error: error,
        onChange: (event) => setValue(event.target.value),
        onBlur: (event) => {
            if(required && event.target.value === "") 
                setError("This is required field");
            else
                setError(null);
        },
    };
}

export default useInput;