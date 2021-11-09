import React, { useState } from "react";

function NumberList() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    let newNum = Math.round(Math.random() * 100);
    setNumbers([...numbers, newNum]);
  };

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>New number</button>
    </div>
  );
}

export default NumberList;
