import React, {useState} from "react";
import useInput from "./useInput";
import useOne from "./useOne";

function App(){

    useOne(() => {
        console.log("Called 1 time");
    });


    // const [value, setValue] = useState("");

    const {value, error, onChange, onBlur} = useInput("Smth", true);


    return (
        <form>
            <input value={value} onChange={onChange} onBlur={onBlur}/>
            {error && <span style={{color: "red"}}>{error}</span>}
        </form>
        
    );
}

export default App;