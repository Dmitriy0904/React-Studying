import { useContext, useState } from "react";

function useCounter(n = 0){
    const [counter, setCounter] = useState(n);

    return {
        counter: counter,
        count: () => setCounter(counter+ 1)
    };
}

export default useCounter;