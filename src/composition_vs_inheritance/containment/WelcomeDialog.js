import React from "react";
import "./../../App.css"

function FancyBorder(props){
    return (
        <div className={"fancy-border fancy-border-" + props.color}>
            {props.children}
        </div>
    );
}


function WelcomeDialog(){
    return (
        <FancyBorder color="blue">
            <h1>Hello</h1>
            <p>This is some text...</p>
        </FancyBorder>
    );
}

export default WelcomeDialog;