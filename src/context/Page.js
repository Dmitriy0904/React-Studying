import React, { useContext } from "react";
import "./styles.css";
import { ThemeContext } from "./ThemeContext";

function Page() {
    const theme = useContext(ThemeContext);


  return <div style={{background: theme.backgroundColor, color: theme.color }}>Page</div>;
}

export default Page;
