import React, { useReducer } from "react";
import { increment, decrement, zeroing } from "./actions";
import reducer from "./reducer";

function App(){
    const [state, dispatch] = useReducer(reducer, { counter: 0} );

    return (
      <div>
        <h3>Counter: {state.counter}</h3>
        <br />
        <button onClick={() => dispatch(decrement(2))}>-2</button>
        <button onClick={() => dispatch(decrement(1))}>-1</button>
        <button onClick={() => dispatch(zeroing())}>0</button>
        <button onClick={() => dispatch(increment(1))}>+1</button>
        <button onClick={() => dispatch(increment(2))}>+2</button>
      </div>
    );
}

export default App;