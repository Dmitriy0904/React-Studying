import React from "react";


function NumbersList(props) {
    const numbers = props.numbers;

    if(numbers.length == 0){
        return <h3>There are no elements</h3>
    }

    const elements = numbers.map((number) => (
      <li key={number.toString()}> {number * 2}</li>
    ));

    return <ul>{elements}</ul>;
}

export default NumbersList;