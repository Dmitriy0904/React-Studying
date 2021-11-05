import React from "react";

const numbers = [1, 2, 3, 4, 5];

function NumbersList() {
  const elements = numbers.map((number) => <li>{number * 2}</li>);
  return <ul>{elements}</ul>;
}

export default NumbersList;