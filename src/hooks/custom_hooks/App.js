import React, {useState} from "react";
import useCounter from "./useCounter";
import useInput from "./useInput";
import useOne from "./useOne";

function App(){

    useOne(() => {
        console.log("Called 1 time");
    });


    //example of useInput custom hook
    //const {value, error, onChange, onBlur} = useInput("Smth", true);

    // return (
    //     <form>
    //         <input value={value} onChange={onChange} onBlur={onBlur}/>
    //         {error && <span style={{color: "red"}}>{error}</span>}
    //     </form>
        
    // );


    //example of useCounter custom hook
    const {counter, count} = useCounter();

    return (
        <div>
            <h3>Clicked {counter} times</h3>
            <button onClick={count}>Press me!</button>
        </div>
    );


}

export default App;