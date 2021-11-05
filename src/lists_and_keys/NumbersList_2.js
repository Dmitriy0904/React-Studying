//Embedding map() in JSX 
import React from "react";

function Element(props){
    return <li>{props.value}</li>
}


function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((item) => (
        <Element value={item} />
      ))}
    </ul>
  );
}

export default NumberList;