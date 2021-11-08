import React from "react";

function IsBoil(props) {
  const temp = props.celsius;
  if (temp >= 100) {
    return <p>Water would boil</p>;
  }
  return <p>Water would not boil</p>;
}

export default IsBoil;
