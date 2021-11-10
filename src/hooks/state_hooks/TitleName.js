import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

function TitleName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log("Page has been rendered");
  }, []);

  useEffect(() => {
    //Changing html-page title
    document.title = `Hello ${name}`;
    setIsSubmit((isSubmit) => !isSubmit);
  }, [isSubmit]);

  return (
    <div>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br /> <br />
      <label>
        Age:{" "}
        <input
          type="number"
          min="10"
          max="110"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <br /> <br />
      <button onClick={(event) => setIsSubmit((isSubmit) => !isSubmit)}>Submit</button>
    </div>
  );
}

export default TitleName;
