import { useState } from "react";

function useInput(initialValue = ""){
    const [value, setValue] = useState(initialValue);

    return {
        value: value,
        onchange = (event) => {setValue(event.target.value)},
    };
}