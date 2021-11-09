import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Example() {
  const [count, setCount] = useState(0);

    //[] - componentDidMount
    //[] + return () => {....} - componentWillUnmount
    //[value] - хотим следить за изменением переменной value
    //без параметров - хотим следить за любым изменением
  useEffect(() => {
      console.log("Обновлено");
  }, [count]);

  return (
    <div>
      <p>You cliked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Clik me!</button>
    </div>
  );
}

export default Example;